const map = L.map('map', { zoomControl: false }).setView([-22.4318, -46.9578], 12);

L.control.zoom({ position: 'topleft' }).addTo(map);

const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
});
osm.addTo(map);

function criarPopup(feature, layer) {
    if (feature.properties && feature.properties.nome) {
        layer.bindPopup(`<b>${feature.properties.nome}</b>`);
    }
}

function criarPopupHospital(feature, layer) {
    const props = feature.properties;

    const conteudo = `    
        <div class="popup-hospital">
            <h4>${props.nome}</h4>
            <p><strong>Endereço:</strong> ${props.endereco}</p>
            <p><strong>CEP:</strong> ${props.cep}</p>
        </div>
    `;

    layer.bindPopup(conteudo);
}

function criarPopupUPA(feature, layer) {
    const props = feature.properties;

    const conteudo = `
        <div class="popup-UPAD">
            <h4>${props.nome}</h4>
            <p><strong>Endereço:</strong> ${props.endereco}</p>
            <p><strong>CEP:</strong> ${props.cep}</p>
            <p><strong>Horário de Funcionamento:</strong> ${props["horario de funcionamento"]}</p>
        </div>
    `;

    layer.bindPopup(conteudo);
}

function criarIconePino(cor) {
    const svgPino = `<svg width="30" height="42" viewBox="0 0 30 42" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 0C6.7 0 0 6.7 0 15c0 11.2 15 27 15 27s15-15.8 15-27C30 6.7 23.3 0 15 0z"
                  fill="${cor}" stroke="#ffffff" stroke-width="1.5"/>
            <circle cx="15" cy="15" r="6" fill="#ffffff"/>
        </svg>
    `;

    return L.divIcon({
        html: svgPino,
        className: 'icone-pino',
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0, -42]
    })
}

async function carregarGeoJSON(caminhoDoArquivo){
    try {
        const resposta = await fetch(caminhoDoArquivo);
        if (!resposta.ok) {
            throw new Error(`Arquivo não encontrado: ${caminhoDoArquivo}`);
        }
        return await resposta.json();
    } catch (error) {
        console.error(`Erro ao carregar "${caminhoDoArquivo}"`, error.message);
        return null;
    }
}

const CAMADAS_CONFIG = [
    { arquivo: 'data/hospitais.geojson', nome: 'Hospitais', cor: '#00008B',
        popup: criarPopupHospital, visivelPorPadrao: true },
    { arquivo: 'data/prontosocorro.geojson', nome: 'Pronto Socorro', cor: '#16DB65',
        popup: criarPopupUPA, visivelPorPadrao: true }
]

function criarCamadas(dados, config) {
    return L.geoJSON(dados, {
        pointToLayer: (feature, latlng) => {
            return L.marker(latlng, { icon: criarIconePino(config.cor) });
        },
        onEachFeature: config.popup || criarPopup
    });
}

function criarPainelCamadas(camadasCarregadas) {
    const painel = L.control({ position: 'bottomright' });

    painel.onAdd = function () {
        const div = L.DomUtil.create('div', 'painel-camadas');

        div.innerHTML = '<h4>Legenda</h4>';

        camadasCarregadas.forEach(({ config, camada }, indice) => {
            const linha = L.DomUtil.create('div', 'linha-camadas', div);

            const checkbox = L.DomUtil.create('input', '', linha);
            checkbox.type = 'checkbox';
            checkbox.id = `camada-${indice}`;
            checkbox.checked = !!config.visivelPorPadrao;

            const ponto = L.DomUtil.create('span', 'ponto-cor', linha);
            ponto.style.background = config.cor;

            const label = L.DomUtil.create('label', '', linha);
            label.htmlFor = checkbox.id;
            label.textContent = config.nome;

            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    camada.addTo(map);
                } else {
                    map.removeLayer(camada);
                }
            });

        });

        L.DomEvent.disableClickPropagation(div);
        return div;

    };
    painel.addTo(map);
}

async function initMap() {
    const camadasCarregadas = [];

    for (const config of CAMADAS_CONFIG) {
        const dados = await carregarGeoJSON(config.arquivo);

        if (!dados) continue;

        const camada = criarCamadas(dados, config);
        camadasCarregadas.push({ config, camada });

        if (config.visivelPorPadrao) {
            camada.addTo(map);
        }
    }
    criarPainelCamadas(camadasCarregadas);
}

initMap();
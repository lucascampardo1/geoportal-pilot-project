# SoroMap🏥

> Geoportal interativo para localização de hospitais e disponibilidade de soros antiofídicos, antiaracnídicos e antiescorpiônicos na região da Baixa Mogiana (Mogi Mirim, Mogi Guaçu, Itapira e Estiva Gerbi), interior do estado de São Paulo.

## 📍 Sobre o projeto

Este projeto nasceu como um estudo prático de geoprocessamento web e evoluiu para uma ferramenta de utilidade pública: mapear unidades de saúde da região e centralizar informações sobre a disponibilidade de soros contra picadas e mordidas de animais peçonhentos (aranhas, escorpiões e cobras).

A ideia é que qualquer pessoa — ou profissional de saúde — consiga visualizar rapidamente qual unidade hospitalar mais próxima possui o soro necessário em estoque, otimizando o tempo de resposta em situações de emergência.

⚠️ **Aviso importante:** este é um projeto de estudo e portfólio. As informações de disponibilidade de soro exibidas aqui **não substituem contato direto com a unidade de saúde ou serviços de emergência (SAMU 192)**. Sempre confirme a disponibilidade por telefone antes de se deslocar.

## ✨ Funcionalidades

- 🗺️ Mapa interativo com camadas de hospitais da região
- 💉 Visualização de disponibilidade de soros por unidade (antiofídico, antiaracnídico, antiescorpiônico)
- 📍 Popups com informações detalhadas de cada unidade (nome, endereço, CEP)
- ☑️ Painel de camadas com checkboxes para visualizar/ocultar cada categoria
- 🎨 Legenda visual integrada ao painel de camadas
- 🔍 Controle de zoom reposicionado para melhor usabilidade

## 🛠️ Tecnologias utilizadas

- **HTML5 / CSS3 / JavaScript (ES6+)**
- **[Leaflet.js](https://leafletjs.com/)** — biblioteca de mapas interativos
- **GeoJSON** — formato de dados geoespaciais
- **OpenStreetMap** — provedor de mapa base (tiles)

## 📂 Estrutura do projeto
```
geoportal/
├── index.html
├── css/
│ ├── style.css
│ └── legenda.css
│ └── popup.css
├── js/
│ └── main.js
└── data/
└── hospitais.geojson
```
## 🚀 Como rodar localmente

Pré-requisitos: Python 3 instalado (ou qualquer servidor HTTP local de sua preferência).

```bash
# Clone o repositório
git clone [url-do-seu-repositorio]

# Entre na pasta do projeto
cd geoportal

# Suba um servidor local
python3 -m http.server 8000
```

Acesse `http://localhost:8000` no navegador.

> O projeto precisa ser servido por um servidor local (não abrir direto o `index.html` pelo navegador), pois o carregamento dos arquivos GeoJSON via `fetch()` é bloqueado em requisições `file://`.

## 🗺️ Fonte dos dados
 
Os dados de localização e informações das unidades de saúde foram coletados manualmente a partir de fontes públicas (sites oficiais das instituições, IBGE). A disponibilidade de soros é [em construção — descreva aqui a metodologia de coleta quando definir, ex: "atualizada manualmente com base em contato direto com as unidades" ou "baseada em dados públicos da Vigilância Epidemiológica"].

## 🧭 Roadmap

- [x] Definir nome oficial do projeto
- [ ] Adicionar todas as unidades de saúde da região
- [ ] Estruturar dados de disponibilidade de soro por unidade
- [ ] Migrar o projeto para **TypeScript**
- [ ] Adicionar filtro por tipo de soro disponível
- [ ] Ferramenta de medição de distância até a unidade mais próxima

## 📸 Prints do projeto

_(em breve)_

## 👤 Autor

**Lucas Campardo** — Estudante de Engenharia da Computação

## 📄 Licença

MIT License © 2026 Lucas Campardo.
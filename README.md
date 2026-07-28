# Soromapa🏥

> Geoportal interativo para localização de hospitais e disponibilidade de soros antiofídicos, antiaracnídicos e antiescorpiônicos na região de Campinas e São João da Boa Vista, SP.

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

- **HTML5 / SCSS / TypeScript**
- **[Leaflet.js](https://leafletjs.com/)** — biblioteca de mapas interativos
- **GeoJSON** — formato de dados geoespaciais
- **OpenStreetMap** — provedor de mapa base (tiles)

## 📂 Estrutura do projeto
```
soromap/
├── index.html
├── src/
│   ├── scss/
│   │   ├── base/
│   │   │   └── _variables.scss
│   │   ├── layouts/
│   │   │   └── _legenda.scss
│   │   │   └── _popup.scss
│   │   └── main.scss
│   ├── css/
│   │   ├── style.css
│   │   
│   ├── js/
│       └── main.js
├── data/
│   ├── hospitais.geojson
│   └── prontosocorro.geojson
└── README.md
```

## 🗺️ Fonte dos dados
 
Os dados de localização e informações das unidades de saúde foram coletados manualmente a partir de fontes públicas (sites oficiais das instituições, IBGE).

## 🧭 Roadmap

- [x] Definir nome oficial do projeto
- [ ] Adicionar todas as unidades de saúde da região
- [ ] Estruturar dados de disponibilidade de soro por unidade
- [x] Migrar o projeto para **TypeScript**
- [ ] Adicionar filtro por tipo de soro disponível
- [ ] Ferramenta de medição de distância até a unidade mais próxima

## 📸 Prints do projeto

_(em breve)_

## 👤 Autor

**Lucas Campardo** — Estudante de Engenharia da Computação

## 📄 Licença

MIT License © 2026 Lucas Campardo.


const config = {
    style: "mapbox://styles/mapbox/light-v11",
    accessToken: "pk.eyJ1Ijoic2Fsb21lLWVzdGV2ZXMiLCJhIjoiY204aGk5YzA3MDJnODJpc2I5Y3YwcHRnYiJ9.aTwjysqDNNh3KnCofj05wQ",
    CSV: "https://raw.githubusercontent.com/renascenca/Mapa-Ranking-das-Escolas-2025/main/Escolas2025.csv",
    center: [-11.0897451, 39.7035119], //Lng, Lat
    zoom: 6, //Default zoom
    title: "Onde ficam as escolas do Ranking?",
    description: "Navegue no mapa para explorar as escolas - públicas e privadas - que fazem parte do Ranking das Escolas da Renascença, com base nos exames nacionais de 2024.",
    sideBarInfo: ["Escola_completo", "Tipo de escola", "Média Texto"],
    popupInfo: ["Escola_completo"],
    filters: [
        {
            type: "checkbox",
            title: "Tipo de Escola: ",
            columnHeader: "Tipo de escola",
            listItems: ["Privada", "Pública"]
        },
        {
            type: "dropdown",
            title: "Distrito: ",
            columnHeader: "Distrito",
            listItems: [
                'Açores',
                'Aveiro',
                'Beja',
                'Braga',
                'Bragança',
                'Castelo Branco',
                'Coimbra',
                'Estrangeiro',
                'Évora',
                'Faro',
                'Guarda',
                'Leiria',
                'Lisboa',
                'Madeira',
                'Portalegre',
                'Porto',
                'Santarém',
                'Setúbal',
                'Viana do Castelo',
                'Vila Real',
                'Viseu'
            ]
        },
        {
            type: "checkbox",
            title: "Grupo de média: ",
            columnHeader: "Média Grupo",
            listItems: [
                'Mais de 14',
                '12 a 13,99',
                '10 a 11,99',
                '8 a 9,99'
            ]
        }
    ]

};

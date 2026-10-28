
const config = {
    style: "mapbox://styles/radio-renascenca/cmvgn89le00e001s5f2vj8ueo",
    accessToken: "pk.eyJ1IjoicmFkaW8tcmVuYXNjZW5jYSIsImEiOiJjbXZnbmd4dzMwMWUxMnhzZjlsb2g2bnN5In0.2OjQwFIosQB_h2b_kiS5Gg",
    CSV: "https://raw.githubusercontent.com/renascenca/Mapa-Ranking-das-Escolas-2025/main/Escolas2025.csv",
    center: [-11.0897451, 39.7035119], //Lng, Lat
    zoom: 6, //Default zoom
    title: "Onde ficam as escolas do Ranking?",
    description: "Navegue no mapa para explorar as escolas - públicas e privadas - que fazem parte do Ranking das Escolas da Renascença, com base nos exames nacionais de 2025.",
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

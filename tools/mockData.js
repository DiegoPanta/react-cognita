const courses = [
    {
        id: 1,
        name: "Ciencia da Computacao",
        description: "É a ciência que estuda as técnicas, metodologias, instrumentos computacionais e aplicações tecnológicas, que automatizem os processos e desenvolvam soluções de processamento de dados de entrada e saída pautado no computador, de forma que se transforme em informação.",
        credit: 3305,
        frequency: "diario",
        shift: "Noite",
        hour: "18:40",
        place: "Polo Central",
        startDate: new Date(),
        amount: 1000,
        advantage: 20
    },
    {
        id: 2,
        name: "Direito",
        description: "A palavra Ciências Jurídicas e Sociais possui mais de um significado correlato: É o sistema de normas de conduta e princípios criado e imposto por um conjunto de instituições para regular as relações sociais: é o que os juristas chamam de direito objetivo.",
        credit: 3305,
        frequency: "diario",
        shift: "Manhã",
        hour: "08:00",
        place: "Polo Central",
        startDate: new Date(),
        amount: 1500,
        advantage: 10
    },
    {
        id: 3,
        name: "Medicina",
        description: "O estudante de medicina adquire conhecimentos fundamentais nas áreas de cirurgia, ginecologia e obstetrícia, pediatria, clínica médica e saúde coletiva, tornando-se competente para prestar assistência médica de qualidade, atuar na promoção da saúde.",
        credit: 5760,
        frequency: "diario",
        shift: "integral",
        hour: "-",
        place: "Polo Central",
        startDate: new Date(),
        amount: 8086,
        advantage: 0
    },
    {
        id: 4,
        name: "Engenharia de Pesca",
        description: "O Engenheiro de Pesca é o profissional multidisciplinar da área das Ciências Agrárias, responsável pelo planejamento e produção organismos aquáticos (ex. peixes, crustáceos, moluscos e algas) em cativeiro em suas diversas etapas.",
        credit: 3305,
        frequency: "diario",
        shift: "Tarde",
        hour: "13:00",
        place: "Polo em São Cristovão",
        startDate: new Date(),
        amount: 900,
        advantage: 40
    },
    {
        id: 5,
        name: "Engenharia Agronomica",
        description: "Engenharia agrícola é a engenharia da produção e processamento agrícola. A engenharia agrícola combina as disciplinas dos princípios de engenharia mecânica, civil, elétrica, ciência de alimentos e engenharia química com um conhecimento dos princípios agrícolas de acordo com os princípios tecnológicos.",
        credit: 3305,
        frequency: "diario",
        shift: "manha",
        hour: "08:00",
        place: "Polo São Cristovão",
        startDate: new Date(),
        amount: 1200,
        advantage: 30
    },
    {
        id: 6,
        name: "Pedagogia",
        description: "Pedagogia é a ciência que tem como objeto de estudo a educação, o processo de ensino e a aprendizagem. O sujeito é o ser humano, enquanto educando.",
        credit: 3305,
        frequency: "diario",
        shift: "Tarde",
        hour: "13:00",
        place: "Polo Central",
        startDate: new Date(),
        amount: 700,
        advantage: 0
    },
    {
        id: 7,
        name: "Administração",
        description: "A Administração ou Gestão é a ciência social que estuda e sistematiza as práticas usadas para administrar. O termo administração significa direção, gerência. Ou seja, é o ato de administrar ou gerir negócios, pessoas ou recursos, com o objetivo de alcançar metas definidas.",
        credit: 3305,
        frequency: "diario",
        shift: "Noite",
        hour: "18:45",
        place: "Polo Central",
        startDate: new Date(),
        amount: 1700,
        advantage: 0
    },
    {
        id: 8,
        name: "Sistemas para Internet",
        description: "Este profissional projeta, desenvolve e implanta sites de internet. Monta sites para redes internas das empresas (intranet) e trabalha na implantação de sistemas de comércio eletrônico. A frente de trabalho mais dinâmica está no desenvolvimento de aplicativos para smartphones e tablets.",
        credit: 2500,
        frequency: "diario",
        shift: "Noite",
        hour: "18:45",
        place: "Polo Central",
        startDate: new Date(),
        amount: 500,
        advantage: 10
    },
    {
        id: 9,
        name: "Gastronomia",
        description: "A gastronomia é um ramo de conhecimento que abrange a culinária, as bebidas, os materiais usados na alimentação e, em geral, todos os aspectos culturais a ela associados.",
        credit: 2500,
        frequency: "diario",
        shift: "Noite",
        hour: "18:45",
        place: "Polo Central",
        startDate: new Date(),
        amount: 400,
        advantage: 10
    },
    {
        id: 10,
        name: "Psicologia",
        description: "Psicologia é o estudo do comportamento e as funções mentais. A psicologia tem como objetivo imediato a compreensão de grupos e indivíduos tanto pelo estabelecimento de princípios universais como pelo estudo de casos específicos, e tem, segundo alguns, como objetivo final o benefício geral da sociedade.",
        credit: 3305,
        frequency: "diario",
        shift: "Noite",
        hour: "18:45",
        place: "Polo Central",
        startDate: new Date(),
        amount: 1900,
        advantage: 10
    },
];

const newCourse = {
    id: null,
    name: "",
    description: "",
    credit: null,
    frequency: "",
    shift: "",
    hour: "",
    place: "",
    startDate: null,
    amount: null,
    advantage: null
};

module.exports = {
    newCourse,
    courses
};

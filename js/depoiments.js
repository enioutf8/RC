const depoiments = [
    {
        id: "a2b8cfc1-4c8e-4df1-b45e-df2bda1db122",
        author: "Fernando Matheus",
        description: "<p>Serviço impecável! Precisei de um chaveiro com urgência e fui atendido rapidamente.</p> O profissional foi extremamente educado, ágil e demonstrou muito conhecimento. Fiquei tranquilo durante todo o processo e o resultado foi excelente. Com certeza voltarei a contratar!",
    },
    {
        id: "3d6f98b1-79b2-4cf8-920e-176cbe33e3e2",
        author: "Larissa Alves",
        description: "<p>Atendimento excelente! Chegaram no horário combinado e resolveram tudo com rapidez e segurança.</p> Além disso, explicaram todo o procedimento com paciência e cobraram um preço justo. Um serviço honesto que dá gosto de recomendar.",
    },
    {
        id: "c7f41212-92a1-49a1-bd46-ec31479cde70",
        author: "João Pedro",
        description: "<p>Fiquei muito satisfeito com o serviço prestado.</p> O chaveiro não só resolveu meu problema como também revisou outras fechaduras da casa por iniciativa própria. Um atendimento completo e atencioso, que me surpreendeu positivamente.",
    },
    {
        id: "2d09174d-60c5-4bd4-b8a7-b6598cbd10a3",
        author: "Patrícia Souza",
        description: "<p>Excelente profissional! Resolveu um problema antigo com a fechadura da minha casa que ninguém conseguia resolver.</p> Foi cuidadoso, trouxe ferramentas modernas e fez questão de testar tudo comigo antes de encerrar. Atendimento nota 10!",
    },
    {
        id: "fe3f1b3a-580b-4be2-9b63-69f306b4239a",
        author: "Carlos Henrique",
        description: "<p>Serviço rápido e de qualidade.</p> O chaveiro foi muito simpático e prestativo desde o primeiro contato pelo WhatsApp. Chegou dentro do horário prometido e solucionou meu problema com precisão. Já salvei o contato para futuras emergências.",
    },
    {
        id: "d84277b2-7a95-4f1b-8b02-926fa60dc173",
        author: "Mariana Lima",
        description: "<p>Desde o primeiro contato até a finalização do serviço, fui muito bem atendida.</p> Profissional detalhista, educado e com muita experiência. Resolveu meu problema e ainda deu dicas de segurança para a casa. Recomendo sem pensar duas vezes!",
    }
];



let areaDepoiments = document.getElementById('areaDepoiments');

depoiments.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="item-depoiments">
        <div class="icon-aspas flex-position-center"></div>
        <div class="content-depoiments">
            <div class="text-default">${item?.description}</div>
            <h5 class="text-default">${item?.author}</h5>
        </div>
    </div>
    `

    areaDepoiments.appendChild(div)
})
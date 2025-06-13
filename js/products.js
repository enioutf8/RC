const products = [
    {
        id: "1",
        title: "Fechadura Digital de Sobrepor Elsys Pop",
        description: "<p>A fechadura digital combina segurança e praticidade, com capacidade para até 200 senhas numéricas e abertura por senha ou TAG. Conta com trava dupla e travamento automático, oferecendo proteção reforçada.</p> Seu teclado touch luminoso com tecla Elsys e campainha sonora garante fácil uso mesmo em ambientes escuros. Funciona com 4 pilhas AA, mantendo-se operante mesmo sem energia elétrica.",
        imgs: [
            './imgs/products/ELSYS/Fechadura_Digital_de_Sobrepor_Prata/01.png',
            './imgs/products/ELSYS/Fechadura_Digital_de_Sobrepor_Prata/02.png',
            './imgs/products/ELSYS/Fechadura_Digital_de_Sobrepor_Prata/03.png',
            './imgs/products/ELSYS/Fechadura_Digital_de_Sobrepor_Prata/04.png',
            './imgs/products/ELSYS/Fechadura_Digital_de_Sobrepor_Prata/05.png'
        ]
    },
    {
        id: "2",
        title: "Fechadura Digital de Sobrepor Intelbras FD 1000",
        description: "<p>Fechadura digital com capacidade para até 9 senhas (1 administrador, 4 visitantes e 4 de uso diário), ideal para portas de 25 a 50 mm.</p> Possui teclado touch screen moderno, travamento automático para mais segurança e funciona com 4 pilhas AA inclusas, com duração média de até 1 ano, sem necessidade de energia elétrica.",
        imgs: [
            './imgs/products/INTELBRAS/Fechadura_Digital_de_Sobrepor_Intelbras_FD_1000/01.png',
            './imgs/products/INTELBRAS/Fechadura_Digital_de_Sobrepor_Intelbras_FD_1000/02.png',
            './imgs/products/INTELBRAS/Fechadura_Digital_de_Sobrepor_Intelbras_FD_1000/03.png',
            './imgs/products/INTELBRAS/Fechadura_Digital_de_Sobrepor_Intelbras_FD_1000/04.png',
        ]
    },
    {
        id: "3",
        title: "Intelbras FR 10 Preto Black piano Direita/Esquerda",
        description: "<p>Fechadura digital de sobrepor com acabamento black piano e abertura por senha. Compatível com portas de madeira ou metal, com espessura entre 2,5 cm e 5 cm.</p> Permite até 9 senhas de acesso e possui indicador de bateria fraca. Funciona com 4 pilhas AA, sem necessidade de energia elétrica, podendo ser instalada em portas com abertura para direita ou esquerda.",
        imgs: [
            './imgs/products/INTELBRAS/Intelbras_FR_10_Preto_Black_piano_DireitaEsquerda/01.png',
            './imgs/products/INTELBRAS/Intelbras_FR_10_Preto_Black_piano_DireitaEsquerda/02.png',
            './imgs/products/INTELBRAS/Intelbras_FR_10_Preto_Black_piano_DireitaEsquerda/03.png',
        ]
    },
    {
        id: "4",
        title: "Fechadura smart look inteligente xsdts eletrônica Tuya Wifi",
        description: "<p>Fechadura inteligente com múltiplas formas de acesso: impressão digital, senha, cartão RF, chave física ou via aplicativo Tuya, com desbloqueio remoto de qualquer lugar.</p> Ideal para casas, escritórios e imóveis de aluguel como Airbnb, permite autorizações temporárias. Compatível com portas de 3,5 a 7 cm e alça ajustável. Alimentada por 4 pilhas AAA.",
        imgs: [
            './imgs/products/XSDTS/Fechadura_smart_look_inteligente_xsdts_eletrônica_Tuya_Wifi/02.png',
            './imgs/products/XSDTS/Fechadura_smart_look_inteligente_xsdts_eletrônica_Tuya_Wifi/01.png',
        ]
    },
    {
        id: "5",
        title: "Fechadura smart look Digital Inteligente Câmera Eletrônica ",
        description: "<p>Fechadura digital inteligente com 5 formas de desbloqueio: biometria, senha, cartão RF, aplicativo Tuya ou chave física. Permite acesso remoto via celular e autorizações temporárias ideais para Airbnb.</p> Compatível com portas de 3,5 a 7 cm de espessura, possui alça ajustável para ambos os lados. Funciona com 4 pilhas AAA e é ideal para residências, escritórios e imóveis de aluguel.",
        imgs: [
            './imgs/products/XSDTS/Fechadura_smart_look_Digital_Inteligente_Camera_Eletronica/01.png',
            './imgs/products/XSDTS/Fechadura_smart_look_Digital_Inteligente_Camera_Eletronica/02.png',
        ]
    },
    {
        id: "6",
        title: "Fechadura NOVA DIGITAL Inteligente Wifi De Sobrepor ",
        description: "<p>A Fechadura Digital SM07 da Nova digital oferece abertura por biometria, senha, tag, chave física e controle remoto via aplicativo.</p> Com instalação de sobrepor, é compatível com portas de 25 a 50 mm de espessura. Suporta até 300 usuários, sendo ideal para residências, comércios e imóveis de locação como Airbnb. Possui design moderno, compacto e excelente custo-benefício.",
        imgs: [
            './imgs/products/NOVA DIGITAL/Fechadura_NOVA_DIGITAL_Inteligente_Wifi_De_Sobrepor/01.png',
            './imgs/products/NOVA DIGITAL/Fechadura_NOVA_DIGITAL_Inteligente_Wifi_De_Sobrepor/02.png',
            './imgs/products/NOVA DIGITAL/Fechadura_NOVA_DIGITAL_Inteligente_Wifi_De_Sobrepor/03.png',
        ]
    }
]

let carroselProduts = document.getElementById('carroselProducts')
products.forEach(item => {
    let count = 0;
    const div = document.createElement('div');
    div.className = "item-product";
    div.innerHTML = `
        <div class="content-product">
            <div class="area-photo">
                <img src="${item.imgs?.[0] || ''}" />
            </div>
            <div class="area-description-product text-default">
            <div class="title-product"> <h5 class="text-default" >${item?.title}</h5></div>
            ${item?.description}
            </div>
        </div>
          <div class="ball-back  "></div>
    `;
    carroselProduts.appendChild(div);
    const img = div.querySelector('img');
    const cycleImages = () => {
        count = (count + 1) % item?.imgs?.length;
        img.src = item.imgs[count];
        img.classList.remove('fade-in');
        void img.offsetWidth;
        img.classList.add('fade-in');
        setTimeout(cycleImages, 9000);
    };
    setTimeout(cycleImages, 9000);
});


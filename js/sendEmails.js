
const homeNome = document.getElementById('homeNome');
const homeWhatsapp = document.getElementById('homeWhatsapp');
const homeEmail = document.getElementById('homeEmail');
const homeMensagem = document.getElementById('homeMensagem');
homeMensagem.defaultValue = 'Gostaria de fazer um orçamento';
const btnSendHome = document.getElementById('btnSendHome');
const btnWhatsapHeader = document.getElementById('btnWhatsapHeader')

const numero = 5584988745331;
btnSendHome.addEventListener('click', (e) => {
    e.preventDefault();

    var objEmailSend =
    {
        nome: homeNome.value,
        contact: homeWhatsapp.value,
        email: homeEmail.value,
        message: `Olá, me chamo ${homeNome.value} e ${homeMensagem.value}`
    }

    if (objEmailSend?.nome?.length > 0 && objEmailSend?.contact?.length > 0 && objEmailSend?.email?.length > 0 && objEmailSend?.message?.length > 0) {
        const link = `https://wa.me/${numero}?text=${encodeURIComponent(objEmailSend?.message)}`;
        window.open(link, '_blank');
    } else {
        alert('insira valores')
    }

})

function btnWhatsappSend() {
    const message = 'Olá! Tudo bem? Gostaria de solicitar um orçamento.'
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    window.open(link, '_blank');
    console.log('AUI')
}

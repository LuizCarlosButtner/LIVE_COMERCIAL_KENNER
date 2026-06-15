// Script do Countdown - Contador regressivo
const dataAlvo = new Date('2026-06-18T18:30:00-03:00');
let intervaloContagem;

function atualizarContagem() {
    const agora = new Date();
    const diferenca = dataAlvo - agora;

    if (diferenca <= 0) {
        clearInterval(intervaloContagem);
        const rotulo = document.getElementById('rotulo-contagem');
        if (rotulo) {
            rotulo.innerText = 'AO VIVO';
            rotulo.classList.add('animate-pulse', 'text-lg', 'font-bold');
            rotulo.classList.remove('font-medium');
        }
        document.getElementById('dias').innerText = '00';
        document.getElementById('horas').innerText = '00';
        document.getElementById('minutos').innerText = '00';
        document.getElementById('segundos').innerText = '00';
        return;
    }

    const elementoDias = document.getElementById('dias');
    const elementoHoras = document.getElementById('horas');
    const elementoMinutos = document.getElementById('minutos');
    const elementoSegundos = document.getElementById('segundos');

    if (elementoDias) elementoDias.innerText = Math.floor(diferenca / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    if (elementoHoras) elementoHoras.innerText = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    if (elementoMinutos) elementoMinutos.innerText = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    if (elementoSegundos) elementoSegundos.innerText = Math.floor((diferenca % (1000 * 60)) / 1000).toString().padStart(2, '0');
}

intervaloContagem = setInterval(atualizarContagem, 1000);
atualizarContagem();

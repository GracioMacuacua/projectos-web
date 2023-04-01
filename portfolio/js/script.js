/* Configuração de eventos do icone do menu */

let iconeMenu = document.querySelector('#icone-menu');
let navbar = document.querySelector('.navbar');

iconeMenu.onclick = () => {
    iconeMenu.classList.toggle('bx-x');
    navbar.classList.toggle('activo');
}

/**
 * 
 * 
 * 
 */
let seccoes = document.querySelectorAll('section');
let linksnav = document.querySelectorAll('header nav a');

window.onscroll = () => {
    seccoes.forEach(sec => {
        let topo = window.scrollY;
        let offset = sec.offsetTop - 150;
        let altura = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(topo >= offset && topo < offset + altura) {
            linksnav.forEach(links => {
                links.classList.remove('activo');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('activo');
            });
        }
    });

    let cabecalho = document.querySelector('header');

    cabecalho.classList.toggle('sticky', window.scrollY > 100);

    iconeMenu.classList.remove('bx-x');
    navbar.classList.remove('activo');
}

ScrollReveal({
    reset: true,
    distance: '80px',
    delay: 200
});

ScrollReveal().reveal('.conteudo-inicio, .titulo', { origin: 'top'});

ScrollReveal().reveal('.imagem-inicio, .container-habilidades, .caixa-portfolio, .contacto form', {origin: 'bottom'});

ScrollReveal().reveal('.conteudo-inicio h1, .imagem-sobre', {origin: 'left'});

ScrollReveal().reveal('.conteudo-inicio p, .conteudo-sobre', {origin: 'right'});

const digitado = new Typed('.texto-digitado', {
    strings: ['Desenvolvedor Web'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
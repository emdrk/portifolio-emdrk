// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Adicione a classe "show-arrow" à seta inicialmente
    document.querySelector(".arrow-down").classList.add("show-arrow");

    // Adicione um ouvinte de rolagem para controlar a visibilidade da seta
    window.addEventListener("scroll", function () {
        // Verifique se a posição de rolagem está abaixo da altura da tela inicial
        var mainFirstHeight = document.querySelector(".main-first").offsetHeight;
        var contentTop = document.getElementById("content").offsetTop;
        var scrollPosition = window.scrollY || window.pageYOffset;

        if (scrollPosition < mainFirstHeight) {
            // Se estiver na tela inicial, mostre a seta
            document.querySelector(".arrow-down").classList.add("show-arrow");
        } else {
            // Se estiver na seção de conteúdo, esconda a seta
            document.querySelector(".arrow-down").classList.remove("show-arrow");
        }
    });
});

function scrollToContent() {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
}


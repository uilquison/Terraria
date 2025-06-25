document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    body.style.backgroundImage = "url('./imagens/terraria_background.jpg')";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center center";
    body.style.backgroundAttachment = "fixed";
    body.style.backgroundSize = "cover";
});

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll('.navbar ul li a').forEach(link => {
        // Remove "active" de todos os links
        link.classList.remove('active');
        // Se o href do link corresponde à página atual, aplica "active"
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
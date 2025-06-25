document.addEventListener('DOMContentLoaded', () => {
    console.log("Página 'História' carregada!");

    // Define a imagem de plano de fundo dinamicamente (sem a vírgula extra)
    document.body.style.backgroundImage = 'url("imagens/crim_background.webp")';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';

    // Exemplo de funcionalidade comum: ajuste de classes ou inicialização de animações
    const elementosInterativos = document.querySelectorAll('.elemento-interativo');
    elementosInterativos.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('ativo');
        });
    });

    // Outras funcionalidades comuns podem ser adicionadas aqui...

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
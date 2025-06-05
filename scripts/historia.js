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
});
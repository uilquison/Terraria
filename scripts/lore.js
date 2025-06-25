document.addEventListener('DOMContentLoaded', () => {
    console.log("lore.js carregado com sucesso.");
    
    const btnRoxo = document.querySelector('.navbar .btn-roxo');
    if (btnRoxo) {
        btnRoxo.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o redirecionamento para "index.html"
            
            // Cria (ou retoma) o contexto de áudio
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
            
            const clickSound = new Audio('audios/Terraria Boss Spawn Sound Effect.mp3');
            clickSound.crossOrigin = "anonymous";
            
            // Cria uma fonte de áudio a partir do objeto audio
            const track = audioContext.createMediaElementSource(clickSound);
            
            // Cria um nó de ganho e aumenta o ganho
            const gainNode = audioContext.createGain();
            gainNode.gain.value = 2.0; // Aumenta o ganho para 2x
            
            // Conecta os nós
            track.connect(gainNode).connect(audioContext.destination);
            
            // Tenta reproduzir o som
            clickSound.play().catch(err => {
                console.error("Erro ao reproduzir o som:", err);
            });
            
            // Chama a função que inicia as animações
            spawnAnimations();
        });
    }
    
    // Função para criar elementos animados
    function spawnAnimations() {
        // Cria um container para as animações laterais
        const container = document.createElement('div');
        container.className = 'animation-container';
        document.body.appendChild(container);
        
        // Dados da imagem grande central (posição fixa)
        const bigImageX = window.innerWidth / 2;
        const bigImageY = window.innerHeight * 0.9; // considerando bottom: 10%
        
        // Cria as imagens animadas posicionadas nas laterais
        for (let i = 0; i < 6; i++) {
            const animImg = document.createElement('img');
            animImg.src = `imagens/Eater_of_Souls.webp`; // Ex: Eater_of_Souls.webp
            animImg.className = 'animated-image';
            animImg.style.position = 'absolute';
            
            // Sorteia uma posição horizontal:
            // Para garantir que fiquem nas laterais, usamos percentuais próximos a 0% ou 100%
            let leftPercent;
            if (Math.random() < 0.5) {
                // Lateral esquerda, entre 0% a 12%
                leftPercent = Math.random() * 12;
            } else {
                // Lateral direita, entre 88% a 100%
                leftPercent = 88 + Math.random() * 12;
            }
            animImg.style.left = leftPercent + '%';
            
            // Sorteia uma posição vertical de forma aleatória (excetuando extremos)
            const topPercent = Math.random() * 80 + 10;
            animImg.style.top = topPercent + '%';
            
            // Converte a posição da imagem para pixels
            const imgX = window.innerWidth * leftPercent / 100;
            const imgY = window.innerHeight * topPercent / 100;
            // Calcula o ângulo em radianos e converte para graus
            const angleRad = Math.atan2(bigImageY - imgY, bigImageX - imgX);
            const angleDeg = angleRad * 180 / Math.PI;
            // Em vez de aplicar diretamente, define a propriedade customizada --base-rotation para que
            // a animação nos keyframes use esse valor (se subtrair 90° para ajustar a orientação)
            animImg.style.setProperty('--base-rotation', '-90deg');
            
            // Adiciona a animação de flutuação com um delay aleatório
            animImg.style.animation = 'floatAnimation 3s ease-in-out infinite';
            animImg.style.animationDelay = (Math.random() * 2) + 's';

            container.appendChild(animImg);
        }
        
        // Cria a imagem grande que emerge do fundo (fica centralizada)
        const bigImage = document.createElement('img');
        bigImage.src = 'imagens/the-eater-of-worlds.png'; // Altere para o caminho correto da imagem grande
        bigImage.className = 'big-emerging-image';
        bigImage.style.position = 'fixed';
        bigImage.style.bottom = '-100%';  // Inicia fora da tela
        bigImage.style.left = '50%';
        // Aumenta o tamanho (largura de 1000px, ajuste conforme necessário)
        bigImage.style.width = '1000px';
        // Define um z-index alto para que a imagem fique na frente do texto
        bigImage.style.zIndex = '9999';
        // Rotaciona 90 graus para a direita, mantendo a centralização
        bigImage.style.transform = 'translateX(-50%) rotate(90deg)';
        document.body.appendChild(bigImage);
        
        // Anima a imagem grande para subir do fundo
        setTimeout(() => {
            bigImage.style.transition = 'bottom 2s ease-out';
            bigImage.style.bottom = '1%';
        }, 100);
        
        // Remove as animações após 10 segundos (ajuste conforme necessário)
        setTimeout(() => {
            container.remove();
            bigImage.remove();
        }, 10000);
    }
    
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
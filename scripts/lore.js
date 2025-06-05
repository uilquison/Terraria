document.addEventListener('DOMContentLoaded', () => {
    console.log("lore.js carregado com sucesso.");
    
    const btnRoxo = document.querySelector('.navbar .btn-roxo');
    if (btnRoxo) {
        btnRoxo.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o redirecionamento para "index.html"
            
            // Cria um contexto de áudio
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const clickSound = new Audio('audios/Terrari Boss Spawn Sound Effect.mp3');
            clickSound.crossOrigin = "anonymous";
            
            // Cria uma fonte de áudio a partir do objeto audio
            const track = audioContext.createMediaElementSource(clickSound);
            
            // Cria um nó de ganho e aumenta o ganho
            const gainNode = audioContext.createGain();
            gainNode.gain.value = 2.0; // Aumenta o ganho para 2x
            
            // Conecta os nós
            track.connect(gainNode).connect(audioContext.destination);
            
            clickSound.play();
        });
    }
});
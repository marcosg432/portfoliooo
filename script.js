function createFireSpark() {
    const fireSpark = document.createElement('div');
    fireSpark.classList.add('fire-spark');

    // Posição aleatória para a poeira (evitar criar acima do cabeçalho)
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight - 100) + 100; // Garante que y seja sempre abaixo do cabeçalho

    fireSpark.style.left = `${x}px`;
    fireSpark.style.top = `${y}px`;

    // Reduzindo o tamanho e deixando as faíscas mais irregulares (parecendo poeira)
    fireSpark.style.width = '4px'; // Menor, para parecer poeira
    fireSpark.style.height = '4px'; // Menor
    fireSpark.style.borderRadius = '50%'; // Formato arredondado (mais irregular)

    // Mudando a cor para algo mais suave e parecido com poeira
    fireSpark.style.background = `rgba(145, 45, 45, ${Math.random() * 1.6 + 0.4})`; // Cor de fogo, mas mais suave

    document.body.appendChild(fireSpark);

    // Adicionar efeito de movimento horizontal, indo para o lado esquerdo
    const randomSpeed = Math.random() * 2 + 1; // Velocidade aleatória
    const moveX = -randomSpeed; // Movimento para a esquerda (negativo para a direção da esquerda)
    const moveY = (Math.random() - 0.5) * randomSpeed * 0.5; // Movimento vertical suave

    // Animação da poeira para movimento horizontal
    const animation = setInterval(() => {
        // Atualizando as posições horizontais e verticais para mover a poeira para a esquerda
        fireSpark.style.left = parseFloat(fireSpark.style.left) + moveX + 'px';
        fireSpark.style.top = parseFloat(fireSpark.style.top) + moveY + 'px';

        // Remover a poeira depois que ela sair da tela
        if (parseFloat(fireSpark.style.left) < 0 || parseFloat(fireSpark.style.top) < 0 || parseFloat(fireSpark.style.top) > window.innerHeight) {
            clearInterval(animation);
            fireSpark.remove();
        }
    }, 10); // Atualiza a animação a cada 16ms
}

// Reduzir a quantidade de poeira gerada
setInterval(createFireSpark, 180);

function createFireSpark() {
    const fireSpark = document.createElement('div');
    fireSpark.classList.add('fire-spark');

    // Posição aleatória para a poeira (evitar criar acima do cabeçalho)
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight - 100) + 100; // Garante que y seja sempre abaixo do cabeçalho

    fireSpark.style.left = `${x}px`;
    fireSpark.style.top = `${y}px`;

    // Reduzindo o tamanho e deixando as faíscas mais irregulares (parecendo poeira)
    fireSpark.style.width = '4px'; // Menor, para parecer poeira
    fireSpark.style.height = '4px'; // Menor
    fireSpark.style.borderRadius = '50%'; // Formato arredondado (mais irregular)

    // Mudando a cor para algo mais suave e parecido com poeira
    fireSpark.style.background = `rgba(145, 45, 45, ${Math.random() * 1.6 + 0.4})`; // Cor de fogo, mas mais suave

    document.body.appendChild(fireSpark);

    // Adicionar efeito de movimento horizontal, indo para o lado esquerdo
    const randomSpeed = Math.random() * 2 + 1; // Velocidade aleatória
    const moveX = -randomSpeed; // Movimento para a esquerda (negativo para a direção da esquerda)
    const moveY = (Math.random() - 0.5) * randomSpeed * 0.5; // Movimento vertical suave

    // Animação da poeira para movimento horizontal
    const animation = setInterval(() => {
        // Atualizando as posições horizontais e verticais para mover a poeira para a esquerda
        fireSpark.style.left = parseFloat(fireSpark.style.left) + moveX + 'px';
        fireSpark.style.top = parseFloat(fireSpark.style.top) + moveY + 'px';

        // Remover a poeira depois que ela sair da tela
        if (parseFloat(fireSpark.style.left) < 0 || parseFloat(fireSpark.style.top) < 0 || parseFloat(fireSpark.style.top) > window.innerHeight) {
            clearInterval(animation);
            fireSpark.remove();
        }
    }, 10); // Atualiza a animação a cada 16ms
}

// Reduzir a quantidade de poeira gerada
setInterval(createFireSpark, 180);

function redirectToPortfolio() {
    window.location.href = 'port.html';  // Ou pode redirecionar para outra URL
}

// Duração da animação
const introDuration = 16800;  

setTimeout(redirectToPortfolio, introDuration);









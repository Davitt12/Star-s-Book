let count = 0;
let secondCount = 0;

// Referências para os elementos HTML
const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');
const secondClickCountDisplay = document.getElementById('secondClickCount');

// Função que atualiza o primeiro contador e verifica se o segundo deve ser incrementado
function updateClickCount() {
    count++; // Incrementa o primeiro contador
    clickCountDisplay.textContent = count; // Atualiza a exibição do primeiro contador
    
    // Se o primeiro contador atingiu 10, incrementa o segundo contador
    if (count === 10) {
        secondCount++; // Incrementa o segundo contador
        secondClickCountDisplay.textContent = secondCount; // Atualiza a exibição do segundo contador
        count = 0; // Reseta o primeiro contador para 0 após alcançar 10
    }
}

// Adiciona o ouvinte de evento para o clique do botão
clickButton.addEventListener('click', updateClickCount);




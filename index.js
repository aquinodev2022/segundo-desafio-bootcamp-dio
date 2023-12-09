// Criação da função para calcular o saldo de rankeadas
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel = ""; // Guarda o resultado do cálculo do nível do jogador

    // true: código ser executado pelo menos uma vez 
    // Criação do switch case para verificar o saldo de rankeadas em relaçao a diferença de vitória e derrotas do jogador
    switch (true) {
        case vitorias < 10:
            nivel = "Ferro";
            break;
        case vitorias >= 11 && vitorias <= 20:
            nivel = "Bronze";
            break;
        case vitorias >= 21 && vitorias <= 50:
            nivel = "Prata";
            break;
        case vitorias >= 51 && vitorias <= 80:
            nivel = "Ouro";
            break;
        case vitorias >= 81 && vitorias <= 90:
            nivel = "Diamante";
            break;
        case vitorias >= 91 && vitorias <= 100:
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
    }

    // Exibição da mensagem com o saldo de rankeadas e o nivel do usuário de acordo com o ranking
    console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Exemplo de utilização da função passando dois parâmetros (vitória e derrotas)
calcularNivel(75, 22);

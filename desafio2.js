const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função que calcula o saldo e o nível com base em vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Função para capturar e exibir o resultado final
function executarPrograma() {
    readline.question("Digite a quantidade de vitórias: ", vitoriasInput => {
        const vitorias = parseInt(vitoriasInput, 10);

        readline.question("Digite a quantidade de derrotas: ", derrotasInput => {
            const derrotas = parseInt(derrotasInput, 10);

            // Calcula o saldo e o nível
            const resultado = calcularNivel(vitorias, derrotas);

            // Exibe o resultado no terminal
            console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);

            // Encerra o readline
            readline.close();
        });
    });
}

// Executa o programa
executarPrograma();


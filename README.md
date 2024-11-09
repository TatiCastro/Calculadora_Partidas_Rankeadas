# 🏆 Calculadora de Partidas Rankeadas

## Descrição

Este projeto é uma calculadora de partidas ranqueadas criada em JavaScript, que classifica o jogador em diferentes níveis com base em seu saldo de vitórias e derrotas. O programa é executado no ambiente Node.js e utiliza o módulo `readline` para capturar os dados do usuário diretamente pelo terminal, oferecendo uma experiência de entrada e saída interativa.

## Objetivo

O objetivo do programa é:
1. Receber a quantidade de vitórias e derrotas de um jogador.
2. Calcular o saldo de vitórias subtraindo as derrotas das vitórias.
3. Classificar o jogador em um dos níveis a seguir com base na quantidade de vitórias:
   - Menos de 10 vitórias: **Ferro**
   - 11 a 20 vitórias: **Bronze**
   - 21 a 50 vitórias: **Prata**
   - 51 a 80 vitórias: **Ouro**
   - 81 a 90 vitórias: **Diamante**
   - 91 a 100 vitórias: **Lendário**
   - Mais de 100 vitórias: **Imortal**

## Estrutura do Projeto

O projeto inclui:
- **Funções**: para calcular o saldo e o nível do jogador.
- **Estruturas condicionais**: para definir o nível de acordo com a quantidade de vitórias.
- **Entrada de dados**: feita com o módulo `readline`, permitindo ao usuário informar as vitórias e derrotas pelo terminal.
- **Saída de dados**: uma mensagem com o saldo e nível do jogador.

## Exemplo de Saída

Com base nas entradas fornecidas, o programa exibe uma mensagem como:

```
O Herói tem de saldo de {saldoVitorias} e está no nível de {nivel}
```

Por exemplo, se o jogador inserir:
- Vitórias: 55
- Derrotas: 10

A saída será:
```
O Herói tem de saldo de 45 e está no nível de Ouro
```


# LISTA DE EXERCÍCIOS — REVISÃO DE DESENVOLVIMENTO WEB



## AULA 01 — HTML

### 1. Estrutura HTML e navegação

Desenvolva uma página de apresentação profissional contendo cabeçalho, menu de navegação, quatro seções e rodapé.

O menu deverá possuir links que direcionem o usuário para cada seção da mesma página. Utilize corretamente `header`, `nav`, `main`, `section`, `article` e `footer`.

Explique a diferença entre utilizar uma `div` e uma `section`.

### 2. Tabela de classificação

Crie uma tabela HTML para um campeonato de pescaria com as colunas:

- Pescador
- Espécie
- Peso
- Pontuação

Cadastre cinco participantes e destaque corretamente o cabeçalho da tabela.

Abaixo, responda: qual seria a consequência de utilizar `<td>` no lugar de `<th>` no cabeçalho?

### 3. Formulário de inscrição

Desenvolva um formulário de cadastro para uma competição contendo nome, idade, categoria, experiência e observações.

O formulário deve exigir o nome e permitir selecionar uma categoria. O campo de idade não poderá aceitar números negativos.

Explique a função dos atributos `id`, `name`, `required` e `min`.

## AULA 02 — CSS

### 4. Identificação de erros no CSS

Abra o arquivo `style.css` da Aula 02 e identifique pelo menos **cinco problemas** que possam causar falhas de estilização.

Para cada problema, apresente o código original, a correção e uma explicação de por que o navegador não apresenta o resultado esperado.

### 5. Estilização condicional de elementos

Utilizando a página da Aula 01, desenvolva um CSS que:

- Altere a aparência dos links quando o mouse passar sobre eles.
- Diferencie as linhas pares e ímpares da tabela.
- Destaque o campo de formulário que estiver selecionado.
- Utilize variáveis CSS para controlar as cores principais.

Explique quais seletores e pseudoclasses foram utilizados.

### 6. Layout adaptável

Utilizando o projeto da Aula 02, reorganize a interface para que o conteúdo fique centralizado, os botões tenham efeitos de interação e as imagens não ultrapassem a largura disponível da página.

Crie também um estilo alternativo para telas menores, utilizando como referência os exemplos de responsividade do projeto bancário.

## AULA 03 — FUNDAMENTOS DE JAVASCRIPT

### 7. Interpretação de operadores

Analise o código:

```javascript
let x = 15;
let y = "5";
let z = 3;

x = x - Number(y);

const resultado =
    x % z === 1 && x > 5 || y === 5;
```

Determine o valor final de `x` e `resultado`. Explique a ordem das operações e a diferença entre comparar números e textos utilizando `===`.

### 8. Variáveis e tipos de dados

Desenvolva um código JavaScript que armazene nome, idade, nota e situação de matrícula de um aluno.

Utilize `const`, `let`, números, textos e valores booleanos. Depois, modifique a idade e construa uma mensagem contendo todos os dados.

Explique quais variáveis poderiam ser declaradas com `const` e quais precisariam de `let`, considerando as alterações realizadas.

### 9. Expressões lógicas

Uma empresa permite a entrada de visitantes quando:

- Possuem 18 anos ou mais e têm autorização.
- Ou são funcionários, independentemente da idade.

Crie uma expressão utilizando `&&`, `||` e comparações para representar essa regra.

Depois, apresente o resultado esperado para quatro combinações diferentes de idade, autorização e vínculo com a empresa.

## AULA 04 — JAVASCRIPT NO HTML / IF E ELSE

### 10. Classificação de idade

Crie uma página HTML que receba a idade de uma pessoa e apresente uma das classificações:

- De 0 a 12: Criança.
- De 13 a 17: Adolescente.
- De 18 a 59: Adulto.
- A partir de 60: Idoso.

Campos vazios, valores negativos e idades acima de 120 deverão apresentar uma mensagem de erro.

O resultado deverá aparecer na página após clicar em um botão.

### 11. Sistema de descontos

Crie uma página que receba o valor de uma compra e informe o preço final.

Regras:

- Compras abaixo de R$ 100: sem desconto.
- De R$ 100 até R$ 299,99: 5%.
- De R$ 300 até R$ 499,99: 10%.
- A partir de R$ 500: 15%.

Caso o cliente seja VIP, acrescente mais 5 pontos percentuais ao desconto correspondente.

O programa deverá apresentar o desconto total e o valor final, rejeitando compras de valor zero ou negativo.

### 12. Correção de integração HTML e JavaScript

Um aluno desenvolveu uma página com um botão de ID `calcular`, um campo de ID `numero` e um parágrafo de ID `resultado`.

Entretanto, escreveu:

```javascript
const botao = document.getElementById("verificar");

botao.addEventListener("click", function() {
    const numero = document.getElementById("valor").value;

    document.getElementById("resposta").textContent =
        numero * 2;
});
```

Identifique todos os problemas relacionados à integração entre HTML e JavaScript.

Reescreva o código para funcionar corretamente e explique por que os IDs precisam corresponder.

## AULA 05 — SWITCH CASE

### 13. Cardápio com cálculo de pedidos

Utilizando o exemplo da lanchonete, desenvolva um sistema no qual o usuário selecione um produto e informe a quantidade desejada.

O programa deverá usar `switch/case` para identificar o produto, calcular o preço total e apresentar o pedido na página.

Considere os preços utilizados na aula. Quantidades vazias, negativas, decimais ou iguais a zero não deverão ser aceitas.

### 14. Identificação de erro em switch

Analise:

```javascript
let opcao = "2";
let mensagem = "";

switch (opcao) {
    case "1":
        mensagem = "Cadastrar";
    case "2":
        mensagem = "Consultar";
    case "3":
        mensagem = "Excluir";
        break;
    default:
        mensagem = "Inválida";
}
```

Qual será o conteúdo final da variável `mensagem`?

Explique detalhadamente o motivo e corrija o código para que cada opção execute somente a operação correspondente.

### 15. Calculadora de operações

Crie uma calculadora utilizando HTML e JavaScript, com dois campos numéricos e um `select` para escolher entre adição, subtração, multiplicação, divisão e resto da divisão.

Utilize `switch/case` para executar a operação escolhida.

O sistema deverá impedir divisões por zero, rejeitar campos vazios e apresentar os resultados diretamente no HTML.

## AULA 06 — FOR E WHILE

### 16. Tabuada com intervalo personalizado

Modifique a tabuada desenvolvida em sala para receber três valores:

- Número da tabuada.
- Multiplicador inicial.
- Multiplicador final.

Utilizando `for`, apresente todos os cálculos dentro do intervalo informado.

O programa deverá impedir que o multiplicador inicial seja maior que o final e limpar os resultados anteriores antes de gerar uma nova tabuada.

### 17. Sequência numérica com condições

Crie uma página que receba dois números inteiros e apresente todos os números existentes entre eles, incluindo os extremos.

Utilize `for` para percorrer a sequência e mostre separadamente:

- Números pares.
- Números ímpares.
- Soma dos números múltiplos de 3.

Se o número inicial for maior que o final, apresente uma mensagem de erro.

### 18. Contagem regressiva com while

Desenvolva um sistema que receba um número inteiro entre 10 e 100.

Utilizando obrigatoriamente `while`, apresente uma contagem regressiva até zero.

Durante a contagem, os números divisíveis por 5 deverão ser destacados com uma mensagem especial.

Ao terminar, exiba a quantidade total de números percorridos.

### 19. Lista dinâmica com JavaScript

Crie uma página contendo um campo numérico, um botão e uma lista HTML inicialmente vazia.

Quando o usuário clicar no botão, utilize `for`, `document.createElement()` e `appendChild()` para gerar os elementos da lista.

Cada elemento deverá apresentar um número e informar se ele é par ou ímpar.

A lista deverá ser recriada a cada clique, sem acumular os resultados anteriores.

## AULA 07 — EXCEPTION / TRY, CATCH E THROW

### 20. Sistema de notas com validações avançadas

Modifique o sistema de notas da Aula 07 para receber quatro notas de um aluno.

Calcule a média e classifique o resultado:

- Média igual ou superior a 7: Aprovado.
- Média entre 5 e menos de 7: Recuperação.
- Média inferior a 5: Reprovado.

Utilize `try`, `catch` e `throw` para impedir campos vazios, notas inferiores a zero, superiores a dez ou valores inválidos.

Apresente também uma mensagem de finalização usando `finally`.

### 21. Divisão com tratamento de exceções

Desenvolva uma calculadora de divisão utilizando dois campos numéricos.

O código deverá lançar exceções diferentes para campos vazios, números inválidos e divisão por zero.

Explique por que o JavaScript não gera automaticamente uma exceção ao realizar uma divisão por zero e qual é a importância do `throw` nessa situação.

### 22. Análise e correção de exceções

Considere:

```javascript
try {
    let idade = Number("");

    if (idade < 18) {
        throw new Error("Menor de idade");
    }

    resultado.textContent = "Permitido";

} catch (erro) {
    resultado.textContent = erro.message;

} finally {
    finalizacao.textContent = "Finalizado";
}
```

Identifique qual resultado será apresentado e explique por que um campo vazio pode provocar uma classificação incorreta.

Corrija o código para diferenciar campo vazio, idade inválida e pessoa menor de idade, mantendo o tratamento com `try`, `catch`, `throw` e `finally`.

## DESAFIO DO BANCO

### 23. Simulação de movimentações bancárias

Considere uma conta bancária com saldo inicial de R$ 1.000,00.

O usuário realiza as seguintes operações, nesta ordem:

1. Depósito de R$ 350.
2. Saque de R$ 180.
3. Depósito de R$ 75.
4. Saque de R$ 1.500.
5. Depósito de R$ 200.

Determine o saldo final e quais operações devem aparecer no extrato.

Em seguida, desenvolva a lógica JavaScript que realize as movimentações, rejeite operações inválidas e apresente o histórico no HTML utilizando `for`.

### 24. Sistema de distribuição de notas

Desenvolva um algoritmo que receba o valor de um saque e determine quantas notas de R$ 100, R$ 50, R$ 20 e R$ 10 deverão ser entregues.

Regras:

- Utilizar obrigatoriamente `while` para calcular as quantidades.
- Priorizar notas de maior valor.
- Aceitar somente saques positivos e múltiplos de 10.
- Não permitir saques superiores ao saldo disponível.
- Exibir a quantidade de cada nota e o saldo restante.

Teste o algoritmo com saques de R$ 380, R$ 670, R$ 35 e R$ 1.200, considerando saldo inicial de R$ 1.000 em cada teste.

### 25. Auditoria do sistema bancário — desafio final

Analise os arquivos `DESAFIO DO BANCO.md` e `script.js` do repositório.

Compare as regras descritas no documento com o comportamento implementado no código.

Identifique inconsistências relacionadas aos valores permitidos para saque, às notas utilizadas e às validações financeiras.

Depois, corrija o JavaScript para obedecer às regras do documento, garantindo que:

- Um saque inválido não altere o saldo.
- Movimentações inválidas não apareçam no extrato.
- Os valores sejam validados antes de qualquer alteração.
- O histórico seja apresentado na ordem correta.
- Os resultados apareçam no HTML, sem necessidade de utilizar o console.

Explique as correções realizadas e apresente pelo menos cinco testes para demonstrar o funcionamento.

---

## Orientações gerais

Nos exercícios práticos, utilize **HTML, CSS e JavaScript puro**, sem frameworks. Mantenha HTML e JavaScript em arquivos separados, quando aplicável. Todas as respostas de programas interativos deverão aparecer diretamente na página.

**Repositório de referência:** https://github.com/Vinicius-Tessari/Desenvolvimento-Web


function calcularMedia() {

    try {
        let nota1 = document.getElementById("nota1").value;
        let nota2 = document.getElementById("nota2").value;
        let nota3 = document.getElementById("nota3").value;

        if (nota1 === "" || nota2 === "" || nota3 === "") {
            throw new Error("Preencha todas as notas!");
        }

        nota1 = Number(nota1);
        nota2 = Number(nota2);
        nota3 = Number(nota3);

        if (nota1 < 0 || nota1 > 10 ||
            nota2 < 0 || nota2 > 10 ||
            nota3 < 0 || nota3 > 10) {

            throw new Error("As notas devem estar entre 0 e 10!");
        }

        let media = (nota1 + nota2 + nota3) / 3;

        let situacao;

        if (media >= 7) {
            situacao = "Aprovado";
        } else if (media >= 5) {
            situacao = "Recuperação";
        } else {
            situacao = "Reprovado";
        }

        document.getElementById("resultado").innerHTML =
            "Média: " + media.toFixed(2) +
            "<br>Situação: " + situacao;

    } catch (erro) {

        document.getElementById("resultado").innerHTML =
            "Erro: " + erro.message;

    }

}

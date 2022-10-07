const veiculo1 = prompt("Insira o nome do primeiro veículo:")
const velocidade1 = prompt("Insira a velocidade do primeiro veículo:")

const veiculo2 = prompt("Insira o nome do segundo veículo:")
const velocidade2 = prompt("Insira a velocidade do segundo veículo:")

if (velocidade1 > velocidade2) {
    alert(veiculo1 + " É mais rápido do que " + veiculo2 + "!")
} else if (velocidade1 < velocidade2) {
    alert(veiculo2 + " É mais rápido do que " + veiculo1 + "!")
} else {
    alert("Os dois veículos possuem a mesma velocidade")
}
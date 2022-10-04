import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Jean";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Cabral";
cliente2.cpf = 88822233309;

const contaCorrenteJean = new ContaCorrente();
contaCorrenteJean.agencia = 1001;

contaCorrenteJean.depositar(100);

const valorSacado = contaCorrenteJean.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteJean);

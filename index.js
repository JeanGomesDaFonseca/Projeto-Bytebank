import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Jean", 11122233309);
const cliente2 = new Cliente("Cabral", 88822233309);
const contaCorrenteJean = new ContaCorrente(1001, cliente1);
contaCorrenteJean.depositar(500);
const conta2 =new ContaCorrente(2002, cliente2);

let valor2 = 200;
contaCorrenteJean.transferir(valor2, conta2);

console.log(ContaCorrente.numeroDeContas);
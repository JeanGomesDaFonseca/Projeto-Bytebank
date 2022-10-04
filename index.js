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
contaCorrenteJean.cliente = cliente1;
contaCorrenteJean.depositar(500);

const conta2 =new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 2002;

let valor2 = 200;
contaCorrenteJean.transferir(valor2, conta2);

conta2.saldo = 30000;
console.log(conta2.saldo);
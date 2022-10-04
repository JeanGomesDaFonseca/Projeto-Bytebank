class Cliente {
  nome;
  cpf;
}
class ContaCorrente {
  agencia;
  saldo;

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
    }
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Jean";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Cabral";
cliente2.cpf = 88822233309;

const contaCorrenteJean = new ContaCorrente();
contaCorrenteJean.saldo = 0;
contaCorrenteJean.agencia = 1001;

contaCorrenteJean.depositar(100);
contaCorrenteJean.sacar(50);

console.log(contaCorrenteJean);
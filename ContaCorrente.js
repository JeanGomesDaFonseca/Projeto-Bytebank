import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  agencia;
  _cliente;

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

get cliente(){
    return this._cliente;
}

  _saldo = 0;

  get saldo(){
    return this._saldo
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
  }
  //   quando algum objeto estiver com "underline _ "
  //   significa que ele é privado e provavelmente não deve ser alterado.

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}

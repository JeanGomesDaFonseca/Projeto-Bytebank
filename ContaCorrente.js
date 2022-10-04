export class ContaCorrente {
    agencia;
    _saldo = 0;
  
    sacar(valor) {
      if (this._saldo >= valor) {
        this._saldo -= valor;
        return valor;
      }
    }
  
    depositar(valor) {
      if (valor <= 0)return;
      this._saldo += valor;
    }
  
  //   quando algum objeto estiver com "underline _ " 
  //   significa que ele é privado e provavelmente não deve ser alterado.
  }
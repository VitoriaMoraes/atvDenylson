import { No } from "./No"

export class Lista {
  private _totalNos: number = 0;
  private _head: No = null;
  private _tail: No = null;

  constructor(...valores: any[]) {
    for (const valor of valores) {
      this.adicionarTail(valor);
    }
  }

  public adicionarHead(valor: any) {
    const novoNo = new No(valor);

    if (this._totalNos === 0) {
      this._head = novoNo;
      this._tail = novoNo;
    } else {
      novoNo.proximo = this._head;
      this._head.anterior = novoNo;
      this._head = novoNo;
    }

    this._totalNos++;
  }

  public adicionarTail(valor: any) {
    const novoNo = new No(valor);

    if (this._totalNos === 0) {
      this._head = novoNo;
      this._tail = novoNo;
    } else {
      novoNo.anterior = this._tail;
      this._tail.proximo = novoNo;
      this._tail = novoNo;
    }

    this._totalNos++;
  }

  public adicionarEm(valor: any, indice: number) {
    if (indice < 0) {
      this.adicionarHead(valor);
    } else if (indice >= this._totalNos) {
      this.adicionarTail(valor);
    } else {
      const novoNo = new No(valor);
      let noAtual = this._head;
      let contador = 0;
  
      if (indice === 0) {
        novoNo.proximo = noAtual;
        noAtual.anterior = novoNo;
        this._head = novoNo;
      } else {
        while (contador < indice) {
          noAtual = noAtual.proximo;
          contador++;
        }
  
        novoNo.proximo = noAtual;
        novoNo.anterior = noAtual.anterior;
  
        if (noAtual.anterior) {
          noAtual.anterior.proximo = novoNo;
        }
  
        noAtual.anterior = novoNo;
      }
  
      this._totalNos++;
    }
  }

 
  public buscar(valorChave: any): any {
    let noAtual = this._head;

    while (noAtual !== null) {
      if (noAtual.valor === valorChave) {
        return noAtual.valor;
      }
      noAtual = noAtual.proximo;
    }

    return null;
  }

  public buscarFim(valorChave: any): any {
    let noAtual = this._tail;

    while (noAtual !== null) {
      if (noAtual.valor === valorChave) {
        return noAtual.valor;
      }
      noAtual = noAtual.anterior;
    }

    return null;
  }

  public valores(): any[] {
    const valores = [];
    let noAtual = this._head;

    while (noAtual !== null) {
      valores.push(noAtual.valor);
      noAtual = noAtual.proximo;
    }

    return valores;
  }

  public valoresFim(): any[] {
    const valores = [];
    let noAtual = this._tail;

    while (noAtual !== null) {
      valores.push(noAtual.valor);
      noAtual = noAtual.anterior;
    }

    return valores;
  }

  public removerHead(): void {
	if (this._totalNos === 0) {
	  return; // Lista vazia, não há nada para remover
	}
  
	if (this._totalNos === 1) {
	  // A lista possui apenas um nó
	  this._head = null;
	  this._tail = null;
	} else {
	  // A lista possui mais de um nó
	  this._head = this._head.proximo;
	  this._head.anterior = null;
	}
  
	this._totalNos--;
  }
  
  public removerTail(): void {
	if (this._totalNos === 0) {
	  return; // Lista vazia, não há nada para remover
	}
  
	if (this._totalNos === 1) {
	  // A lista possui apenas um nó
	  this._head = null;
	  this._tail = null;
	} else {
	  // A lista possui mais de um nó
	  this._tail = this._tail.anterior;
	  this._tail.proximo = null;
	}
  
	this._totalNos--;
  }

  public removerEm(indice: number) {
    if (indice < 0) {
      this.removerHead();
    } else if (indice >= this._totalNos) {
      this.removerTail();
    } else {
      let noAtual = this._head;
      let contador = 0;
  
      if (indice === 0) {
        this._head = noAtual.proximo;
        if (noAtual.proximo) {
          noAtual.proximo.anterior = null;
        }
      } else {
        while (contador < indice) {
          noAtual = noAtual.proximo;
          contador++;
        }
  
        if (noAtual.anterior) {
          noAtual.anterior.proximo = noAtual.proximo;
        }
  
        if (noAtual.proximo) {
          noAtual.proximo.anterior = noAtual.anterior;
        }
      }
  
      this._totalNos--;
    }
  }

  public get tamanho(): number {
    return this._totalNos;
  }

  public get estarVazia(): boolean {
    return this._totalNos === 0;
  }

  public get head(): any {
    if (this._head) return this._head.valor;
    return null;
  }

  public get tail(): any {
    if (this._tail) return this._tail.valor;
    return null;
  }
}
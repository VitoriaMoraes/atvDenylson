import { No } from "./No";

export class Lista {
	private _totalNos: number = 0;
	private _head: No = null;

	constructor(valor?) {}

	public adicionarHead(valor: any) {
		let novoNo = new No(valor, this._head);
		this._head = novoNo;

		this._totalNos++;
	}

	public get head(): any {
		if (this._head) return this._head.valor;
		return null;
	}

	public get tamanho(): number {
		return this._totalNos;
	}

	public get estarVazia(): boolean {
		return this.tamanho == 0;
	}
}

import { No } from "./No";

export class Lista {
	
	private _totalNos: number = 0;//a variavel _totalNos recebe a quantidade de Nos(valores) inseridos na lista
	private _head: No = null; //_head é o valor ATUAL dentro da lista, se a lista tiver 5 elementos, a variavel assume o valor do ultimo elemento inserido
	private _tail: No = null;


	constructor(valor?:any, _qteNos?:number,cabeca?:any, tail?:No) {
		//instanciar as váriaveis totalNos, tail e head
		this._totalNos = _qteNos;
		this._head = cabeca;
		this._tail = tail;
		
	}

	
	public adicionarHead(valor: any) {
		//o metodo adicionarHead recebe um dado "valor" do tipo any.
		let novoNo = new No(valor, this._head);
		//a variavel novoNo recebe uma instancia do No(valor, proximo, anterior), e o valor de _head, inicialmente nulo
		//o valor de _head é alterado sempre que um novo nó for adicionado, seu valor será o NO ATUAL.
		this._head = novoNo;

		//a quantidade de nós na lista é alterada.
		this._totalNos++;
	}

	//exibir o valor da cabeça
	public get head(): any {
		//se ouver valores na lista, retorne
		if (this._head) return this._head.valor;
		//senão, retorne null
		return null;
	}

	//exibe a quantidade de nós na lista
	public get tamanho(): number {
		return this._totalNos;
	}

	//exibe o ultimo elemento da lista
	public get tail(): any{
		return this._tail;
	}

	//se não houver valores na lista retorna false
	public get estarVazia(): boolean {
		//se houver valores na lista retorna o tamanho da lista
		return this.tamanho == 0;
	}

}

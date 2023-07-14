export class No {
	private _valor: any; // declara variavel que recebe um tipo any
	private _proximo: No = null; // declara as variavéis _proximo e _anterior que receberam dados do tipo NO ou null(no caso da lista não possuir elementos antes ou depois do NO)
	private _anterior: No = null;// = null por padrão
	// variável: tipo_de_dado = valor padrão de instanciação 

	constructor(valor:any, proximo?:No, anterior?:No) {
	//inicializar as variáveis
		this._valor = valor;

		if (proximo) {
			this._proximo = proximo;
		}
		if (anterior) {
			this._anterior = anterior
		}
	}
	//o metodo IGUAL ao comparar um valor recebido, deve retornar true se for igual ao armazenado
	public igual(proximoValor: any): boolean {
	// o metodo "igual" recebe um dado "outroValor" do tipo any e retorna um boolean dependendo do resultado
			return this._valor === proximoValor;
	}

	//metodos get e set 

	//retorna o valor do NO atual
	public get valor(): any {
		return this._valor;
	}

	public get proximo() {
		//se ouver valor dentro do "proximo" 
			return this._proximo;
	}

	public set proximo(novoNo:No) {
		//atribui um novo valor a variavel "proximo"
		this._proximo = novoNo;
	}

	public get anterior() {
		//se ouver um valor anterior
			return this._anterior;
	}

	public set anterior(novoNo:No) {
		//atribui um novo valor a variavel "anterior"
		this._anterior = novoNo
	}
	// test de mudança
}

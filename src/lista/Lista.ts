import { No } from "./No"
export class Lista {
	
	private _totalNos: number = 0;//a variavel _totalNos recebe a quantidade de Nos(valores) inseridos na lista
	private _head: No = null; //_head é o valor ATUAL dentro da lista, se a lista tiver 5 elementos, a variavel assume o valor do ultimo elemento inserido
	private _tail: No = null; //_tail é calda da lista, o "primeiro" elemento inserido é ao mesmo tempo a head e a tail
	//desta forma, a tail sempre irá conter o "ultimo" elemento inserido

	constructor(...valor:any []) {
		//instanciar valor para receber uma cadeia de strings 
		//declara uma variável que irá remover o ultimo elemento do array 
			this.adicionarTail(valor)
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
	
	public adicionarHead(valor: any) {
		//o metodo adicionarHead recebe um dado "valor" do tipo any.
		let NoAtual = new No(valor);
		//a variavel novoNo recebe uma instancia do No(valor, proximo, anterior), e o valor de _head, inicialmente nulo
		//o valor de _head é alterado sempre que um novo nó for adicionado, seu valor será o NO ATUAL.

		//se o tota de nos for igual a zero
		if (this._totalNos === 0) {
			//tanto a head qaunto a tail recebem o valor inserido, que passará a ser o primeiro valor da lista
			this._head = NoAtual;
			this._tail = NoAtual;
		  }
		  //se já houver algum valor na lista, o Noatual será colocado na proxima posição
		   else {
			//o novoNo
			NoAtual.proximo = this._head;
			this._head.anterior = NoAtual;
			this._head = NoAtual;
		  }
		  //a quantidade de nós na lista é alterada.
		  this._totalNos++;
	}

	 //o metodo valorEm vai receber um parametro (posição do tipo number)
	 public valorEm(posicao: number): any { //retorna um valor any qualquer (dependendo do dado que estiver na lista)
		if (posicao < 0 || posicao >= this._totalNos) {
		  //se a posição indicada for menor do que zero, ou se a posição for maior que o total de nós da função
		  return null;
		  //retorne null
		}
		//declara a variável valor atual que vai receber o valor atual da cabeça
		let valorAtual = this._head;
		//declara um contador
		let contador = 0;
	
		//enquanto o contador for menor que a posição passado como parametro
		while (contador < posicao) {
		  //valorAtual recebe o valor do proximo elemento
		  valorAtual = valorAtual.proximo;
		  //o contador é incrementado
		  contador++;
		}
		//retorne o valor
		return valorAtual.valor;
	  }

	  //o metodo adicionarTail vai receber um parametro (valor do tipo any)
	  public adicionarTail(valor: any) {
		//declara uma constante novoNo para instanciar o valor do nó passado
		const ProximoNo = new No(valor);
		
		//se o total de nós for igual a zero (lista vazia)
		if (this._totalNos === 0) {
		  this._head = ProximoNo; //o valor da cabeça será o proprio valor passado
		  this._tail = ProximoNo; //o valor da tail tambem será o primeiro valor inserido
		}
		//se o houver valores no totalNos (lista não está vazia)
		 else {
		  //o primero valor adicionado será a tail (ultimo elemento da lista)
		  ProximoNo.anterior = this._tail;
		  //e o proximo elemento será o nó adicionado
		  this._tail.proximo = ProximoNo;
		  //aponta para o novo nó
		  this._tail = ProximoNo;
		}
		//atualiza a quantidade de nós na lista
		this._totalNos++;
	  }

		//a função valores insere varios dados no nó em sequencia
		public valores() {
		//declara uma variável para receber o valor inserido
		let valorAtual = this._head;
		//declara um array para guardar os dados em sequencia, já que serão armazenados varios dados no nó
		const valores = []
		//enquanto houver um valor sendo passado
		while(valorAtual.valor !== null){
			//adiciona o valor no final do array
			valores.push(valorAtual.valor)
			//valorAtual recebe o valor do proximo valor inserido
			valorAtual = valorAtual.proximo;
			//a repetição é encerrada quando não houver mais valores sendo passados
		}
		//retorna o array com os valores
		return valores;
	}
	
	//neste metodo são passados dois parametros (o valor do nó e a posição que se quer inserir na lista)
	public adicionarEm(valor: any, posicao: number) {//valor do tipo any(nó), posicao number(posicao na lista)

		// se a posição passada for menor que zero
		if (posicao < 0) {
		  //adiciona o valor passado na head
		  this.adicionarHead(valor);
		} 
		//se a posição passada for maior ou igual ao totalNos
		else if (posicao >= this._totalNos) {
		//adiciona o valor passado na head
		  this.adicionarTail(valor);
		} 
		//senão
		else {
		  //declara uma nova variável para receber o nó
		  const novoNo = new No(valor);
		  //declara uma variavel para receber o valor atual da cabeça
		  let noAtual = this._head;
		  //declarar um contador
		  let contador = 0;
	  
		  //se a posição passada for igual a zero
		  if (posicao === 0) {
			//a proxima posição (1) será o valor da head, e o valor passado ocupará a posição 0
			novoNo.proximo = noAtual;
			//posição 0 recebe o novo nó
			noAtual.anterior = novoNo;
			this._head = novoNo;
		  } 
		  //se o valor passado for diferente de zero
		  else {
			//enquanto o contador for menor que a posição passada
			while (contador < posicao) {
			  //noAtual = proxima posição
			  noAtual = noAtual.proximo;
			  //a repetição encerra quando o contador for igual a posição passada
			  contador++;
			}
	  
			////a proxima posição (1) será o valor da head, e o valor passado ocupará a posição 0
			novoNo.proximo = noAtual;
			//novo nó recebe o valor anterior
			novoNo.anterior = noAtual.anterior;
			//se houver algum valor na posição anterior ao nó
			if (noAtual.anterior) {
			  noAtual.anterior.proximo = novoNo;
			}
	  
			noAtual.anterior = novoNo;
		  }
		  //incrementa o total de nos
		  this._totalNos++;
		}
	  }
	
	  //metodo busca um valor na lista a partir de um valor chave passado
	  public buscar(chave: any): any {//a função recebe o parametro (chave do tipo any), e retorna um valor any desejado
		let valorAtual = this._head;
		// declara a variavel valorAtual para receber o valor da cabeça

		//enquanto a lista tiver elementos (não for vazia)
		while (valorAtual !== null) {
		  //se o valor da cabeça for igual ao elemento passado como parametro
		  if (valorAtual.valor === chave) {
			//retorne o valor 
			return valorAtual.valor;
		  }
		  //valor atual recebe o proximo dado e repete a ação
		  valorAtual = valorAtual.proximo;
		}

		return null;
	  }

	  //o metodo  retorna o valor final do de um array
	  public valoresFim(): any[] {
		//declara o array valores
		const valores = [];

		//o valor atual recebe o ultimo elemento
		let valorAtual = this._tail;
		
		//enquanto este elemento não for vazio (lista não vazia)
		while (valorAtual !== null) {
		  //acrescenta o valor da tail no final do array
		  valores.push(valorAtual.valor);
		  //valorAtual = posição anterior a ele
		  valorAtual = valorAtual.anterior;
		}
	    //retorna o array com os valores 
		return valores;
	  }

	  //o metodo retorna o ultimo valor da lista 
	  public buscarFim(chave: any): any {//a função recebe um parametro do tipo any, e retorna um dado do tipo any
		let noAtual = this._tail;
		//a variavel noAtual recebe o valor da tail (ultimo valor inserido)

		//enquanto a lista tiver valores inseridos
		while (noAtual !== null) {

		  //se o valor atual for igual ao parametro passado
		  if (noAtual.valor === chave) {
			//retorne o valor pedido
			return noAtual.valor;
		  }
		  //noAtual = o valor anterior a ele (se ouver), senão encerra a repetição
		  noAtual = noAtual.anterior;
		}
		//retorne null
		return null;
	  }

	  //o metodo removerHead não tem retorno
	  public removerHead(): void {
		if (this._totalNos === 0) {
		  return; // Lista vazia, não há elementos para ser removidos
		}
	    // A lista possui apenas um nó 
		if (this._totalNos === 1) {
		  this._head = null; //se ouver apenas um valor no nó
		  this._tail = null; //será removido tanto da head quanto da tail
		} else {
		  // this.head recebe o proximo valor da lista
		  this._head = this._head.proximo;
		  //this.head anterior (o valor que foi removido) recebe null
		  this._head.anterior = null;
		}
	    //total de nos decresce pois estou removendo um elemento
		this._totalNos--;
	  }
	  
	  //metodo sem retorno
	  public removerTail(): void {
		if (this._totalNos === 0) {
		  return; // Lista vazia
		}
	  
		if (this._totalNos === 1) {
		  // A lista possui apenas um nó
		  this._head = null; //tanto a cabeça quanto a tail terão o mesmo valor
		  this._tail = null; //logo se remover ficará null
		} else {
		  // A tail recebe o penultimo elemento da lista (se tornamdo o ultimo elemento da lista)
		  this._tail = this._tail.anterior;
		  //o ultimo elemento se torna null
		  this._tail.proximo = null;
		}
	    //a lista decresce pois estou removendo um elemento
		this._totalNos--;
	  }

	  //a função removerEm, recebe um parametro do tipo number
	  public removerEm(posicao: number) {
		//se  a posição passada for menor que zero
		if (posicao < 0) {
			//remove a head
		  this.removerHead();
		}
		//se a posição passada for maior ou igual o total de nós da lista
		 else if (posicao >= this._totalNos) {
		  //remove a tail
		  this.removerTail();
		}
		//senão 
		 else {
			//posicaoAtual recebe a cabeça
		  let posicaoAtual = this._head;
		  let contador = 0;
	  
		  //se a posicao for igual a zero
		  if (posicao === 0) {
			// a cabeça recebe o proximo elemento da lista para ser a cabeça
			this._head = posicaoAtual.proximo;
			if (posicaoAtual.proximo) { //se este elemento existir
				//o elemento anterior (cabeça anterior) recebe null
			  posicaoAtual.proximo.anterior = null;
			}
		  }
		  //senão
		   else {
			//enquanto o contador for menor que a posição passada
			while (contador < posicao) {
				//a posição atual vai receber o proximo elemento da lista
			  posicaoAtual = posicaoAtual.proximo;
			  //contador incrementado para encerrar a repetição
			  contador++;
			}
			//se a posição anterior existir
			if (posicaoAtual.anterior) {
				//posição anterior recebe o proximo elemento
			  posicaoAtual.anterior = posicaoAtual.proximo;
			}
	  
			if (posicaoAtual.proximo) {
			  posicaoAtual.proximo = posicaoAtual.anterior;
			}
		  }
		  //decresce o total de nos
		  this._totalNos--;
		}
	  }
}

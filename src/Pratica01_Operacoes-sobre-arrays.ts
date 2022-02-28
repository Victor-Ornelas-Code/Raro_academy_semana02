// Questao 01:
// Abaixo você tem a lista de todos os ingredientes necessários para fazer um Hambúrguer.
// Utilizando o reduce, como você pode fazer para unir todos os itens do array em uma única string?


const ingredientes = [
    '2 hambúrgueres',
    'alface',
    'queijo',
    'molho especial',
    'cebola',
    'picles',
    'pão com gergelim'
  ];
  
  const fazUmBigMac = (ingredientes: string[]): string => {
    let bigMac = ingredientes.reduce((acumulador, valorAtual) => acumulador + ',' + valorAtual)
    console.log(bigMac)
    return bigMac
  };
  
 fazUmBigMac(ingredientes);

//  Questao 02:
// A lista de meses abaixo está incompleta (e incorreta!).
// Utilize os métodos do array para adicionar os meses faltantes.

const meses = [
  'jan', 'mar', 'mar', 'abr', 'jun', 'jul', 'set', 'out', 'dez',
];

meses.splice(1, 1, 'fev');
meses.splice(4, 0, 'mai');
meses.splice(7, 0, 'ago');
meses.splice(10, 0, 'nov');
console.log(meses);

// objeto de alunos utilizados para os exercicios 03 e 04:

const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
];

 // Questão 03:
//  Implementar o método de `pick` que receba um parâmetro do tipo array de objetos, e outro parâmetro do tipo array de strings.
//  Este método deverá retornar todos os itens do array original, porém, mantendo somente os atributos com os nomes passados no segundo atributo.
//  Importante: o array original deve ser mantido intacto. Abaixo, segue um exemplo do funcionamento esperado:

 const pick = <T extends Record<string, unknown>>(listaAlunos: T[], filtros: (keyof T)[]): Record<string, unknown>[] => {
  return listaAlunos.map((aluno) => {
    const novaListaAlunos: Record<string, unknown> = {};
    filtros.map((filtro) => (novaListaAlunos as T)[filtro] = aluno[filtro]);
    return novaListaAlunos; 
  
  });
};

console.log(pick(alunos, ['nome','nota']));


// Questao 04:
// ainda com o mesmo exemplo dos alunos, implementar agora um método chamado `orderBy`.
// Esse método deverá receber um parâmetro do tipo array de objetos, e outro parâmetro, um array de strings.
// O método deverá retornar um novo array, com os objetos ordenados de acordo com o critério do array de strings.
// Importante: O array original deve ser mantido intacto. Abaixo, segue um exemplo do funcionamento esperado:

const orderBy = <T extends Record<string, unknown>>(itens: T[], ordem: (keyof T)[]): Record<string, unknown>[] => {  
  let itensFiltrados = pickOrdendo(itens, ordem);
  const ordem1 = ordem[0];

  itensFiltrados.sort((a: any, b: any) => a[(ordem1)] - b[ordem1]  || a[ordem[1]].localeCompare(b[ordem[1]]));
  return itensFiltrados 
}

const pickOrdendo = <T extends Record<string, unknown>>(listaAlunos: T[], filtros: (keyof T)[]): Record<string, unknown>[] => {
  return listaAlunos.map((aluno) => {
    const novaListaAlunos: Record<string, unknown> = {};
    filtros.map((filtro) => (novaListaAlunos as T)[filtro] = aluno[filtro]);
    
    return novaListaAlunos; 
  
  });
};

console.log(orderBy(alunos, ['nota', 'nome']));

// Questao 05:
// Na computação, estudamos algumas estruturas de dados importantes, muitas delas baseadas em arrays.
// Aqui em destaque, dois tipos diferentes, as `filas` e as `pilhas`. As filas são arrays que estabelecem a política de FIFO (First In, First Out),
// ou seja, o primeiro elemento adicionado é o primeiro a ser removido.
// As pilhas, por sua vez, são arrays que estabelecem a política de LIFO (Last In, First Out), ou seja, o último elemento adicionado é o primeiro a ser removido.
// Abaixo, foram iniciadas estruturas de código que implementam ambas estruturas.
// Pede-se que, utilizando os métodos de adicionar e remover os itens nos arrays, sejam implementados os movimentos corretos para cada estrutura.

function fila() {
  const fila:number[] = [];

  const adicionar = (elemento:number) => {
    return fila.push(elemento);
  };

  const remover = () => {
    return fila.shift();
  };

  return { adicionar, remover };
}

function pilha() {
  const pilha:number[] = [];

  const adicionar = (elemento:number) => {
    return pilha.push(elemento);
  };

  const remover = () => {
    return pilha.pop();
  };

  return { adicionar, remover };
}

const fila1 = fila();
fila1.adicionar(1);
fila1.adicionar(2);
fila1.adicionar(3);

console.log('valor esperado: 1; valor recebido: ', fila1.remover());
console.log('valor esperado: 2; valor recebido: ', fila1.remover());
console.log('valor esperado: 3; valor recebido: ', fila1.remover());


const pilha1 = pilha();
pilha1.adicionar(1);
pilha1.adicionar(2);
pilha1.adicionar(3);

console.log('valor esperado: 3; valor recebido: ', pilha1.remover());
console.log('valor esperado: 2; valor recebido: ', pilha1.remover());
console.log('valor esperado: 1; valor recebido: ', pilha1.remover());

// Questao 06:
// Dada a lista de usuarios do nosso sistema, manipule o array,
// para gerar em duas estruturas separadas a coleção de usuários que estão ativos e a coleção de usuários que estão inativos.

const usuarios = [
  { nome: 'Diego', idade: 23, ativo: true },
  { nome: 'Gabriel', idade: 15, ativo: false },
  { nome: 'Lucas', idade: 30, ativo: false },
];

const usuariosAtivos = usuarios.filter(usuarios => usuarios.ativo === true);
const usuariosInativos = usuarios.filter(usuarios => usuarios.ativo === false);

console.log(usuariosAtivos)
console.log(usuariosInativos)
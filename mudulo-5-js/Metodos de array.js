/*
Array's

    - push   -> Adiciona um item no array. O item adicionado sempre será colocado na última posição do array.
    - lenght -> Mostra o tamanho do array. A quantidade de itens dentro do array.
    - sort -> Organiza o array
    - delete -> Deleta um item do array. O item é deletado, mas o espaço fica vazio. Retornando undefined.
    - every -> Esse método testa se todos os elementos do Array passam em uma condição. Passamos uma função que retorna true ou false. Se todos os retornos forem true, significa que todos os elementos passaram no teste, e a função retornará true. Se algum item não estiver de acordo, ele retornará false.
    - some -> O .some() faz algo parecido com o .every(). A diferença é que o .every() só retorna true se todos os elementos passarem no teste. O .some() retorna true se pelo menos um elemento do Array passar no teste.
    - fill -> Preenche posições do array como desejarmos
    - find -> Usamos esse método quando queremos encontrar algum elemento dentro no Array. Para isso, passamos uma função que irá retornar true ou false. O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos.
    - findIndex -> Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao invés de retornar o próprio elemento.
    - concat() -> Esse método é usado para juntar dois arrays. Ele não altera os arrays originais, mas cria um novo array com a soma dos dois arrays escolhidos.
    - join -> O método join() junta todos os elementos de um array.
    - pop -> Remove o último elemento de um array.
    - shift -> Remove o primeiro elemento de um array.
    - slice -> O método slice() retorna um novo array, apenas com as informações escolhidas
    - splice -> Esse metódo remove ou adiciona elementos em um array em uma posição específica
    */

const myArray = [1, 2, 3,]
myArray.push(4)
myArray.push(6)
myArray.push("Diego")
console.log(myArray)
    
//sempre adiciona apos, pode ser adicionado quantos quiser

const myArray2 = [1, 2, 7,]
console.log(myArray2.length) 

//mostra a quantidade de itens dentro do array





const myArray3 = ['limao', 'abobora', 'caqui']
myArray3.sort()
console.log(myArray3)

//Deixe o array em ordem alfabetica, todas tem que estar em minusculo ou da erro     





const myArray4 = ['limao', 'abobora', 'caqui']
delete myArray4[0]
console.log(myArray4)

//deleta um item do array no exemplo posição 0 que se refere ao limao





const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every( (value) => value < 200 ));
//true

const users = [
	{name: 'Nico', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Joana', credit: 300},
	{name: 'Vanessa', credit: 200},
];

console.log(users.every((user) => user.credit < 1000))
//true

console.log(users.every(user => user.credit < 500))
//false
// o que for colocado de condição, todos tem que esta na condição,
// se um nao tiver ele ja retorna falso


const array5 = [1, 30, 39, 29, 10, 13];

const users5 = [
	{name: 'Nico', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Joana', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const isTrue = users5.some(user => user.credit > 800 )
//True , se retorna true se pelo menos um passar
console.log(isTrue)





const numbers = [1, 2, 3, 4]
numbers.fill("abacate")
console.log(numbers)
//preenche todos os numeros do array com o que for passado




const numbers2 = [1, 2, 3 ,4]
numbers2.fill('diego', 0, 2)
// primeiro eh o que eu vou colocar dentro do array,
// segundo eh aonde eu vou colocar dentro do array
// terceiro ate aonde ele vai
console.log(numbers2)
/*
	fill(1, 2, 3) 
	1) O que vai ser colocado no array
	2) A posição inicial 
	3) Posição final
*/



// Preenche com 0 da posição 2 do array até a posição 4
console.log(array1.fill(0, 2, 4));
// [1, 2, 0, 0]

// Preenche com 5 a partir da posição 1 
console.log(array1.fill(5, 1));
// [1, 5, 5, 5]

console.log(array1.fill(6));
// [6, 6, 6, 6]





const users6 = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 300},
];

const findAUser6 = users6.find((user) => user.name === 'Maria');
// 	{name: 'Maria', credit: 900}

const findUser6 = users6.find((user) => user.credit === 300);
// 	{name: 'Carlos', credit: 300}

console.log(findAUser6)





const users7 = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 300},
];

const findAUser7 = users7.findIndex(user => user.name === "Maria")
users7[findAUser7].name ="Maria Joaquina"
console.log(users7)




const array11 = ['a', 'b', 'c'];
const array12 = ['d', 'e', 'f'];
const numbers11 = [1, 3, 5]
const numbers12 = [2, 4, 6]

const array13 = array11.concat(array12);
const array14 = numbers11.concat(numbers12);
console.log(array13);
// ['a', 'b', 'c', 'd', 'e', 'f']
console.log(array14);





//join(separator)

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// "Fire,Air,Water"

console.log(elements.join(''));
// "FireAirWater"

console.log(elements.join(' '));
// "Fire Air Water"

console.log(elements.join('-'));
// "Fire-Air-Water"



const array15 = [1, 2, 3];

const lastElement = array15.pop();

console.log(array15);
// [1, 2]

console.log(lastElement);
// 3



const array16 = [1, 2, 3];

const firstElement = array16.shift();

console.log(array16);
// [2, 3]

console.log(firstElement);
// 1





/* 1) Posição do array da qual vamos começar a pegar as informações 
		  para criar o novo array
	 2) Posição final do array que vamos pegar os dados
*/

const users17 = ["João", "Maria", "Pedro", "Michele", "Fernando"];

console.log(users17.slice(2));
// ["Pedro", "Michele", "Fernando"];

console.log(users17.slice(2, 4));
// [ "Pedro", "Michele" ];

console.log(users17.slice(1, 6));
// ["Maria", "Pedro", "Michele", "Fernando"];


console.log(users17.slice());
// ["João", "Maria", "Pedro", "Michele", "Fernando"];




/* 1) Posição do array da qual vamos começar a tirar as informações 
	 2) Quantos elementos eu quero retirar a partir da posição inicial 
	 3) Item que você quer adicionar
*/

const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'];

months.splice(1, 0, 'Feb');
// [ 'Jan', 'Feb', 'Fev', 'Mar', 'Abr', 'Mai' ];


months.splice(1, 4, 'May');
// [ 'Jan', 'May' ]

console.log(months)
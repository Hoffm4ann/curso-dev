/*


document -> HTML

getElementById -> Tras um elemento pelo ID
getElementByClassName -> Tras Todos os elementos com essa classe
getElementByTagName -> Tras todos os elementos com esse TAG
getElementByName -> Tras Todos os elemntos com esse NAME

querySelector -> Tras um elemento, o primeiro que encontrar
querySelectorAll -> Tras todos os elementos que encontar
*/
const input = document.getElementById("main-input")
console.log(input)
/*assim ele esta pegando o valor do placeholder,
 mais adiante pegara o valor digitado*/

const element = document.getElementsByClassName("paragraph-js")

 console.log(element)

 /*button esta com duas classes ao mesmo tempo no html,
  no console do inspect apasrece o html collection*/

  const element = document.getElementsByTagName("p")

 console.log(element)
 /* nesse caso ela vai achar todos os paragrafos, 
 mas poderia ser h1 ....etc*/

 const element = document.getElementsByName("nome-completo")

 console.log(element)
 /* assim ele vai e busca o nome que esta no input no html*/

 const element = document.querySelector("#main-input")

 console.log(element)
 /*nesse caso mesmo com mais de um ele so vai achar o priomeiro
 # = id
 . = class
 pode procurar por exemblo um button.nomedaclasse
 ele procuraria um botao e pelo nome da classe que foi dada ao botao
 */
 const elements = document.querySelectorAll("p")

 console.log(element)
/*nesse caso ele tras tudo o que vc colocar para procurar*/

const element = document.querySelector("paragraph-js")
element.innerHTML = "TEXTO NOVO <b>Olá</b>"

console.log(element.textContent) //Só HTML
console.log(element.innerText) //Leva em conta o css
console.log(element.innerHTML) //tras tudo



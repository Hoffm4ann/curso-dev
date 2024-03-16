/*
REDUCE
- Retorna um valor (pode ser um novo array, um objeto, string , number, etc.)
- Aceita 4 Parãmetros 
    - acumulador
    - Valor atual
    - index
    - array completo
    */
   const list = [1, 2, 3, 4, 5, 6, 7]
   const sum = list.reduce((acumulador, valorAtual) =>{
    console.log(acumulador + 'acc')
    console.log(valorAtual + 'valorAtual')
    return acumulador + valorAtual

   }, 0)
   console.log(sum)

const cart =[
    {productName: 'Abóbora', preciePerKg: 5, kg: 1},
    {productName: 'Pepino', preciePerKg: 3.55, kg: 1.3},
    {productName: 'Limão', preciePerKg: 1.2, kg: 2},
    {productName: 'Abacate', preciePerKg: 5.4, kg: 1.67},
    {productName: 'Morango', preciePerKg: 11.9, kg: 3},
]
const finalValue = cart.reduce ((acc, value) => {
    
    const result = value.preciePerKg * value.kg
    return acc + result
}, 0)
console.log(`A sua compra ficou no total de: ${finalValue}`)
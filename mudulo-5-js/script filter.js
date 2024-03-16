/*
Filter 
- Cria um novo array, a partir do array percorrido (array original)
- Cria um novo array APENAS com os elementos filtrados
- Aceita 3 parâmetros
    -item do array
    -index
    array completo

    return true -> Item atual passa para o novo array
    return false -> Item atual NÃO passa para o novo array
    */

/*const newlist = list.filter(number => number > 100) resumindo o codigo*/
const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter((number) => {
    if (number > 100) {
        return true
    }
    else {
        return false
    }
})
console.log(newList)


/*se for menor que 100 e se for par, para saber se eh par vc divide por 2 se nao sobra nada ele eh par*/
const list2 = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList2 = list2.filter((number) => {
    if (number < 100 &&
        /*(ou || um ou outro tem que ser verdadeiro) 
        (e && as duas partes tem que ser verdadeiras) */ 
        number %2 ===0) {
        return true
    }
    else {
        return false
    }
})
console.log(newList2)
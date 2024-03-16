/*
MAP => Mapear nosso array.
- Cria um novo array, a partir do array percorrido (array original)
- Cria um novo array, com a mesma quantidade de itens do array original
- Aceita 3 parametros
    - item do array = item por item.
    - index = sabe em que posição do array esta naquele momento.
    - array completo = ver ele completo.
nao altera o array principal ele cria outro.
    */

    const number = [1, 2, 3, 4, 5, 6, 7,]

    const double = number.map((item, index, arrayOriginal) => {
        console.log(item + '=> item')
        console.log(index + '=> index')
        console.log(arrayOriginal + ' arrayOriginal')
        const newItem = item * 10
        return newItem
        
    })
    console.log(double)
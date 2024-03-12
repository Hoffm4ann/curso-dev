/* Calcula Desconto:
Todos os produtos acima de R$30,00 tem desconto de 10%. */

const cart = [10, 244, 99, 2, 20, 33, 250]

let finalValueWithDiscount = 0
let fullValue = 0
let difference = 0

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}
function economy(fullValue, finalValueWithDiscount) {
    const result = (fullValue - finalValueWithDiscount)
    return result
}
// calculateDiscount(250 , 10)
/* r$ 250 *10 => 1750 /100 => % disconto */
cart.forEach(value => {
    fullValue = fullValue + value

});

cart.forEach((value) => {

    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        finalValueWithDiscount = finalValueWithDiscount + (value - discount)
    }
    else {
        finalValueWithDiscount += value
    }

})

cart.forEach(value => {
    difference = fullValue - finalValueWithDiscount

});
console.log(`O valor final da compra foi de R$ ${fullValue.toFixed(2)},
porém você teve desconto, irá pagar apenas R$ ${finalValueWithDiscount.toFixed(2)},
 você economizou ${difference.toFixed(2)}`)
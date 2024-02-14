const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.2

    const euroToday = 6.2

    const libraToday  = 3.1

    const realToday = 1

    const bitcoinToday = 250.000

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToday)
    }
    
    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue/euroToday)
    }
    
    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue/libraToday)
    }

    if(currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
            style:"currency",
            currency: "BRL"
        }).format(inputCurrencyValue/realToday)
    }
    
    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
            style:"currency",
            currency: "BTC"
        }).format(inputCurrencyValue/bitcoinToday)
    }

    currencyValueToConvert.innerHTML = inputCurrencyValue
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}
//trocar nomes e imagem
function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    
    if(currencySelect.value == "dolar"){
        currencyName.innerHTML ="Dólar Americano"
        currencyImage.src = "./Assets/dollar.png"
    }
   
    if(currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./Assets/euro.png"
   }
  
   if(currencySelect.value == "real"){
    currencyName.innerHTML = "Real Brasileiro"
    currencyImage.src = "./Assets/real.png"
   }
   
   if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./Assets/libra.png"
    }
    
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "BitCoin"
        currencyImage.src = "./Assets/bitcoin.png"
    }

    //refazer a função
   convertValues()

}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
//monitorando a função


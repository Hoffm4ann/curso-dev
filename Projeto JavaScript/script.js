const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelect2 = document.querySelector(".currency-select2")


const apiKey = 'c1a4516321ea94bc97a98157';
const apiUrl = 'https://v6.exchangerate-api.com/v6/c1a4516321ea94bc97a98157/latest/USD';

fetch(`${apiUrl}?access_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Aqui você pode acessar os dados da resposta da API e atualizar as taxas de câmbio no seu aplicativo
  })
  .catch(error => {
    console.error('Erro ao obter taxas de câmbio:', error);
  });


   const dolarToday = 5.2

   const euroToday = 6.2

   const libraToday  = 3.1

   const realToday = 1

   const bitcoinToday = 250.000

function convertValues(){
   const inputCurrencyValue = document.querySelector(".input-currency").value
   
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueConverted  = document.querySelector(".currency-value")
   
   //valor do campo do real formatado
if(currencySelect.value == "real"){
   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
      style: "currency",
      currency: "BRL"
   }).format(inputCurrencyValue)
   }
   
   if(currencySelect2.value == "real2"){
      currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
         style: "currency",
         currency: "BRL" 
       }).format(inputCurrencyValue/realToday)
   }

if(currencySelect2.value == "dolar2"){
   currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
      style: "currency",
      currency: "USD" 
    }).format(inputCurrencyValue/dolarToday)
}

if(currencySelect2.value == "euro2"){
   currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
      style: "currency",
      currency: "EUR" 
    }).format(inputCurrencyValue/euroToday)
}

if(currencySelect2.value == "libra2"){
   currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
      style: "currency",
      currency: "GBP" 
    }).format(inputCurrencyValue/libraToday)
}

if(currencySelect2.value == "bitcoin2"){
   currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
      style: "currency",
      currency: "BTC" 
    }).format(inputCurrencyValue/bitcoinToday)
}

if(currencySelect.value == "real"){
   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
      style: "currency",
      currency: "BRL" 
    }).format(inputCurrencyValue/realToday)
}

if(currencySelect.value == "dolar"){
   currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US",{
   style: "currency",
   currency: "USD" 
 }).format(inputCurrencyValue/dolarToday)
}

if(currencySelect.value == "euro"){
   currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE",{
   style: "currency",
   currency: "EUR" 
 }).format(inputCurrencyValue/euroToday)
}

if(currencySelect.value == "libra"){
   currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK",{
   style: "currency",
   currency: "GBP" 
 }).format(inputCurrencyValue/libraToday)
}

if(currencySelect.value == "bitcoin"){
   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
   style: "currency",
   currency: "BTC" 
 }).format(inputCurrencyValue/bitcoinToday)
}

}

convertButton.addEventListener("click", convertValues)


function changeCurrency(){
   
   if (currencySelect2.value == "dolar2"){
      currencyName2.innerHTML = "Dólar Americano"
      currencyImage2.src = "./assets/dollar.png"
   }
   if (currencySelect2.value == "euro2"){
      currencyName2.innerHTML = "Euro"
      currencyImage2.src = "./assets/euro.png"
   }
   if (currencySelect2.value == "libra2"){
      currencyName2.innerHTML = "Libra Esterlina"
      currencyImage2.src = "./assets/libra.png"
   }
   if (currencySelect2.value == "bitcoin2"){
      currencyName2.innerHTML = "BitCoin"
      currencyImage2.src = "./assets/bitcoin.png"
   }
   if (currencySelect2.value == "real2"){
      currencyName2.innerHTML = "Real Brasil"
      currencyImage2.src = "./assets/real.png"
   }
   if (currencySelect.value == "dolar"){
      currencyName.innerHTML = "Dólar Americano"
      currencyImage.src = "./assets/dollar.png"
   }
   if (currencySelect.value == "euro"){
      currencyName.innerHTML = "Euro"
      currencyImage.src = "./assets/euro.png"
   }
   if (currencySelect.value == "libra"){
      currencyName.innerHTML = "Libra Esterlina"
      currencyImage.src = "./assets/libra.png"
   }
   if (currencySelect.value == "bitcoin"){
      currencyName.innerHTML = "BitCoin"
      currencyImage.src = "./assets/bitcoin.png"
   }
   if (currencySelect.value == "real"){
      currencyName.innerHTML = "Real Brasil"
      currencyImage.src = "./assets/real.png"
   }
   convertValues()
}

currencySelect2.addEventListener("change",changeCurrency)
currencySelect.addEventListener("change",changeCurrency)
const currencyName2 = document.querySelector(".currency-name2")
const currencyName = document.querySelector(".currency-name")
const currencyImage = document.querySelector(".currency-img")
const currencyImage2 = document.querySelector(".currency-img2")
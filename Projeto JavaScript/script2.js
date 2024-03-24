const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelect2 = document.querySelector(".currency-select2");
const inputCurrencyValue = document.querySelector(".input-currency");
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyValueConverted = document.querySelector(".currency-value");

const apiUrl = 'https://v6.exchangerate-api.com/v6/c1a4516321ea94bc97a98157/latest/USD';

// Função para converter valores usando a taxa de câmbio da API
async function convertValues() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const rates = data.conversion_rates;
        const fromCurrency = currencySelect.value;
        const toCurrency = currencySelect2.value;
        const amount = parseFloat(inputCurrencyValue.value);

        if (!rates[fromCurrency] || !rates[toCurrency]) {
            throw new Error("Taxa de câmbio não disponível para as moedas selecionadas.");
        }

        let convertedAmount;

        if (fromCurrency === "BTC" || toCurrency === "BTC") {
            // Se uma das moedas for Bitcoin, tratamos isso separadamente
            if (fromCurrency === "BTC") {
                convertedAmount = amount * rates[toCurrency];
            } else {
                convertedAmount = amount / rates[fromCurrency];
            }
        } else {
            // Caso contrário, usamos a fórmula padrão de conversão
            convertedAmount = (amount / rates[fromCurrency]) * rates[toCurrency];
        }

        currencyValueToConvert.textContent = `${amount} ${fromCurrency}`;
        currencyValueConverted.textContent = `${convertedAmount.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        console.error('Ocorreu um erro ao converter:', error.message);
    }
}

convertButton.addEventListener("click", convertValues);


/*
// Selecionando os elementos do DOM que serão usados para interação
const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelect2 = document.querySelector(".currency-select2");
const inputCurrencyValue = document.querySelector(".input-currency");
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyValueConverted = document.querySelector(".currency-value");

// URL da API de conversão de moeda
const apiUrl = 'https://v6.exchangerate-api.com/v6/c1a4516321ea94bc97a98157/latest/USD';

// Função para converter valores usando a taxa de câmbio da API
async function convertValues() {
    try {
        // Fazendo uma solicitação para a API
        const response = await fetch(apiUrl);
        // Convertendo a resposta em formato JSON
        const data = await response.json();

        // Obtendo as taxas de câmbio da resposta da API
        const rates = data.conversion_rates;
        // Obtendo a moeda de origem selecionada pelo usuário
        const fromCurrency = currencySelect.value;
        // Obtendo a moeda de destino selecionada pelo usuário
        const toCurrency = currencySelect2.value;
        // Obtendo o valor a ser convertido fornecido pelo usuário
        const amount = parseFloat(inputCurrencyValue.value);

        // Verificando se as taxas de câmbio para as moedas selecionadas estão disponíveis
        if (!rates[fromCurrency] || !rates[toCurrency]) {
            throw new Error("Taxa de câmbio não disponível para as moedas selecionadas.");
        }

        // Calculando o valor convertido usando as taxas de câmbio
        const convertedAmount = (amount / rates[fromCurrency]) * rates[toCurrency];

        // Atualizando o valor de origem exibido no HTML
        currencyValueToConvert.textContent = `${amount} ${fromCurrency}`;
        // Atualizando o valor convertido exibido no HTML
        currencyValueConverted.textContent = `${convertedAmount.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        // Lidando com erros, caso ocorram durante o processo de conversão
        console.error('Ocorreu um erro ao converter:', error.message);
    }
}

// Adicionando um ouvinte de evento para o botão de conversão, para chamar a função convertValues() quando clicado
convertButton.addEventListener("click", convertValues);
/*
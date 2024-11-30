// Predefined exchange rates (rates based on 1 USD)
const exchangeRates = {
    "USD": 1.0,
    "EUR": 0.85,
    "GBP": 0.75,
    "JPY": 110.0,
    "CAD": 1.36,
    "AUD": 1.48,
    "INR": 74.50,
    "CNY": 6.47,
    "ZAR": 14.80,
    "MXN": 20.12,
    "BRL": 5.25,
    "RUB": 74.11,
    "TRY": 8.67,
    "CHF": 0.91,
    "SEK": 8.74,
    "NOK": 8.69,
    "DKK": 6.36,
    "NZD": 1.43,
    "SGD": 1.35,
    "HKD": 7.77,
    "KRW": 1174.50,
    "MYR": 4.18,
    "THB": 33.13,
    "PHP": 50.75,
    "PLN": 3.82,
    "AED": 3.67,
    "SAR": 3.75,
    "EGP": 15.70
};

// Function to populate currency dropdowns
function populateCurrencyDropdowns() {
    const currencies = Object.keys(exchangeRates);
    const fromCurrencyDropdown = document.getElementById('fromCurrency');
    const toCurrencyDropdown = document.getElementById('toCurrency');

    // Add a default option to select currency
    const defaultOption1 = document.createElement('option');
    defaultOption1.value = '';
    defaultOption1.textContent = 'Select Currency';
    fromCurrencyDropdown.appendChild(defaultOption1);

    const defaultOption2 = document.createElement('option');
    defaultOption2.value = '';
    defaultOption2.textContent = 'Select Currency';
    toCurrencyDropdown.appendChild(defaultOption2);

    currencies.forEach(currency => {
        const option1 = document.createElement('option');
        option1.value = currency;
        option1.textContent = currency;

        const option2 = document.createElement('option');
        option2.value = currency;
        option2.textContent = currency;

        fromCurrencyDropdown.appendChild(option1);
        toCurrencyDropdown.appendChild(option2);
    });
}

// Function to convert currency using the predefined rates
function convertCurrency(amount, fromCurrency, toCurrency) {
    if (fromCurrency === '' || toCurrency === '') {
        throw new Error('Please select both currencies.');
    }

    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];

    // Convert amount from base currency to USD and then to the target currency
    return (amount / fromRate) * toRate;
}

// Function to handle convert button click
function handleConvertButtonClick() {
    try {
        const amount = parseFloat(document.getElementById('amount').value);
        const fromCurrency = document.getElementById('fromCurrency').value;
        const toCurrency = document.getElementById('toCurrency').value;

        if (isNaN(amount) || amount <= 0) {
            throw new Error('Please enter a valid and positive amount.');
        }

        const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
        document.getElementById('convertedAmount').textContent = ${convertedAmount.toFixed(2)} ${toCurrency};
    } catch (error) {
        alert(error.message);
    }
}

// Function to handle reset button click
function handleResetButtonClick() {
    document.getElementById('amount').value = '';
    document.getElementById('fromCurrency').value = '';
    document.getElementById('toCurrency').value = '';
    document.getElementById('convertedAmount').textContent = '';
}

// Add event listeners
document.getElementById('convertBtn').addEventListener('click', handleConvertButtonClick);
document.getElementById('resetBtn').addEventListener('click', handleResetButtonClick);

// Populate currency dropdowns on page load
populateCurrencyDropdowns();
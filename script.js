document.addEventListener('DOMContentLoaded', function () {
    const getStockButton = document.getElementById('getStock');
    const stockResults = document.getElementById('stockResults');
    const symbolInput = document.getElementById('symbol');

    getStockButton.addEventListener('click', function () {
        const symbol = symbolInput.value;

        // Show loading indicator
        showLoading();

        // Simulate API call (replace with actual API call)
        simulateAPICall(symbol)
            .then(stockData => {
                // Display stock data
                displayStockData(stockData);
            })
            .catch(error => {
                // Handle API error
                displayError(error.message);
            });
    });

    function showLoading() {
        stockResults.innerHTML = `<div class="loader"></div>`;
    }

    function simulateAPICall(symbol) {
        return new Promise((resolve, reject) => {
            // Simulating API call with timeout
            setTimeout(() => {
                const mockData = {
                    name: 'NIFTY50 Inc.',
                    symbol: 'NIFTY50',
                    price: 150.25,
                    change: '+2.50',
                };
                resolve(mockData);
            }, 1500); // Simulating a delay for the API call
        });
    }

    function displayStockData(stockData) {
        stockResults.innerHTML = `
            <p class="mb-2"><strong>Stock Name:</strong> ${stockData.name}</p>
            <p class="mb-2"><strong>Symbol:</strong> ${stockData.symbol}</p>
            <p class="mb-2"><strong>Price:</strong> $${stockData.price}</p>
            <p class="mb-2"><strong>Change:</strong> ${stockData.change}</p>
        `;
    }

    function displayError(errorMessage) {
        stockResults.innerHTML = `<p class="text-red-500">${errorMessage}</p>`;
    }
});

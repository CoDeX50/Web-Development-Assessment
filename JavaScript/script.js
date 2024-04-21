let result ="";
let priceIn ="";
let currencySelect="";
let cryptoSelect="";
function showCrypto() 
{
    cryptoSelect = document.getElementById('cryptoSelect').value;
    currencySelect = document.getElementById('currencySelect').value;
    if (cryptoSelect && currencySelect)
     {
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoSelect}&vs_currencies=${currencySelect}`)
            .then(response => response.json())
            .then(data => {
                priceIn = data[cryptoSelect][currencySelect.toLowerCase()];
                document.getElementById('conversionValue').textContent = `1 ${cryptoSelect.toUpperCase()} = ${priceIn} ${currencySelect.toUpperCase()}`;
                document.querySelector('.result').style.display = ''; // Show the conversion result container
            })
            .catch(error => console.error('Error fetching data:', error));
    } else 
    {
        document.querySelector('.result').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() { console.log("test")
    showCrypto();});

function convertCrypto() 
{
    const cryptoInput = document.getElementById('cryptoInput').value;
    result = cryptoInput * priceIn;
    document.querySelector('.result').style.display = '';     
    document.getElementById('conversionResult').textContent = `${cryptoInput.toUpperCase()} ${cryptoSelect.toUpperCase()} = ${result.toFixed(2)} ${currencySelect.toUpperCase()}`;
}



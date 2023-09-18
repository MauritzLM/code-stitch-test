// object to store prices
const hosting_prices = {
    monthly: {
        starter: '349.00',
        business: '499.00',
        pro: '749.00'
    },
    yearly: {
        starter: '3499.00',
        business: '4999.00',
        pro: '7499.00'
    }
};

// get radio inputs
const radioButtons = document.querySelectorAll('.pricing-toggle-container input[name=pricing]');
// toggle container
const toggleContainer = document.querySelector('.pricing-toggle-container');
// list of prices
const prices = document.querySelectorAll('.pricing-options-container .price');

// add event listener to container
toggleContainer.addEventListener('click', (e) => {

    radioButtons.forEach(button => {
        if (button.checked === true) {
            let pricesArr = Object.values(hosting_prices[button.value])

            prices[0].textContent = `R${pricesArr[0]}`
            prices[1].textContent = `R${pricesArr[1]}`
            prices[2].textContent = `R${pricesArr[2]}`
        }
    })

});


/* Variables */

/* Reference classes from html */
const trashContainer = document.querySelector('.debris-container')
const donationElement = document.querySelector('.donation')

/* Display currency */
const currencyFormatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
})
const amountCollected = 3000192
donationElement.innerText = currencyFormatter.format(amountCollected)

/* -------------------------------------------- */
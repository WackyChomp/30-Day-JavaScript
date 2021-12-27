

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

/* Pad numbers with 0 to avoid whitespace  */
const trashFormatter = new Intl.NumberFormat("en-us", {
    minimumIntegerDigits: 8,
    maximumFractionDigits: 0,
    useGrouping: false
})
// console.log(trashFormatter.format(7413282))


const DONATION_TARGET = 30000000



// const amountCollected = 3000192
// donationElement.innerText = currencyFormatter.format(amountCollected)
setupDebris()       /* call async function below */

/* -------------------------------------------- */

/*  */

async function setupDebris(){
    const amountCollected = await fetch("https://tscache.com/donation_total.json")
    .then(res => res.json())
    .then(data => data.count)
    donationElement.innerText = currencyFormatter.format(amountCollected)


    /* Calculation for donation goal */
    const remainingDonation = Math.max(DONATION_TARGET - amountCollected, 0)     /* ensure no negative numbers past 0 */

    
    /* Assign placeholder value to garbage/icon */
    const stringConversion = trashFormatter.format(amountCollected)
    const garbageAmount = {
        millions: {
            amount: parseInt(`${stringConversion[0]} ${stringConversion[1]}`),
            icon: "videogame_asset",
        },
        hundredThousands: {
            amount: parseInt(stringConversion[2]),
            icon: "directions_run",
        },
        thousands: {
            amount: parseInt(stringConversion[3]),
            icon: "directions_bike",
        },
        hundreds: {
            amount: parseInt(stringConversion[4]),
            icon: "surfing",
        },
        tens: {
            amount: parseInt(stringConversion[5]),
            icon: "phone_iphone",
        },
        ones: {
            amount: parseInt(stringConversion[6]),
            icon: "flatware",
        },

    }
    console.log(remainingDonation, garbageAmount)
}


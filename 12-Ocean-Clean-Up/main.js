

/* Variables */

/* Reference classes from html */
const debrisContainer = document.querySelector('.debris-container')
const donationElement = document.querySelector('.donation')

/* Display currency */
const currencyFormatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
})

/* Pad numbers with 0 to avoid whitespace  */
const debrisFormatter = new Intl.NumberFormat("en-us", {
    minimumIntegerDigits: 8,
    maximumFractionDigits: 0,
    useGrouping: false
})
// console.log(debrisFormatter.format(7413282))


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

    
    /* Assign placeholder value to debris/icon */
    const stringConversion = debrisFormatter.format(amountCollected)
    const debrisAmount = {
        xxl: {
            amount: parseInt(`${stringConversion[0]} ${stringConversion[1]}`),
            icon: "directions_run",
        },
        xl: {
            amount: parseInt(stringConversion[2]),
            icon: "accessible",
        },
        lg: {
            amount: parseInt(stringConversion[3]),
            icon: "build",
        },
        md: {
            amount: parseInt(stringConversion[4]),
            icon: "bug_report",
        },
        sm: {
            amount: parseInt(stringConversion[5]),
            icon: "shopping_cart",
        },
        xs: {
            amount: parseInt(stringConversion[6]),
            icon: "rocket_launch",
        },

    }
    //console.log(remainingDonation, debrisAmount)

    Object.values(debrisAmount).forEach(({ amount, icon}) => {
        for (let i = 0; i < amount; i++) {
            createDebris(icon)
        }
    })
}


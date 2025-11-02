function fromDollarToYen (amount, currency){
    let rate = "Dollar";
    let yen = 153.95;

    if(currency === rate) return amount * yen;
    else return "This currency is not available here"
};

function fromEuroToDollar(amount, currency){
    let rate = "Euro"
    let onEuro = {
        "usd": 1.16
    }

    if(currency === rate) return amount * onEuro.usd
    else return "We do not change this type of currency"
};

function fromYenToPound (amount, currency){
    let rate = "Yen"
    let oneYen = {
        "poundSterling": 0.0049
    };

    if(currency === rate) return amount * oneYen.poundSterling;
    else return "He isn't available"
}



module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound} ;
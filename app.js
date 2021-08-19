function totalPrices() {
    let total = document.getElementById('totalId')
    let phoneprice = document.getElementById("mobilePriceId").innerText
    let phonepriceFloat = parseFloat(phoneprice);
    let casePrice = document.getElementById("casePriceId").innerText
    let casePriceFloat = parseFloat(casePrice);
    console.log(phoneprice);
    let totalPriceFloat = phonepriceFloat + casePriceFloat;
    total.innerText = totalPriceFloat

    // tax 
    let tax = totalPriceFloat / 10;
    document.getElementById('tax').innerText = tax;

    // after tax 
    let subtotal = tax + totalPriceFloat;
    document.getElementById('subtotal').innerText = subtotal;


}

function perUnit(priceId) {
    let perprice = document.getElementById(priceId).innerText;
    let perpriceFloat = parseFloat(perprice);
    return perpriceFloat;
}
function increment(incrementiteam, perPrice, priceField, tr) {
    let quantity = document.getElementById(incrementiteam);
    let quantityInt = parseInt(quantity.value);
    if (tr == true) {
        quantityInt++;
    }
    else {
        quantityInt--;
    }
    if (quantityInt >= 0) {
        quantity.value = quantityInt;

        let totalPrice = perPrice * quantityInt;

        document.getElementById(priceField).innerText = totalPrice;
    }
    totalPrices()
}


let mobileUnitPrice = perUnit('mobilePriceId')
let caseUnitPrice = perUnit('casePriceId')

let mobilePlus = document.getElementById('mobilePlusId');
mobilePlus.addEventListener('click', function () {
    increment('mobileQuantityId', mobileUnitPrice, 'mobilePriceId', true);
})
let mobileMin = document.getElementById('mobileMinId');
mobileMin.addEventListener('click', function () {
    increment('mobileQuantityId', mobileUnitPrice, 'mobilePriceId', false);
})

let caseplus = document.getElementById('casePlusId');
caseplus.addEventListener("click", function () {
    increment('caseQuantityId', caseUnitPrice, 'casePriceId', true)
})
let caseMin = document.getElementById('caseMinId');
caseMin.addEventListener("click", function () {
    increment('caseQuantityId', caseUnitPrice, 'casePriceId', false)
})
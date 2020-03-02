/*CODE*/
function validInputAPR() {
    if (document.getElementById('apr').value < 0 || document.getElementById('apr').value > 25) {
        document.getElementById('validAPR').innerHTML = "APR must be greater than 0% and under 26%";
    }
    else /*(document.getElementById('apr').value >= 0 || document.getElementById('apr').value <= 25) */{
        document.getElementById('validAPR').innerHTML = "APR good to go.";
    }
}

function validInputTerm() {
    if (document.getElementById('term').value < 0 || document.getElementById('term').value >= 41) {
        document.getElementById('validTerm').innerHTML = "Term must be greater than 0 and under 41.";
    }
    else {
        document.getElementById('validTerm').innerHTML = "Term good to go.";
    }
}

function calcPayment(apr, term, amount) {
    if (apr.value != "" && term.value != "" && amount.value != "") {
        amount = Number(amount);
        for (var i = 0; i < term; i++) {
            amount = (amount * apr/100 + amount);
        }
        document.getElementById('payment').innerHTML = "$" + amount.toFixed(2);
    }
    /*else {
        document.getElementById('payment').innerHTML = "Invalid Input";
    }*/
}
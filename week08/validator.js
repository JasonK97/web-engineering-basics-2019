/*CODE*/
function phoneNum(input)
{
  var phoneNumber = /^\d{3}-\d{3}-\d{4}$/;
  if(input.value.match(phoneNumber))
  {
    document.getElementById("phoneError").innerHTML = "Phone Number Accepted";
    return true;
  }
  else
  {
    document.getElementById("phoneError").innerHTML = "Required Format: xxx-xxx-xxxx";
    return false;
  }
}

function totalAmount() {
  var input = document.getElementsByName("item[]");
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }
  document.getElementsByName("total")[0].value = "$" + total.toFixed(2);
}

function creditNum(input)
{
  var creditCardNum = /^\d{16}$/;
  if(input.value.match(creditCardNum))
  {
    document.getElementById("creditError").innerHTML = "Credit Card Number Accepted";
    return true;
  }
  else
  {
    document.getElementById("creditError").innerHTML = "Must be 16-digits";
    return false;
  }
}

function expDate(input)
{
  var expDate = /^(0[1-9]|1[0-2])\/(20[1][8-9]|20[2-9][0-9]|2100)$/;
  if(input.value.match(expDate))
  {
    document.getElementById("dateError").innerHTML = "Expiration Date Accepted";
    return true;
  }
  else
  {
    document.getElementById("dateError").innerHTML = "Must be valid date: xx/xxxx";
    //document.getElementsByName("exp_date").focus();
    return false;
  }
}

function check() {
  if (document.getElementsByName("first_name").value != "" && document.getElementsByName("last_name").value != ""
  && document.getElementsByName("address").value != "" && document.getElementsByName("phone").value != ""
  && document.getElementsByName("credit_card").value != "") {
      document.getElementById("validSubmit").innerHTML = "Submit Successful!";
      return true;
  }
}

function refresh() {
  document.getElementById("refresh").innerHTML = "Page Reset Successful";
}
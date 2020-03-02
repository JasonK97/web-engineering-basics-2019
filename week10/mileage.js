function refresh() {
  document.getElementById("content").innerHTML = "Page Reset Successful";
  document.getElementById("listTitle").innerHTML = "";
  document.getElementById("myList").innerHTML = "";
}

function errorState1(input) {
  var stateLetters = /[A-Z]{2}/;
  if (input.value.match(stateLetters)) {
    document.getElementById("errorS").innerHTML = "";
    return true;
  }
  else {
    document.getElementById("errorS").innerHTML = "Make sure both states are entered correctly: XX";
    return false;
  }
}

function errorState2(input) {
  var stateLetters = /[A-Z]{2}/;
  if (input.value.match(stateLetters)) {
    document.getElementById("errorS").innerHTML = "";
    return true;
  }
  else {
    document.getElementById("errorS").innerHTML = "Make sure both states are entered correctly: XX";
    return false;
  }
}

function getText() {
  var xhttp = new XMLHttpRequest();
  var startC = document.getElementById("startCity").value;
  var startS = document.getElementById("startState").value;
  var endC = document.getElementById("endCity").value;
  var endS = document.getElementById("endState").value;
  var str = "/cgi-bin/cs213/mileageAjaxJSON/?startCity=" + startC + "&startState=" + startS + "&endCity=" + endC + "&endState=" + endS;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var jResponse = JSON.parse(this.responseText).trip;
      displayResults(jResponse);
      console.log(jResponse);
    }
  };

  xhttp.open("GET", str, true);
  xhttp.send();
}

function displayResults(jResponse) {
  var content = "It is " + jResponse.miles + " miles from " + jResponse.startcity + " to " + jResponse.endcity;
  document.getElementById('content').innerHTML = content;
  document.getElementById('listTitle').innerHTML = "You can travel by these methods";
  jResponse.tmode.forEach(tMethod => {
    document.getElementById("myList").innerHTML += "<li>" + tMethod + "</li>";
  });
}

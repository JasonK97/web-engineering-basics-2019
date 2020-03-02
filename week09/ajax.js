//AJAX TXT functions
 /********************************************************************************/

function getMexico() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
       if (this.readyState == 4 && this.status == 200) {
          document.getElementById("countryInfo").innerHTML = this.responseText;
       }
    };
    xhttp.open("GET", "mexico.txt", true);
    xhttp.send();
 }

 function getUSA() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
       if (this.readyState == 4 && this.status == 200) {
          document.getElementById("countryInfo").innerHTML = this.responseText;
       }
    };
    xhttp.open("GET", "usa.txt", true);
    xhttp.send();
 }

 function getCanada() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
       if (this.readyState == 4 && this.status == 200) {
          document.getElementById("countryInfo").innerHTML = this.responseText;
       }
    };
    xhttp.open("GET", "canada.txt", true);
    xhttp.send();
 }

 function getRussia() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
       if (this.readyState == 4 && this.status == 200) {
          document.getElementById("countryInfo").innerHTML = this.responseText;
       }
    };
    xhttp.open("GET", "russia.txt", true);
    xhttp.send();
 }

 //JSON functions
 /********************************************************************************/

 function getText() {
     var info = document.getElementById("fileName").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
       if (this.readyState == 4 && this.status == 200) {
          var jResponse = JSON.parse(this.responseText);
          displayResults(jResponse);
       }
    };
    xhttp.open("GET", info, true);
    xhttp.send();
 }

 function displayResults(jResponse) {
    var content = "";
    var students = jResponse.students;
    for (let i = 0; i < students.length; i++) {
       content += "<p>" +
          students[i].first + " " +
          students[i].last + ", " +
          students[i].major + "</p>";
    }
    document.getElementById('content').innerHTML = content;
 }
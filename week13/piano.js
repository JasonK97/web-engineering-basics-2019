document.getElementById("form1").addEventListener("submit", validate);

function validate(event) {
    event.preventDefault();
    //validation code

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText;
            response = JSON.parse(response);
            displayResults(response);
        }
    }

    var form1 = document.getElementById("form1");
    var data = new FormData(form1);

    xhr.open("POST", "assign13.php", true);
    xhr.send(data);
}

function displayResults(data) {
    console.log(data);
    var output = "";
    for (x of data) {
        output += "<div class=\"output\">" + x.firstname + " " + x.lastname + " " + x.studentID + "<br>" +
        x.firstname2 + " " + x.lastname2 + " " + x.studentID2 + "<br>" +
        x.performance + "<br>" +
        x.skilllevel + "<br>" +
        x.instrument + "<br>" +
        "In the " + x.location + " building, in Room " + x.room + " at " + x.perfTime +
        "pm<br></div>";
    }
    document.getElementById("results").innerHTML = output;
}

function showDuet(x) {
    if (x.value == "Duet") {
        document.getElementById("duetInfo").style.display = "block";
    }
    else if (x.value == "Solo") {
        document.getElementById("duetInfo").style.display = "none";
    }
    else if (x.value == "Concerto") {
        document.getElementById("duetInfo").style.display = "none";
    }
}

function numCheck(numID) {
    var stuNumber = /^\d{9}$/;
  if(numID.value.match(stuNumber))
  {
    document.getElementById("numError").innerHTML = "";
    return true;
  }
  else
  {
    document.getElementById("numError").innerHTML = "Required 9-digit Student ID Number.";
    document.getElementById("numError").style.color = "red";
    return false;
  }
}

function numCheck2(numID) {
    var stuNumber = /^\d{9}$/;
  if(numID.value.match(stuNumber))
  {
    document.getElementById("numError2").innerHTML = "";
    return true;
  }
  else
  {
    document.getElementById("numError2").innerHTML = "Required 9-digit Student ID Number.";
    document.getElementById("numError2").style.color = "red";
    return false;
  }
}

function verify() {
    document.getElementsByName("performance").required = true;
    document.getElementsByName("level").required = true;
    document.getElementsByName("instrument").required = true;
    document.getElementsByName("location").required = true;
    document.getElementsByName("room").required = true;
    document.getElementsByName("time").required = true;
}
function problem1() {
    console.log("Hello World!");
}

function problem2(replaceText, name) {
    replaceText = replaceText.replace('RICH_GUY', name);
    document.getElementById("text2").innerHTML = replaceText;
}

function problem3(farenheit) {
    console.log((5/9) * (farenheit-32));
}
//document.getElementById("text3").innerHTML = problem3;

function problem4(text4) {
    var answer = text4;
    if (text4 < 1)
        console.log("Invalid Weight");
    else if (text4 < 2 && text4 >= 1)
        console.log("$0.98");
    else if (text4 < 3 && text4 >= 2)
        console.log("$1.19");
    else if (text4 < 4 && text4 >= 3)
        console.log("$1.40");
    else if (text4 < 5 && text4 >= 4)
        console.log("$1.61");
    else if (text4 >= 5)
        console.log("$1.82");
}

function problem5(apr5, term5, amount5) {
    var i;
    var hold;
    var hold2;
    var answer;
    for (i = 0; i <= 5; i++)
    {
        hold = (amount5 * apr5);
        hold2 = (amount5 - hold);
        answer = (amount5 + hold2); 
    }
    console.log(answer);
}
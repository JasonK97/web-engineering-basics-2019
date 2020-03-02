<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
    $myArray = array("one"=>"uno",
        "two"=>"dos",
        "three"=>"tres",
        "four"=>"cuatro",
        "five"=>"cinco",
        "six"=>"seis",
        "seven"=>"siete",
        "eight"=>"ocho",
        "nine"=>"nueve",
        "ten"=>"diez",
        "eleven"=>"once",
        "twelve"=>"doce",
        "thirteen"=>"trece",
        "fourteen"=>"catorce",
        "fifteen"=>"quince",
        "sixteen"=>"dieciseis",
        "seventeen"=>"diecisiete",
        "eighteen"=>"dieciocho",
        "nineteen"=>"diecinueve",
        "twenty"=>"veinte");
    echo "<h1>" . $myArray[$_GET['input4']] . "</h1>" ?>
</body>
</html>
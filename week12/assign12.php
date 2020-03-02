<?php
$firstname = isset($_GET["first_name"]) ? sanatize($_GET["first_name"]) : "John (Default)";
$lastname = isset($_GET["last_name"]) ? sanatize($_GET["last_name"]) : "Doe (Default)";
$address = isset($_GET["address"]) ? sanatize($_GET["address"]) : "000 St NE";
$phoneNum = isset($_GET["phone"]) ? sanatize($_GET["phone"]) : "000-000-0000";
$stuff = $_GET["item"];
$creditInfo = isset($_GET["creditType"]) ? sanatize($_GET["creditType"]) : "No Type Selected";
$creditCard = isset($_GET["credit_card"]) ? sanatize($_GET["credit_card"]) : "xxxxxxxxxxxx1234";
$expDate = isset($_GET["exp_date"]) ? sanatize($_GET["exp_date"]) : "00/0000";

function sanatize($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link type="text/css" rel="stylesheet" href="../week12/form.css">
    <title>PHP Confirmation</title>
</head>

<body>
    <form id="myForm" action="assign12_a.php">
        <h1>Confirm your order:</h1>
        <p><strong>Your info:</strong><br>
            <?php
            echo $firstname . " " . $lastname . "<br>" . $address;
            ?>
        </p>
        <p><strong>Your items are:</strong><br>
            <?php
            foreach ($stuff as $item) {
                echo $item . "<br>";
            }
            ?>
        </p>
        <p><strong>Payment Method:</strong><br>
            <?php 
                echo $creditInfo . "<br>";
                echo "Expires: " . $expDate;
            ?></p>
        <input type="submit" name="confirm" value="Confirm">
        <input type="submit" name="cancel" value="Cancel">
    </form>
</body>

</html>
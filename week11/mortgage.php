<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link type="text/css" rel="stylesheet" href="../week11/mortgage.css">
    <title>PHP Stuff to the Rescue</title>
</head>

<body>
    <div id="phpbox">
        <h1>Mortgage Calculator</h1>
        <p>Your APR is: <?php echo $_GET['apr'] . "%" ?> </p>
        <p>Your Term is: <?php echo $_GET['term'] . " years" ?> </p>
        <p>Your Amount is: $<?php echo $_GET['amount'] ?> </p>
        <p><?php
            function calculateMortgage($apr, $term, $amount)
            {
                $final = $amount;
                for ($x = 0; $x < $term; $x++) {
                    $final = $amount * $apr / 100 + $amount;
                }
                return $final;
            }
            echo "Your payment amount is: $" . calculateMortgage($_GET['apr'], $_GET['term'], $_GET['amount']);
            ?></p>
    </div>
</body>

</html>
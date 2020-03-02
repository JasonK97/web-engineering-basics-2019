<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link type="text/css" rel="stylesheet" href="../week12/form.css">
    <title>Final Confirmation</title>
</head>
<body>
    <div>
    <?php 
         if (isset($_GET['confirm'])) {
            echo "<h1>Order Successful!</h1>";
        }
        else if (isset($_GET['cancel'])) {
            echo "<h1>Order Cancelled.</h1>";
        }
    ?>
    </div>
</html>
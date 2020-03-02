<?php
$firstname = sanatize("first_name");
$lastname = sanatize("last_name");
$studentID = sanatize("studentID");
$firstname2 = sanatize("first_name2");
$lastname2 = sanatize("last_name2");
$studentID2 = sanatize("studentID2");
$performance = sanatize("performance");
$skilllevel = sanatize("level");
$instrument = sanatize("instrument");
$location = sanatize("location");
$room = sanatize("room");
$perfTime = sanatize("time");

$data = array (
    "firstname" => $firstname,
    "lastname" => $lastname,
    "studentID" => $studentID,
    "firstname2" => $firstname2,
    "lastname2" => $lastname2,
    "studentID2" => $studentID2,
    "performance" => $performance,
    "skilllevel" => $skilllevel,
    "instrument" => $instrument,
    "location" => $location,
    "room" => $room,
    "perfTime" => $perfTime
);

$file = "data/data1.txt";

$current = [];
if (file_exists($file)) {
    $current = file_get_contents($file);
    $current = json_decode($current);
}

$current[] = $data;
$current = json_encode($current);

file_put_contents($file, $current);

echo $current;

function sanatize($input)
{
    if (isset($_POST[$input]))
    {
        $value = $_POST[$input];
        $value = trim($value);
        $value = stripslashes($value);
        $value = htmlspecialchars($value);
        return $value;
    }
}
?>
<?php
    $con = mysqli_connect("localhost", "root", "", "capstone");

    // Check connection
    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully";
?>

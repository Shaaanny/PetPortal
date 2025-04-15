<?php
// database.php

// Database configuration
$host = 'localhost';
$dbname = "root";
$dbname = "database";
$dbpassword = "";

$conn = new mysqli($host, $username, $password, $dbname);

$sql = "SELECT * FROM users (FirstName, LastName, Email, Password) values ( ?, ?, ?, ?)";
$stmt = mysqli_stmt_init($conn);
$preparestmt = mysqli_stmt_prepare($stmt, $sql); 
if( $preparestmt){
    mysqli_stmt_bind_param($stmt, "ssss", $FirstName, $LastName, $Email, $Password);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
} else {
    echo "Error: " . mysqli_error($conn);
}
?>
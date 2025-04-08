<?php
$conn = new mysqli("localhost", "root", "", "gym_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $locality = $_POST['locality'];
    $email = $_POST['eid'];
    $mobile = $_POST['mobnum'];

    // Check if the user already exists
    $checkQuery = "SELECT * FROM gymform WHERE eid = '$email'";
    $result = $conn->query($checkQuery);

    if ($result->num_rows > 0) {
        echo "❌ This email is already registered!";
    } else {
        $sql = "INSERT INTO gymform (username, age, gender, locality, eid, mobnum) VALUES ('$username','$age' ,'$gender' , '$locality' , '$email', '$mobile')";
        if ($conn->query($sql) === TRUE) {
            echo "✅ Data inserted successfully!";
        } else {
            echo "❌ Error: " . $conn->error;
        }
    }
}

$conn->close();

?>
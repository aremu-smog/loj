<?php 

header("Access-Control-Allow-Methods: POST");

//Function to convert fields the first letter of each field to capital letter
function format_field($field){

    //Replace underscore with space
    $field = str_replace("_"," ",$field);

    //Convert the result to first letter of the new value to Capital letter
    return ucfirst($field);
}

//Form fields
$fields = ["last_name","first_name","email","job_title","company_name","work_phone","about_brand"];

// Array to hold errors
$errors = [];

// Array to hold empty fields
$empty_fields = [];

// Loop through each fields
foreach($fields as $field){

    //Check if a field is set and it's not empty
    if(isset($_POST[$field]) && $_POST[$field] != ""){

        //Create a variable from each form field
        $$field = $_POST[$field];
    }else{

        //Add the empty field
        $empty_fields[] = $field;
    }
}


// Check if any field is empty
if(count($empty_fields) > 0){
 //
 echo 2;
}else{
    $to = "clientservices@lojcompany.com";
    $subject = "New Client";
    $headers = "From: {$email} \r\n";
    $headers .= "MIME-Version: 1.0 \r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1 \r\n";

    $message = "<html><body>";
    $message .= "<h3>New Client Brief</h3>";

    foreach ($fields as $field) {
        $message.= "<p><b>".format_field($field).":</b> {$_POST[$field]}</p>";
    }

    $message .= "</body></html>";

    if(@mail($to, $subject, $message, $headers))
    {
        echo true;
    }else{
        echo false;
    }
}


?>

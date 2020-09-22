<?php 

header("Content-Type: application/x-www-form-urlencoded");
header("Access-Control-Allow-Methods: POST");
// $fields = ["last_name","last_name","email","job_title","company_name","work_phone","about_brand"];

// foreach ($fields as $field) {
//     if(isset($_POST[$field])){
//         $$field = $_POST[$field];
//     }
// }
if(isset($_POST["last_name"]) && $_POST["last_name"] == "")
{
 echo $last_name;
}else{
    echo "There is a problem";
}


?>
<?php 

$fields = ["last_name","last_name","email","job_title","company_name","work_phone","about_brand"];

foreach ($fields as $field) {
    if(isset($_POST[$field])){
        $$field = $_POST[$field];
    }
}
$last_name = $_POST["last_name"];
return $last_name;

?>
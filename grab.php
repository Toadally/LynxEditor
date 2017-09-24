<?php
$f = $_POST['file'];
$data = htmlspecialchars(file_get_contents(dirname(__FILE__) . "/preview" . "/" . $f));
echo $data;
?>

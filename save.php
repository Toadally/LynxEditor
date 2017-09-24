<?php
$file = $_POST['file'];
$contents = $_POST['text'];
file_put_contents(dirname(__FILE__) . "/preview" . "/" . $file,$contents);
?>

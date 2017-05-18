<?php

$host_name = exec("hostname");
echo 'window.onload = function () { document.getElementById("localhost_address").innerHTML="'.gethostbyname($host_name).'" }';


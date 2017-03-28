<?php
if (isset($_POST['action']) && $_POST['action'] = 'getImages'){
    $images = scandir('../img/sales');
    echo json_encode($images);
}

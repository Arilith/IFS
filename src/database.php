<?php

//Dit is slechts een "snel bij elkaar geraapt" bestand. Met meer tijd had ik dit veel mooier kunnen indelen en kunnen schrijven. Het belangrijkste voor nu: Het werkt!

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$host = 'XXXXX';
$db   = 'XXXXX';
$user = 'XXXXX';
$pass = 'XXXXXXX'; //Deze houd ik toch liever prive! ;)

$dsn = "mysql:host=$host;dbname=$db";



try {
    $pdo = new PDO($dsn, $user, $pass);
} catch (PDOException $e) {
    throw new PDOException($e->getMessage(), (int)$e->getCode());
}


if(isset($_GET["insert"])) {
    print_r($_GET);
    $barcode = htmlspecialchars($_GET["barcode"]);
    $userID = htmlspecialchars($_GET["userid"]);

    if(strlen($barcode) > 6 && stripos($barcode, "STWMOD") === false) {
        $explodedBarcode = explode(",", $barcode);
        $barcode = $explodedBarcode[1];
        if($pdo->exec("INSERT INTO producten (barcode, userID) VALUES ('$barcode', '$userID')")) {
            echo "Instered into database";
        }
    }


}

if(isset($_GET["useItem"])) {
    $ingredients = htmlspecialchars($_GET["ingredients"]);
    $ingredientsArray = explode("," , $ingredients);
    $userID = htmlspecialchars($_GET["userid"]);

    $deletedItems = 0;

    foreach($ingredientsArray as $ingredient) {
        $query = $pdo->query("SELECT * FROM producten WHERE userID = '$userID'");
        while ($product = $query->fetch(PDO::FETCH_ASSOC)) {
            $explodedName = explode(" ", $product["naam"]);
            foreach($explodedName as $productnaam) {
                if (stripos($ingredient, $productnaam) !== false) {
                    $deletedItems++;
                    $pdo->exec("DELETE FROM producten WHERE naam LIKE '%$productnaam%' LIMIT 1");
                }
            }
        }
    }

    if($deletedItems == 0) {
        echo "noitems";
    } else {
        echo "success";
    }
}


if(isset($_GET["removeitem"])) {
    $item = htmlspecialchars($_GET["item"]);
    $userID = htmlspecialchars($_GET["userid"]);

    $pdo->exec("DELETE FROM producten WHERE naam = '$item' LIMIT 1");
}


if(isset($_GET["json"])) {

    $json_array = array();

    $userID = htmlspecialchars($_GET["userid"]);
    $jsonq = $pdo->query("SELECT barcode FROM producten WHERE userid='$userID'");

    $final_array = array();

    while($jsonr = $jsonq->fetch(PDO::FETCH_ASSOC)) {

        $id = rand(0, 100000);

        switch ($jsonr["barcode"]) {
            case '8606108584163':
                $naam = "Chicken Noodles";
                array_push($final_array, array("id" => $id, "name" => $naam));
                $pdo->exec("UPDATE producten SET naam = '$naam' WHERE barcode = '8606108584163'");
                break;
            case '20521325':
                $naam = "Chicken Ragout";
                array_push($final_array, array("id" => $id, "name" => $naam));
                $pdo->exec("UPDATE producten SET naam = '$naam' WHERE barcode = '20521325'");
                break;
            case '4056489124160':
                $naam = "Bread";
                array_push($final_array, array("id" => $id, "name" => $naam));
                $pdo->exec("UPDATE producten SET naam = '$naam' WHERE barcode = '4056489124160'");
                break;
            case '8000050840825':
                $naam = "Pasta";
                array_push($final_array, array("id" => $id, "name" => $naam));
                $pdo->exec("UPDATE producten SET naam = '$naam' WHERE barcode = '8000050840825'");
                break;
            case '5000171056498':
                $naam = "Tuna";
                array_push($final_array, array("id" => $id, "name" => $naam));
                $pdo->exec("UPDATE producten SET naam = '$naam' WHERE barcode = '5000171056498'");
                break;
            case '8713200817058':
                $naam = "Meatballs";
                array_push($final_array, array("id" => $id, "name" => $naam));
                $pdo->exec("UPDATE producten SET naam = '$naam' WHERE barcode = '8713200817058'");
                break;
            case '20069490':
                $naam = "Pesto";
                array_push($final_array, array("id" => $id, "name" => $naam));
                $pdo->exec("UPDATE producten SET naam = '$naam' WHERE barcode = '20069490'");
                break;
            case '4056489167938':
                $naam = "Pepper";
                array_push($final_array, array("id" => $id, "name" => $naam));
                $pdo->exec("UPDATE producten SET naam = '$naam' WHERE barcode = '4056489167938'");
                break;
            case '8715700422299':
                $naam = "Tomato Juice";
                array_push($final_array, array("id" => $id, "name" => $naam));
                $pdo->exec("UPDATE producten SET naam = '$naam' WHERE barcode = '8715700422299'");
                break;
            case '613008736194':
                $naam = "Arizona";
                array_push($final_array, array("id" => $id, "name" => $naam));
                $pdo->exec("UPDATE producten SET naam = '$naam' WHERE barcode = '613008736194'");
                break;
            case '045496521219':
                $naam = "Mario";
                array_push($final_array, array("id" => $id, "name" => $naam));
                $pdo->exec("UPDATE producten SET naam = '$naam' WHERE barcode = '045496521219'");
                break;
            default:
                //array_push($final_array, array("id" => $id, "name" => "Unrecognized"));
                break;

        }
    }

    echo json_encode($final_array);

}

?>
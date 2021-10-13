<?php require __DIR__ . "/../view-components/header.php";

$number = filter_var($_GET["number"], FILTER_SANITIZE_NUMBER_INT);

?>

<a class="backButton button" href="/views/home.php">Want new numbers?</a>

<div class="result">
    <?php require __DIR__ . '/../view-components/post.php'; ?>
    <?php echo calculateFib($number); ?>
</div>


<?php require __DIR__ . '/../view-components/footer.php'; ?>
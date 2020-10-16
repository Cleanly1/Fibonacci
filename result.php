<?php require __DIR__ . "/header.php";

$number = filter_var($_GET["number"], FILTER_SANITIZE_NUMBER_INT);

?>

<a class="backButton button" href="/">Want new numbers?</a>
<div class="form">
    <button onclick="madness()" class="button rainbowButton rainbow">Click to start the rainbow</button>
    <button onclick="stopMadness()" class="button rainbowButton rainbow">Click to stop the rainbow</button>
</div>
<div class="result">
    <?php require __DIR__ . '/post.php'; ?>
    <?php echo calculateFib($number); ?>
</div>


<?php require __DIR__ . '/footer.php'; ?>
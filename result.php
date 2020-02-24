<?php require __DIR__ . "/header.php"; ?>

<form class="but" action="/">
    <button class="rainbowButton button" type="submit">Want new numbers?</button>
</form>
<div class="form">
    <button onclick="madness()" class="rainbowButton rainbow">Click to start the rainbow</button>
    <button onclick="stopMadness()" class="rainbowButton rainbow">Click to stop the rainbow</button>
</div>
<div class="result">
    <?php require __DIR__ . '/post.php'; ?>
    <?php echo calculateFib($_GET["number"]); ?>
</div>


<?php require __DIR__ . '/footer.php'; ?>
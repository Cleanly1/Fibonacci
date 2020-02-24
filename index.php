<?php require __DIR__ . "/header.php"; ?>


<div class="form">
    <form action="result.php" method="get">
        <input name="number" type="number" id="inputField">
        <button class="rainbowButton button" type="submit">Submit</button>

    </form>
    <button class="rainbowButton rainbow" onclick="madness()">Click to start the rainbow</button>
    <button class="rainbowButton rainbow" onclick="stopMadness()">Click to stop the rainbow</button>
</div>




<?php require __DIR__ . '/footer.php'; ?>
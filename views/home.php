<?php require __DIR__ . "/../view-components/header.php"; ?>


<div class="form">
    <form action="/views/result.php" method="get">
        <input name="number" type="number" id="inputField">
        <button class="button" type="submit">Submit</button>

    </form>
    <button class="button rainbow" onclick="madness()">Click to start the rainbow</button>
    <button class="button rainbow" onclick="stopMadness()">Click to stop the rainbow</button>
</div>




<?php require __DIR__ . '/../view-components/footer.php'; ?>
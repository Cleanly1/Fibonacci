<?php require __DIR__ . "/../view-components/header.php"; ?>


<div class="form">
    <h2 class="formTitle">Enter a number to get a Fibonacci serie</h2>
    <form action="/views/result.php" method="get">
        <input name="number" type="number" id="inputField">
        <button class="button" type="submit">Submit</button>

    </form>
</div>




<?php require __DIR__ . '/../view-components/footer.php'; ?>
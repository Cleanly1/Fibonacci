<?php require __DIR__ . "/header.php"; ?>


<div class="form">
<form action="result.php" method="post">
  <input name="requestedNumber" type="number" id="inputField">
  <button id="submitButton" class="button" type="submit">Submit</button>

</form>
<button onclick="madness()" class="rainbow">Click to start the rainbow</button>
<button onclick="stopMadness()" class="rainbow">Click to stop the rainbow</button>
</div>




<?php require __DIR__ . '/footer.php'; ?>

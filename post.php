<?php

  function posting () {
    return 'Your ' . $_POST["requestedNumber"] . ' Fibonacci numbers are: <br>';
  };

  echo posting();
?>

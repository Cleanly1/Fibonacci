<?php require __DIR__ . "/header.php"; ?>

  <form class="but" action="startSite.php">
      <button class="rainbowButton button" type="submit">Want new numbers?</button>
  </form>
  <div class="form">
    <button onclick="madness()" class="rainbowButton rainbow">Click to start the rainbow</button>
    <button onclick="stopMadness()" class="rainbowButton rainbow">Click to stop the rainbow</button>
    <br><br><?php echo calculateFib($_POST["requestedNumber"]); ?>
  </div>



<?php require __DIR__ . '/footer.php'; ?>



<?php

  function calculateFib($until) {
    if ($until == 1) {
      require 'post.php';
      return "0";
    }elseif ($until == 2) {
      require 'post.php';
      return "0 <br> 1";
    }elseif ($until == 0) {
      return "You pick zero and you get zero";
    }elseif ($until > 2 && $until <= 1000) {
      $fib = 1;
      $lastFib = 0;
      require 'post.php';
      echo "$lastFib<br>$fib<br>";
      for ($i=0; $i < $until - 2; $i++) {
        $totalFib = $fib + $lastFib;

        echo number_format($totalFib) . "<br>";

        $lastFib = $fib;
        $fib = $totalFib;
        };

      }elseif ($until > 1000)  {
      $fib = 1;
      $lastFib = 0;
      echo "Your requested number is to big, you only get 1000 Fibonacci numbers: <br>";
      echo "$lastFib<br>$fib<br>";
      for ($i=0; $i < 1000 - 2; $i++) {
        $totalFib = $fib + $lastFib;

        echo number_format($totalFib) . "<br>";

        $lastFib = $fib;
        $fib = $totalFib;
        };
    };
};
?>

<html>

<head>
  <link rel="stylesheet" type="text/css" href="styleFib.css">
    <title>Result</title>
</head>
<body>
  <header>
    <h1>The Fibonacci Numbers</h1>

</header>

<!-- <div class="centerBut" -->
<form class="but" action="startSite.php">
    <input class="button" type="submit" value="Want new numbers?" />
</form>
<!-- </div> -->
<div class="form">
<?php echo calculateFib($_POST["requestedNumber"]); ?>
</div>




<!--  Always put the <script> last just before </body> -->
</body>
</html>



<?php




function calculateFib($until) {
  if ($until == 1) {
    require 'post.php';
    echo "0";
  };
  if ($until == 2) {
    require 'post.php';
    echo "0 <br> 1";
  };
  if ($until == 0) {
    echo "You pick zero and you get zero";
  }
  if ($until > 2 && $until < 1001) {
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

    };
    if ($until > 1000)  {
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




// 1,1,2,3,5

 ?>

<?php

function posting()
{
    $number = filter_var($_GET["number"], FILTER_SANITIZE_NUMBER_INT);
    if ($number > 1000) {
        return "Your requested number is to big, you only get 1000 Fibonacci numbers: <br>";
    }
    return 'Your ' . $number . ' Fibonacci numbers are: <br>';
};


function calculateFib($until)
{
    $until = filter_var($until, FILTER_SANITIZE_NUMBER_INT);
    
    $until = ($until > 1000) ? 1000 : $until; 

    if ($until == 1) {
        return "0";
    } elseif ($until == 2) {
        return "0 <br> 1";
    } elseif ($until == 0) {
        return "You pick zero and you get zero";
    } else {
        $fib = 1;
        $lastFib = 0;
        echo "$lastFib<br>$fib<br>";
        for ($i = 0; $i < $until - 2; $i++) {
            $totalFib = $fib + $lastFib;

            echo number_format($totalFib) . "<br>";

            $lastFib = $fib;
            $fib = $totalFib;
        };
    } 
};

<?php

function posting() {
	$number = filter_var($_GET["number"], FILTER_SANITIZE_NUMBER_INT);
	if ($number > 1000) {
		return "Your requested number is to big, you only get 1000 Fibonacci numbers: <br>";
	}
	return 'Your ' . $number . ' Fibonacci numbers are: <br>';
};


function calculateFib($until) {

	$until = ($until > 1000) ? 1000 : (int)$until;
	$result = [];

	if ($until == 1) {
		array_push($result, 0);
	} elseif ($until == 2) {
		array_push($result, 0, 1);
	} elseif ($until == 0) {
		array_push($result, "You pick zero and you get zero");
	} else {
		$fib = 1;
		$lastFib = 0;
		array_push($result, $lastFib, $fib);

		for ($i = 0; $i < $until - 2; $i++) {
			$totalFib = $fib + $lastFib;

			array_push($result, number_format($totalFib));

			$lastFib = $fib;
			$fib = $totalFib;
		};
	}
	return $result;
};

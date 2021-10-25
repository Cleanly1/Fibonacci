<?php require __DIR__ . "/../view-components/header.php";

$number = filter_var($_GET["number"], FILTER_SANITIZE_NUMBER_INT);
$result = calculateFib($number);

?>

<a class="button" href="/views/home.php">Want new numbers?</a>

<div class="result">
	<?php require __DIR__ . '/../view-components/post.php'; ?>

	<?php foreach ($result as $value) : ?>
		<span class="spans">
			<?= $value  ?>
		</span>
	<?php endforeach; ?>
</div>


<?php require __DIR__ . '/../view-components/footer.php'; ?>
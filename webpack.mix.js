let mix = require("laravel-mix");

if (mix.inProduction()) {
	mix
		.sass("styles/style.scss", "dist/style/style.css")
		.js("scripts/*", "dist/script/script.js");
} else {
	mix
		.sass("styles/style.scss", "dist/style/style.css")
		.js("scripts/*.js", "dist/script/script.js");
}

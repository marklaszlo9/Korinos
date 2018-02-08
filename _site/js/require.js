requirejs.config({
    paths: {
        jquery: "lib/jquery-3.2.1.slim.min.js",
        bootstrap: "lib/bootstrap.min.js",
        modernizr: "lib/modernizr.js",
		placeholder: "lib/placeholder.js",
		fotorama: "lib/fotorama.js",
		app: "lib/app.js" ,
	    popper: "lib/popper.min.js"
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

//Define dependencies and pass a callback when dependencies have been loaded
require(["jquery", "bootstrap","modernizr", "placeholder", "fotorama", "app", "popper"], function ($) {
    //Bootstrap and jquery are ready to use here
    //Access jquery and bootstrap plugins with $ variable
});
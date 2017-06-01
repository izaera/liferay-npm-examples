'use strict';

var gulp = require('gulp');

require('liferay-gulp-packager').attach(gulp, {
	nodeGlobals: {
		//
		// Shim references to process.env.NODE_ENV used by React.
		//
		// We could also use the isomorphic shimming facilities provided by
		// liferay-gulp-packager, but it is not worth the effort just for one
		// variable, as it forces you to deploy liferay-node-shims and that would
		// make deployment of this bundle more complex.
		//
		process: "var process = {env:{NODE_ENV: 'production'}};",
	},
});

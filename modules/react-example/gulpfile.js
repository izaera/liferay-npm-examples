'use strict';

var gulp = require('gulp');

require('liferay-gulp-packager').attach(gulp, {
	nodeGlobals: {
		// Avoid shimming of process global variable (we do it by hand in view.jsp)
		process: null,
	},
});

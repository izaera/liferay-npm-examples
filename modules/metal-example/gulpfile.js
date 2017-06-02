'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');

require('gulp-metal').registerTasks({
	taskPrefix: 'metal:',
	soySrc: './src/main/resources/META-INF/resources/**/*.soy',
	soyDest: './src/main/resources/META-INF/resources',
});

require('liferay-gulp-packager').attach(gulp, {
	nodeGlobals: {
		setImmediate: null,
	},
});

gulp.task('create-soy-files', ['metal:soy'], function() {
	return gulp
		.src('./src/main/resources/META-INF/resources/**/*.soy.js')
		.pipe(
			rename({
				extname: '.es.js',
			})
		)
		.pipe(gulp.dest('./src/main/resources/META-INF/resources'));
});

// Make lr:transpileProject task depend on create-soy-files so that SOY
// generated files are created before the project is transpiled.
gulp.tasks['lr:transpileProject'].dep.push('create-soy-files');

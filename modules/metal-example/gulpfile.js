'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');

require('gulp-metal').registerTasks({
	taskPrefix: 'metal:',
	soySrc: './src/main/resources/META-INF/resources/**/*.soy',
	soyDest: './src/main/resources/META-INF/resources',
});

require('liferay-gulp-packager').attach(gulp, {
	task: null,
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

gulp.task('default', () => runSequence('create-soy-files', 'lr:build'));

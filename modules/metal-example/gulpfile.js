'use strict';

var gulp = require('gulp');

require('gulp-metal').registerTasks({
	taskPrefix: 'metal:',
	soySrc: './src/main/resources/META-INF/resources/**/*.soy',
	soyDest: './src/main/resources/META-INF/resources',
});

gulp.task('create-soy-files', ['metal:soy'], function() {
	return gulp
		.src('./src/main/resources/META-INF/resources/**/*.soy.js')
		.pipe(gulp.dest('./src/main/resources/META-INF/resources'));
});

gulp.task('default', ['create-soy-files']);

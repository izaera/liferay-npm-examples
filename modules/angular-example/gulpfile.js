'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var tsc = require('gulp-tsc');

require('liferay-gulp-packager').attach(gulp, {
	task: null,
	// Because the @angular/forms package does not declare all its dependencies in
	// its package.json, we need to inject them during the build so that Liferay
	// loader knows how to resolve them.
	injectedPackageDependencies: {
		'@angular/forms@4.0.3': {
			rxjs: '^5.0.1',
		},
	},
	nodeGlobals: {
		//
		// Shim references to process.env.NODE_ENV used by Angular.
		//
		// We could also use the server shimming facilities provided by
		// liferay-gulp-packager, but it is not worth the effort just for one
		// variable, as it forces you to deploy liferay-node-shims and that would
		// make deployment of this bundle more complex.
		//
		process: "var process = {env:{NODE_ENV: 'production'}};",
	},
});

gulp.task('compile-typescript', () =>
	gulp
		.src(['src/**/*.ts'])
		.pipe(
			tsc({
				target: 'es5',
				module: 'amd',
				moduleResolution: 'node',
				sourceMap: false,
				emitDecoratorMetadata: true,
				experimentalDecorators: true,
				lib: ['es2015', 'dom'],
				noImplicitAny: true,
				suppressImplicitAnyIndexErrors: true,
				typeRoots: ['./node_modules/@types/'],
				pathFilter: { 'main/resources': 'resources/main' },
			})
		)
		.pipe(gulp.dest('build/'))
);

gulp.task('default', () => runSequence('compile-typescript', 'lr:build'));

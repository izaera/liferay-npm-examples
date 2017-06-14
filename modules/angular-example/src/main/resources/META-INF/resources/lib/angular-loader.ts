// Import needed polyfills before application is launched
import 'reflect-metadata';
import 'zone.js';

// Declare Liferay AMD loader
declare var Liferay: any;

// Launch application
export default function() {
	Liferay.Loader.require('liferay-npm-example-angular@1.0.0/lib/main', (main: any) => {
		main.default();
	});
}

var os = require('os');
var path = require('path');
var querystring = require('querystring');
var util = require('util');

module.exports = function(out) {
	out.log('Scheduling code to run on `nextTick`');

	process.nextTick(function() {
		out.log('');
		out.log(
			util.format(
				'Formatted string [%s] and number [%d]',
				'meaning of life',
				42
			)
		);

		out.log('');
		out.log('Number of CPUs: ' + os.cpus().length);
		out.log('Total memory: ' + os.totalmem());
		out.log('OS Type: ' + os.type());
		out.log('Uptime: ' + os.uptime());

		out.log('');
		out.log(
			querystring.stringify({
				an: 'object',
				stringified: 'with querystring module',
			})
		);

		var file = '/usr/local/bin/bash';
		out.log('');
		out.log('File path:    ' + file);
		out.log('  · dirname:  ' + path.dirname(file));
		out.log('  · basename: ' + path.basename(file));
	});
};

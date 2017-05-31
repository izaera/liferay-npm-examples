import isomorphic from 'liferay-npm-examples-isomorphic';

export default function() {
	isomorphic({
		log: function(msg) {
			out.innerHTML += `${msg}\n`;
		},
	});
}

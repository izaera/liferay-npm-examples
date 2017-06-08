import isomorphic from 'liferay-npm-examples-isomorphic';

export default function(out) {
	isomorphic({
		log: function(msg) {
			out.innerHTML += `${msg}\n`;
		},
	});
}

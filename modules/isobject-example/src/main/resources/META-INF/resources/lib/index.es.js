import isArray from 'liferay-npm-examples-isarray';
import isObject from 'liferay-npm-examples-isobject';

export default function render() {
	var t;

	out.innerHTML += 'Calling isArray([]) from index.es.js\n';
	t = isArray([]);
	out.innerHTML += 'which returns ' + t + '\n';

	out.innerHTML += 'Calling isObject([]) from index.es.js\n';
	t = isObject([]);
	out.innerHTML += 'which returns ' + t + '\n';
}

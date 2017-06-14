import $ from 'jquery';

export default function() {
	var el = $('#liferay-npm-example-jquery-root');

	el.html('Hello from jQuery! 👋');
	el.click(() => {
		alert('Cool! 🙌');
	});
}

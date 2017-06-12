<%@ include file="/init.jsp" %>

<aui:script require="liferay-npm-examples-isomorphic@1.2.0">
	var out = document.getElementById('liferay-npm-example-isomorphic-output');

	out.innerHTML += 'Portlet main module loaded.\n';
	out.innerHTML += "Invoking portlet's main module default export.\n";
	out.innerHTML += '\n';

	liferayNpmExamplesIsomorphic120({
		log: function(msg) {
			out.innerHTML += msg + '\n';
		}
	});
</aui:script>

<pre id="liferay-npm-example-isomorphic-output">
</pre>

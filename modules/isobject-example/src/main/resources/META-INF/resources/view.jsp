<%@ include file="/init.jsp" %>

<aui:script require="liferay-npm-example-isobject@1.0.0">
	window.out = document.getElementById('output');

	out.innerHTML += 'Portlet main module loaded.\n';
	out.innerHTML += "Invoking portlet's main module default export.\n";

	liferayNpmExampleIsobject100.default();
</aui:script>

<pre id="output">
</pre>

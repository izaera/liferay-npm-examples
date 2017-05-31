<%@ include file="/init.jsp" %>

<script>
	// Shim process by hand for the example.
	//
	// We could also use the isomorphic shimming facilities provided by the
	// liferay-gulp-packager build process, but they have been disabled on purpose
	// in the gulpfile.js to simplify the example.
	process = {
		env: {
			NODE_ENV: 'production'
		}
	};
</script>

<aui:script require="liferay-npm-example-react@1.0.0">
	liferayNpmExampleReact100.default();
</aui:script>

<div id="root"></div>

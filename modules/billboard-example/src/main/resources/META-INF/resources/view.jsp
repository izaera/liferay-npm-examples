<%@ include file="/init.jsp" %>

<!-- Temporary workaround to obtain the library stylesheets -->
<link rel="stylesheet" href="/o/liferay-npm-example-billboard/node_modules/billboard.js@1.0.1/dist/billboard.css">

<aui:script require="liferay-npm-example-billboard@1.0.0">
	liferayNpmExampleBillboard100.default();
</aui:script>

<hr>

<div id="liferay-npm-example-billboard">
	<h1>An example from billboard.js</h1>

	<h2>Default charts</h2>

	<div id="BarChart"></div>
	<div id="StepChart"></div>
	<div id="LineChart"></div>
	<div id="AreaChart"></div>
	<div id="SplineChart"></div>
	<div id="StackedAreaChart"></div>

	<h2>D3 custom charts</h2>
	<style>
		.links line {
		  stroke: #999;
		  stroke-opacity: 0.6;
		}
		
		.nodes circle {
		  stroke: #fff;
		  stroke-width: 1.5px;
		}
	</style>
	<svg id="D3Graph" width="960" height="600"></svg>
</div>
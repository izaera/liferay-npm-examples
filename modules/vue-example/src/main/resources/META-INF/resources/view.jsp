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

<aui:script require="liferay-npm-example-vue@1.0.0">
	liferayNpmExampleVue100.default();
</aui:script>

<hr>

<div id="app-1">
	<p>A friendly reversible message from Vue.js:</p>
	<p>{{message}}</p>
	<button v-on:click="reverseMessage">Reverse message, pretty please</button>
</div>

<hr>

<div id="app-2">
	<p>A to do list made with Vue.js components:</p>
  <ol>
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id">
    </todo-item>
  </ol>
</div>

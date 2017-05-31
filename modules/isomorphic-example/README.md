# isomorphic-example

This example demonstrates the use of
[isomorphic](http://isomorphic.net/javascript) NPM packages from a portlet.

To make it work after deployment to Liferay Portal, you need to deploy
[Liferay Node.js Shims](https://github.com/izaera/liferay-node-shims) first.
Otherwise this project will not find Node.js globals and/or builtin modules and
will fail with error.

You can also run `node example.js` in this project's folder to execute the code
in the server side.

Please note that this project uses NPM package `liferay-npm-examples-isomorphic`
where the isomorphic code lives. This is because `liferay-gulp-packager` only
supports isomorphic code inside NPM packages, not in the portlet code.

This makes sense because, even if it is useful supporting server NPM packages,
it does not make any sense to write portlet code (which by definition will only
be run in the browser) that uses Node.js APIs.

You can see the isomorphic code at [packages/liferay-npm-examples-isomorphic](https://github.com/izaera/liferay-npm-examples/tree/master/packages/liferay-npm-examples-isomorphic%401.0.0)
directory in this same project.

---

To see this example in action you need to:

1) Deploy [Liferay Node.js Shims](https://github.com/izaera/liferay-node-shims)
   bundle to Liferay Portal.

2) Configure `liferay.workspace.home.dir` in `../../gradle.properties` (set it
   to point to your Liferay Portal `bundles` directory).

3) Run `../../gradlew deploy`.

4) Add a '**Liferay NPM Isomorphic Example**' portlet to your page.

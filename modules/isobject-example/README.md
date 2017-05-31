# isobject-example

This example demonstrates a simple portlet using two NPM packages: `liferay-npm-examples-isobject` (version 2.1.0+) and
`liferay-npm-examples-isarray` (version 2.0.1+).

At the same time, the `liferay-npm-examples-isobject` relies on `liferay-npm-examples-isarray` (version 1.0.0) so this example shows how each
caller gets the correct version of `liferay-npm-examples-isarray`.

---

To see this example in action you need to:

1) Configure `liferay.workspace.home.dir` in `../../gradle.properties` (set it
   to point to your Liferay Portal `bundles` directory).

2) Run `../../gradlew deploy`.

3) Add a '**Liferay NPM isObject Example**' portlet to your page.

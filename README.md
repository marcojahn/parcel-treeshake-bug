steps to reproduce

```
npm install
npm run build:treeshake
```

The following error will appear

```
$ npm run build:treeshake

> parcel-treeshake-bug@0.0.1 build:treeshake /Users/mjahn/Projects/cc/parcel-treeshake-bug
> rimraf ./dist && parcel build --experimental-scope-hoisting ./src/index.html

🚨  ../node_modules/dom-align/dist-web/index.js does not export 'alignElement'
    at replaceExportNode (/Users/mjahn/Projects/cc/parcel-treeshake-bug/node_modules/parcel-bundler/src/scope-hoisting/concat.js:54:13)
    at ReferencedIdentifier (/Users/mjahn/Projects/cc/parcel-treeshake-bug/node_modules/parcel-bundler/src/scope-hoisting/concat.js:317:20)
    at newFn (/Users/mjahn/Projects/cc/parcel-treeshake-bug/node_modules/@babel/traverse/lib/visitors.js:230:17)
    at NodePath._call (/Users/mjahn/Projects/cc/parcel-treeshake-bug/node_modules/@babel/traverse/lib/path/context.js:53:20)
    at NodePath.call (/Users/mjahn/Projects/cc/parcel-treeshake-bug/node_modules/@babel/traverse/lib/path/context.js:40:17)
    at NodePath.visit (/Users/mjahn/Projects/cc/parcel-treeshake-bug/node_modules/@babel/traverse/lib/path/context.js:88:12)
    at TraversalContext.visitQueue (/Users/mjahn/Projects/cc/parcel-treeshake-bug/node_modules/@babel/traverse/lib/context.js:118:16)
    at TraversalContext.visitSingle (/Users/mjahn/Projects/cc/parcel-treeshake-bug/node_modules/@babel/traverse/lib/context.js:90:19)
    at TraversalContext.visit (/Users/mjahn/Projects/cc/parcel-treeshake-bug/node_modules/@babel/traverse/lib/context.js:146:19)
    at Function.traverse.node (/Users/mjahn/Projects/cc/parcel-treeshake-bug/node_modules/@babel/traverse/lib/index.js:94:17)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! parcel-treeshake-bug@0.0.1 build:treeshake: `rimraf ./dist && parcel build --experimental-scope-hoisting ./src/index.html`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the parcel-treeshake-bug@0.0.1 build:treeshake script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/mjahn/.npm/_logs/2019-09-03T06_15_03_866Z-debug.log
```

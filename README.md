Webpack Strip Assert
====================

Simple [Webpack](http://webpack.github.io/) loader to strip assert statements from your code. This can be useful if you want to use assert statements to provide warnings to developers before they cause bugs later in their code while allowing the code to continue executing in production without throwing errors.

###Example:

In your client js source files:

```javascript

var assert = require('assert').ok
var Bar = require('Bar');

var makeFoo = function (bar, baz) {
    // The following two lines of code will be stripped with our webpack loader
    assert(bar instanceof Bar, 'bar param must be instance of Bar');
    assert(baz.isOK(), 'baz is not ok!');
    // This code would remain
    return new Foo(bar, baz);
};

```

In your webpack config:

```javascript
{
    module: {
        loaders: [
            { test: /\.js$/, loader: "webpack-strip-assert" }
        ]
    }
};
```
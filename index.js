/*jslint node:true */
"use strict";

function StripAssertCallsLoader(content) {

    this.regexPattern = /\n[ \t]*assert\([^\);]+\);?[ \t]*\n/g;

    content = content.replace(this.regexPattern, '\n');

    this.callback(null, content);

}

module.exports = StripAssertCallsLoader;
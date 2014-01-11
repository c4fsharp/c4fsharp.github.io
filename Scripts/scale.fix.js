;(function (factory) {
    var root = this;
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'document', 'navigator'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(exports, require('document'), require('navigator'));
    } else {
        // Browser globals
        factory((root.commonJsStrict = {}), root.document, root.navigator);
    }
}.call(this, function (exports, document, navigator, undefined) {
    var metas = document.getElementsByTagName('meta'),
        i;

    function gestureStart() {
        for (i=0; i<metas.length; i++) {
            if (metas[i].name == "viewport") {
                metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
            }
        }
    }

    if (navigator.userAgent.match(/iPhone/i)) {
        for (i=0; i<metas.length; i++) {
            if (metas[i].name == "viewport") {
                metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
            }
        }
        document.addEventListener("gesturestart", gestureStart, false);
    }
}));

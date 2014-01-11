; (function (factory) {
    'use strict';

    var root = this;
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'document', 'navigator', 'jQuery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(exports, require('document'), require('navigator'), require('jQuery'));
    } else {
        // Browser globals
        factory((root.commonJsStrict = {}), root.document, root.navigator, root.jQuery);
    }
}.call(this, function (window, document, navigator, $, undefined) {
    'use strict';

    /*!
     * Copyright 2013 Twitter, Inc.
     *
     * Licensed under the Creative Commons Attribution 3.0 Unported License. For
     * details, see http://creativecommons.org/licenses/by/3.0/.
     */

    // IE10 viewport hack for Surface/desktop Windows 8 bug
    //
    // See Getting Started docs for more information
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }

    var $window = $(window),
        $body = $(document.body),
        navHeight = $('.navbar').outerHeight(true) + 10;

    $body.scrollspy({
        target: '.c4-sidebar',
        offset: navHeight
    });

    $window.on('load', function () {
        $body.scrollspy('refresh');
    });
}));

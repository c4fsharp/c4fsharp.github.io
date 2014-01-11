; (function (factory) {
    var root = this;

}.call(this, function (window, document, navigator, $, undefined) {
    // IE10 viewport hack for Surface/desktop Windows 8 bug
    //
    // See Getting Started docs for more information
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }

    var $window = $(window),
        $body = $(body),
        navHeight = $('.navbar').outerHeight(true) + 10;

    $body.scrollspy({
        target: '.c4-sidebar',
        offset: navHeight
    });

    $window.on('load', function () {
        $body.scrollspy('refresh');
    });
}));

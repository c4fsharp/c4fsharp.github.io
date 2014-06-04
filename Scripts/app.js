; (function (factory) {
    "use strict";

    var root = this;
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'document', 'navigator', 'jQuery', 'jstz', 'angular'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(exports, require('document'), require('navigator'), require('jQuery'), require('jstz'), require('angular'));
    } else {
        // Browser globals
        factory((root.commonJsStrict = {}), root.document, root.navigator, root.jQuery, root.jstz, root.angular);
    }
}.call(this, function (window, document, navigator, $, jstz, angular, undefined) {
    'use strict';

    var timezone = jstz.determine(),
    	tzname = timezone.name();

    $(document).ready(function () {
        var calurl = "https://www.google.com/calendar/embed?showTitle=0&showPrint=0&showCalendars=0&mode=AGENDA&height=600&wkst=1&bgcolor=%23FFFFFF&src=n1bhbfnd2uvh807a2vr7s0ar1g@group.calendar.google.com&color=%23711616&ctz=" + tzname;
        $('#agenda_frame').attr('src', calurl);
    });

    var app = angular.module('c4fsharp', ['ui.router']);

    app.config(
        ['$stateProvider',
         '$urlRouterProvider',
         function ($stateProvider, $urlRouterProvider) {
             $stateProvider.state('main',   { url: '/',   templateUrl: 'main.html' });
             $stateProvider.state('groups', { url: '/groups', templateUrl: 'groups.html' });
             $stateProvider.state('events', { url: '/events', templateUrl: 'events.html' });
             $urlRouterProvider.otherwise('/');
        }]);

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

    // back to top
    setTimeout(function () {
        var $sideBar = $('.c4-sidebar');

        $sideBar.affix({
            offset: {
                top: function () {
                    var offsetTop = $sideBar.offset().top,
                        sideBarMargin = parseInt($sideBar.children(0).css('margin-top'), 10),
                        navOuterHeight = $('.c4-docs-nav').height();

                    return (this.top = offsetTop - navOuterHeight - sideBarMargin);
                },
                bottom: function () {
                    return (this.bottom = $('.c4-footer').outerHeight(true));
                }
            }
        });
    }, 100);
}));

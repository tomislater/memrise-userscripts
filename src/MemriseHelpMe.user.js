// ==UserScript==
// @name           Memrise Help Me
// @namespace      https://github.com/tomislater
// @description    If you click on the input, you will see a hint
// @match          http://www.memrise.com/course/*/garden/review/*
// @match          http://www.memrise.com/course/*/garden/audio/review/*
// @version        1.0.0
// @updateURL      https://github.com/tomislater/memrise-userscripts/raw/master/MemriseHelpMe.user.js
// @downloadURL    https://github.com/tomislater/memrise-userscripts/raw/master/MemriseHelpMe.user.js
// @grant          none
// ==/UserScript==

$('body').on('click', function(e) {
    try {
        if ($(e.target).is('input')) {
            var box = MEMRISE.garden.box;
            var input = box.$input;
            var word = box.thing.columns[1].val;

            input.val(input.val() + word[input.val().length]);
        }
    } catch (err) {
        console.log('error', err);
    }
});

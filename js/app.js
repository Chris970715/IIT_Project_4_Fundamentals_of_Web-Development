/* global jQuery */
// app.js - Gyubum Kim's resume (Project 4)
// Starts Foundation's JavaScript plugins and adds a few small touches.

(function ($) {
  'use strict';

  var root = document.documentElement;

  // JavaScript is running, so app.css can switch off its no-JavaScript fallbacks
  root.classList.remove('no-js');
  root.classList.add('js');

  // Start every Foundation plugin on the page (Magellan and Orbit)
  $(document).foundation();
}(jQuery));

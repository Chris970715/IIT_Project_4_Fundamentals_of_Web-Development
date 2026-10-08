/* global jQuery */
// app.js - Gyubum Kim's resume (Project 4)
// Starts Foundation's JavaScript plugins and adds a few small touches.

(function ($) {
  'use strict';

  var root = document.documentElement;
  var header = document.querySelector('.site-header');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var resizeTimer;

  // JavaScript is running, so app.css can switch off its no-JavaScript fallbacks
  root.classList.remove('no-js');
  root.classList.add('js');

  // Start every Foundation plugin on the page (Magellan and Orbit)
  $(document).foundation();

  // Height of the navigation bar while it sticks to the top of the screen
  // (from 40em up). On phones the bar scrolls away, so the answer is 0.
  function stickyNavHeight() {
    if (header && window.getComputedStyle(header).position === 'sticky') {
      return header.offsetHeight;
    }
    return 0;
  }

  // Magellan scrolls to a section when a menu link is clicked and highlights
  // the link for the section on screen. Telling it the sticky bar's height
  // keeps section headings from ending up hidden under the bar.
  var magellan = $('[data-magellan]').data('zfPlugin');

  if (magellan) {
    magellan.options.offset = stickyNavHeight();

    // Jump straight to the section for visitors who ask for reduced motion
    if (reduceMotion) {
      magellan.options.animationDuration = 0;
    }

    // Images and fonts change the page's height after Magellan first measures
    // it, so measure the section positions again once everything has loaded
    $(window).on('load', function () {
      magellan.reflow();
    });

    // Magellan only updates the highlighted link when the page scrolls, and it
    // ignores scrolling during its own animation. When the last section is too
    // short to reach the top of the screen, the animation stops at the bottom
    // of the page and the Education link would never light up. So check again
    // once the animation has finished.
    $('[data-magellan]').on('click', 'a[href^="#"]', function () {
      setTimeout(function () {
        magellan.reflow();
      }, magellan.options.animationDuration + 50);
    });

    // The bar's height changes with the screen width, so measure it again
    $(window).on('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        magellan.options.offset = stickyNavHeight();
        magellan.reflow();
      }, 200);
    });
  }

  // Keep the copyright year in the footer current
  var year = document.querySelector('.year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}(jQuery));

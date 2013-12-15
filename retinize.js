/*!
 * retinize.js v0.1.0 - Retinize will upscale (using nearest neighbor) images to look correctly on retina screens.
 * Copyright (c) 2013 Matthew Callis - https://github.com/MatthewCallis/retinize
 * License: MIT
 */
(function(global) {
  'use strict';
  /**
   * @constructor
   * @param {DOMElement} element the image element
   * @param {Object} options options for the widget
   */
  function Retinize(element, options){
    options = options || Retinize.options;

    this.element     = element;
    this.forceCanvas = options.offset;
    this.browser     = { chrome: false, mozilla: false, opera: false, msie: false, safari: false };
  }
  Retinize.prototype = {
    constructor : Retinize,
    /**
     * Initialises the widget
     */
    init: function(){
      // Return if we don't support devicePixelRatio
      if(!window.devicePixelRatio){
        return;
      }
      // Return if we don't need retina support
      if(window.devicePixelRatio === 1){
        return;
      }
      if(!this.element){
        return;
      }
      // Browser support
      var ua = navigator.userAgent;
      for(var c in this.browser){
        this.browser[c] = ((new RegExp(c, 'i').test(ua))) ? true : false;
        if(this.browser.mozilla && c === 'mozilla'){
          this.browser.mozilla = ((new RegExp('firefox', 'i').test(ua))) ? true : false;
        }
        if(this.browser.chrome && c === 'safari'){
          this.browser.safari = false;
        }
      }
      // Actually convert or style the elements.
      for(var i = 0, l = this.element.length; i < l; i++){
        if(this.forceCanvas === true || this.browser.mozilla || this.browser.chrome){
          this.convertToCanvas(this.element[i]);
        }
        else{
          if(this.browser.safari){
            this.element[i].style['image-rendering'] = '-webkit-optimize-contrast';
            this.element[i].style['image-rendering'] = 'pixelated';
          }
        }
      }
    },
    /**
     * Converts the image to a canvas element
     */
    convertToCanvas: function(el){
      var canv = document.createElement('canvas');
      canv.id = el.id;
      canv.title = el.title;
      canv.alt = el.alt;
      canv.className = el.className;

      canv.width  = el.width  * window.devicePixelRatio;
      canv.height = el.height * window.devicePixelRatio;
      canv.style.width  = el.width  + "px";
      canv.style.height = el.height + "px";

      var ctx = canv.getContext("2d");
      ctx.imageSmoothingEnabled       = false;
      ctx.mozImageSmoothingEnabled    = false;
      ctx.webkitImageSmoothingEnabled = false;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      ctx.drawImage(el, 0, 0);

      el.parentNode.replaceChild(canv, el);
    }
  };
  /**
   * Default options
   * @type {Object}
   */
  Retinize.options = {
    forceCanvas : false
  };
  global.Retinize = Retinize;
}(this));

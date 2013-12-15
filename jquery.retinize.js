/*!
 * retinize.js v0.1.0 - Retinize will upscale (using nearest neighbor) images to look correctly on retina screens.
 * Copyright (c) 2013 Matthew Callis - https://github.com/MatthewCallis/retinize
 * License: MIT
 */
 ;(function($, window, document, undefined){
  var pluginName = "retinize",
      defaults = {
        forceCanvas: false
      };

  function Retinize(element, options){
    this.element = element;

    this.options = $.extend( {}, defaults, options );

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  Retinize.prototype = {
    init: function(){
      if(!window.devicePixelRatio){
        return;
      }
      if(window.devicePixelRatio === 1){
        return;
      }
      if(!$.browser){
        $.browser = { chrome: false, mozilla: false, opera: false, msie: false, safari: false };
        var ua = navigator.userAgent;
        $.each($.browser, function(c, a){
          $.browser[c] = ((new RegExp(c, 'i').test(ua))) ? true : false;
          if($.browser.mozilla && c === 'mozilla'){
            $.browser.mozilla = ((new RegExp('firefox', 'i').test(ua))) ? true : false;
          }
          if($.browser.chrome && c === 'safari'){
            $.browser.safari = false;
          }
        });
      }
      if(this.options.forceCanvas === true || $.browser.mozilla || $.browser.chrome){
        this.convertToCanvas(this.element);
      }
      else{
        if($.browser.safari){
          $(this).css({ 'image-rendering': '-webkit-optimize-contrast' }).css({ 'image-rendering': 'pixelated' });
        }
      }
    },
    convertToCanvas: function(el){
      var canv = document.createElement('canvas');
      canv.id = el.id;
      $(canv).addClass($(el).attr('class')).attr('title', $(el).attr('title'));

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

  $.fn[pluginName] = function(options){
    return this.each(function(){
      if(!$.data(this, "plugin_" + pluginName)){
        $.data(this, "plugin_" + pluginName, new Retinize(this, options));
      }
    });
  };
})(jQuery, window, document);

class Retinize {

  constructor (element, options = {}) {
    // Return unless we have an element
    if(!element){
      return;
    }

    let defaults = {
      forceCanvas : false
    };
    options = options || defaults;
    let browser     = { chrome: false, mozilla: false, opera: false, msie: false, safari: false };

    // Return if we don't support devicePixelRatio
    if(!window.devicePixelRatio && !options.forceCanvas){
      return;
    }
    // Return if we don't need retina support
    if(window.devicePixelRatio === 1 && !options.forceCanvas){
      return;
    }
    // Browser support
    let ua = navigator.userAgent;
    for(let c in browser){
      browser[c] = ((new RegExp(c, 'i').test(ua))) ? true : false;
      if(browser.mozilla && c === 'mozilla'){
        browser.mozilla = ((new RegExp('firefox', 'i').test(ua))) ? true : false;
      }
      if(browser.chrome && c === 'safari'){
        browser.safari = false;
      }
    }
    // Actually convert or style the element.
    if(options.forceCanvas || browser.mozilla || browser.chrome){
      this.convertToCanvas(element);
    }
    else{
      if(browser.safari){
        element.style['image-rendering'] = '-webkit-optimize-contrast';
        element.style['image-rendering'] = 'pixelated';
      }
    }
  }

  convertToCanvas (el) {
    let canv = document.createElement('canvas');
    canv.id = el.id;
    canv.title = el.title;
    canv.alt = el.alt;
    canv.className = el.className;

    canv.width  = el.width  * window.devicePixelRatio;
    canv.height = el.height * window.devicePixelRatio;
    canv.style.width  = el.width  + "px";
    canv.style.height = el.height + "px";

    let ctx = canv.getContext("2d");
    ctx.imageSmoothingEnabled       = false;
    ctx.mozImageSmoothingEnabled    = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.drawImage(el, 0, 0);

    el.parentNode.replaceChild(canv, el);
  }
}

# Retinize

[Retinize](https://github.com/MatthewCallis/retinize) will upscale (using nearest neighbor) images to look correctly on retina screens. This is particularly useful for pixel art when you don't want to store an upscaled version. Here's a [demo](http://jsfiddle.net/matthewcallis/hrMeA/).

## Update 2016
The blurring issue has been mostly resolved with CSS now, so this is only really needed if you need older browser support or just want use a canvas anyway.

Use the below:
```css
canvas, img {
    image-rendering: optimizeSpeed;
    image-rendering: -o-crisp-edges;
    image-rendering: -moz-crisp-edges;
    image-rendering: optimize-contrast;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: pixelated; /* CSS4 */
    image-rendering: crisp-edges; /* CSS4 */
    -ms-interpolation-mode: nearest-neighbor; /* IE */
}
```

## How to Use

### Vanilla JavaScript

```javascript
// Construct an instance of Retinize, passing the element
var el = document.querySelectorAll("img.pixelart");
var retinize  = new Retinize(el);
// Initialise
retinize.init();
```

### jQuery

To enable on all images with the class of 'retinize' simply call

```javascript
$('img.retinize').retinize();
```

If you want to force the effect on all images reguardless of need use

```javascript
$('img.retinize').retinize({ forceCanvas: true });
```

All available settings

```javascript
var options = {
  forceCanvas: false
};
```

## Change Log

*    0.1.0: Initial Commit

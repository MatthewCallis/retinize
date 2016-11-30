# Retinize

[![Dependency Status](https://david-dm.org/MatthewCallis/retinize.svg)](https://david-dm.org/MatthewCallis/retinize)
[![devDependency Status](https://david-dm.org/MatthewCallis/retinize/dev-status.svg?style=flat)](https://david-dm.org/MatthewCallis/retinize#info=devDependencies)
[![git-brag-stats](https://labs.turbo.run/git-brag?user=MatthewCallis&repo=retinize&maxn=8)](https://github.com/turbo/git-brag)


[Retinize](https://github.com/MatthewCallis/retinize) will upscale (using nearest neighbor) images to look correctly on retina screens. This is particularly useful for pixel art when you don't want to store an upscaled version. Here's a [demo](http://jsfiddle.net/matthewcallis/hrMeA/).

# Update 2016
The blurring issue has been mostly resolved with CSS now. The jQuery version remains the same, but this is only really needed if you need older browser support or just want use a canvas anyway so the class is canvas only.

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
```

```javascript
// Construct an instance of Retinize, passing the element
var el = document.querySelector("img#pixelart");
Retinize.convertToCanvas(el);
```

### jQuery

To enable on all images with the class of 'retinize' simply call

```javascript
$('img.retinize').retinize();
```

If you want to force the effect on all images regardless of need use

```javascript
$('img.retinize').retinize({ forceCanvas: true });
```

All available settings

```javascript
var options = {
  forceCanvas: false
};
```

# Retinize

[Retinize](https://github.com/MatthewCallis/retinize) will upscale (using nearest neighbor) images to look correctly on retina screens. This is particularly useful for pixel art when you don't want to store an upscaled version.

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

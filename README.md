# Retinize

[Retinize](https://github.com/MatthewCallis/retinize) will upscale (using nearest neighbor) images to look correctly on retina screens. This is particularly useful for pixel art when you don't want to store an upscaled version.

## How to Use

To enable on all images with the class of 'retinize' simply call

    $('img.retinize').retinize();

If you want to force the effect on all images reguardless of need use

    $('img.retinize').retinize({ forceCanvas: true });

All available settings

    var options = {
      forceCanvas: false
    };

## Change Log

*    0.1.0: Initial Commit

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Retinize = function () {
  function Retinize(element) {
    _classCallCheck(this, Retinize);

    // Return unless we have an element
    if (!element || element === '') {
      return;
    }

    var elements = [];
    if (typeof element === 'string') {
      elements = document.querySelectorAll('div');
    } else {
      elements.push(element);
    }

    [].forEach.call(elements, function (node) {
      Retinize.convertToCanvas(node);
    });
  }

  _createClass(Retinize, null, [{
    key: 'convertToCanvas',
    value: function convertToCanvas(element) {
      var canvas = document.createElement('canvas');
      canvas.id = element.id;
      canvas.title = element.title;
      canvas.alt = element.alt;
      canvas.className = element.className;

      canvas.width = element.width * window.devicePixelRatio;
      canvas.height = element.height * window.devicePixelRatio;
      canvas.style.width = element.width + 'px';
      canvas.style.height = element.height + 'px';

      var context = canvas.getContext('2d');
      context.imageSmoothingEnabled = false;
      context.mozImageSmoothingEnabled = false;
      context.webkitImageSmoothingEnabled = false;
      context.scale(window.devicePixelRatio, window.devicePixelRatio);
      context.drawImage(element, 0, 0);

      element.parentNode.replaceChild(canvas, element);
    }
  }]);

  return Retinize;
}();
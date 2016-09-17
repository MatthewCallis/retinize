class Retinize {
  constructor(element) {
    // Return unless we have an element
    if (!element || element === '') {
      return;
    }

    let elements = [];
    if (typeof element === 'string') {
      elements = document.querySelectorAll('div');
    } else {
      elements.push(element);
    }

    [].forEach.call(elements, (node) => {
      Retinize.convertToCanvas(node);
    });
  }

  static convertToCanvas(element) {
    const canvas = document.createElement('canvas');
    canvas.id = element.id;
    canvas.title = element.title;
    canvas.alt = element.alt;
    canvas.className = element.className;

    canvas.width = element.width * window.devicePixelRatio;
    canvas.height = element.height * window.devicePixelRatio;
    canvas.style.width = `${element.width}px`;
    canvas.style.height = `${element.height}px`;

    const context = canvas.getContext('2d');
    context.imageSmoothingEnabled = false;
    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.scale(window.devicePixelRatio, window.devicePixelRatio);
    context.drawImage(element, 0, 0);

    element.parentNode.replaceChild(canvas, element);
  }
}

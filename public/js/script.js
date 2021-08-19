const customEventsHandler = {
  haltEventListeners: [
    'touchcancel',
    'touchend',
    'touchleave',
    'touchmove',
    'touchstart',
  ],
  init: function ({ instance, svgElement }) {
    let initialScale = 1;
    let pannedX = 0;
    let pannedY = 0;

    // Listen only for pointer and touch events
    this.hammer = new Hammer(svgElement, {
      inputClass: Hammer.SUPPORT_POINTERS_EVENTS
        ? Hammer.PointerEventInput
        : Hammer.TouchInput,
    });

    this.hammer.get('pinch').set({ enable: true });

    this.hammer.on('doubletab', () => instance.zoomIn());

    this.hammer.on('panstart panmove', (event) => {
      if (event.type === 'panstart') {
        pannedX = 0;
        pannedY = 0;
      }

      instance.panBy({
        x: event.deltaX - pannedX,
        y: event.deltaY - pannedY,
      });

      pannedX = event.deltaX;
      pannedY = event.deltaY;
    });

    this.hammer.on('pinchstart pinchmove', (event) => {
      if (event.type === 'pinchstart') {
        initialScale = instance.getZoom();
      }

      instance.zoomAtPoint(initialScale * event.scale, {
        x: event.center.x,
        y: event.center.y,
      });
    });

    // Prevent moving the page on some devices when panning over SVG
    svgElement.addEventListener('touchmove', (event) => event.preventDefault());
  },
  destroy: function () {
    this.hammer.destroy();
  },
};

svgPanZoom('#svg', {
  center: 1,
  controlIconsEnabled: false,
  customEventsHandler,
  fit: 1,
  zoomEnabled: true,
});

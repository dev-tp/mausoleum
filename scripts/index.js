(function () {
  function setLink(elem) {
    if (elem.dataset.link) {
      elem.onclick = function () {
        window.open(elem.dataset.link, '_self');
      };
    }
  }

  document.querySelectorAll('.section').forEach(setLink);
  document.querySelectorAll('text').forEach(setLink);

  document.querySelectorAll('.options').forEach(function (elem) {
    elem.onclick = function (event) {
      event.stopPropagation();

      const menuElem = document.getElementById('menu');

      if (!menuElem.elem || menuElem.elem != elem) {
        const options = this.dataset.links.split(',');

        menuElem.style.display = 'block';
        menuElem.style.left = `${event.clientX}px`;
        menuElem.style.top = `${event.clientY}px`;

        menuElem.innerHTML = this.dataset.options.split(',').map(function (token, i) {
          return `<a href="${options[i]}">${token}</a>`;
        }).join('');

        menuElem.elem = elem;
      }
    };
  });

  document.body.onclick = function () {
    const menuElem = document.getElementById('menu');

    if (menuElem.style.display == 'block') {
      menuElem.elem = null;
      menuElem.style.display = 'none';
    }
  };
})();

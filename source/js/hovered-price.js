export function onButtonPriceHover() {
  const priceButtons = document.querySelectorAll('.price__button');

  priceButtons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      const priceItem = button.closest('.price__item');
      if (priceItem) {
        priceItem.classList.add('hovered');
      }
    });

    button.addEventListener('mouseleave', () => {
      const priceItem = button.closest('.price__item');
      if (priceItem) {
        priceItem.classList.remove('hovered');
      }
    });
  });
}


export function onButtonPriceActive() {
  const priceButtons = document.querySelectorAll('.price__button');

  priceButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const priceItem = button.closest('.price__item');
      const isActive = button.classList.contains('price__button--active');

      if (priceItem) {
        if (isActive) {
          priceItem.classList.add('activated');
        } else {
          priceItem.classList.remove('activated');
        }
      }
    });
  });
}

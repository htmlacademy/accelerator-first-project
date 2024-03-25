export function initPrice() {
  const tabsButtons = document.querySelectorAll('.price__tab');

  tabsButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const prevActiveItem = document.querySelector('.price__list.price__list--active');
      const prevActiveButton = document.querySelector('.price__tab.price__tab--active');

      if (prevActiveButton) {
        prevActiveButton.classList.remove('price__tab--active');
      }

      if (prevActiveItem) {
        prevActiveItem.classList.remove('price__list--active');
      }

      const nextActiveItemId = `#${button.getAttribute('data-tab')}`;
      const nextActiveItem = document.querySelector(nextActiveItemId);

      button.classList.add('price__tab--active');
      nextActiveItem.classList.add('price__list--active');
    });
  });
}

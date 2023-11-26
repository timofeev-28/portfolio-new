const navigation = document.querySelector('[data-burger="nav"]');
const burger = document.querySelector('[data-burger="burger"]');
const menuLinks = document.querySelectorAll('[data-burger="nav-js"]');

// закрытие бургера по клику на ссылки
const burgerRemoveActive = () => {
  burger.classList.remove('burger--active');
  navigation.classList.remove('navigation--active');
  document.body.classList.remove('stop-scroll');
  document.removeEventListener('click', documentClickHendler);
  closeBurgerLinksRemove();
};

// закрытие бургера
function documentClickHendler(event) {
  if (!event.target.closest('.navigation--active') && !event.target.closest('.burger--active')) {
    burgerRemoveActive();
  }
}

const linksClickHandler = () => {
  burgerRemoveActive();
};

// при клике на любую из ссылок бургер закрывается
const closeBurgerLinksAdd = () => {
  menuLinks.forEach((link) => {
    link.addEventListener('click', linksClickHandler);
  });
};

// удаляется слушатель событий при клике на ссылки бургера
function closeBurgerLinksRemove() {
  menuLinks.forEach((link) => {
    link.removeEventListener('click', linksClickHandler);
  });
}

// обработчик событий при клике на бургер
const burgerClickHandler = () => {
  burger.classList.toggle('burger--active');
  navigation.classList.toggle('navigation--active');
  document.body.classList.toggle('stop-scroll');

  if (burger.closest('.burger--active')) {
    document.addEventListener('click', documentClickHendler);
    closeBurgerLinksAdd();
  } else {
    document.removeEventListener('click', documentClickHendler);
    closeBurgerLinksRemove();
  }
};

const initBurger = () => {
  if (navigation && burger) {
    burger.addEventListener('click', burgerClickHandler);
  }
};

export {initBurger};

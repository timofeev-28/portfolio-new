import {initModals} from './modules/modals/init-modals';
import {iosVhFix} from './utils/ios-vh-fix';
import {initBurger} from './modules/init/init-burger';
import {initDropdown} from './modules/init/init-dropdown';
import {initDropdownFooter} from './modules/init/init-dropdown-footer';
import {initCertificatesSlider} from './modules/init/init-swiper-certificates';
import {getNumber} from './modules/init/number-game';
import {initTabs} from './modules/init/init-tabs-works';
import {createGameCells} from './modules/init/cells-game';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initBurger();
    initDropdown();
    initDropdownFooter();
    initCertificatesSlider();
    getNumber();
    initTabs();
    createGameCells();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

const footer = document.querySelector('.footer');
const linkNav = footer.querySelector('[data-dropdown="link-nav"]');
const dropdown = footer.querySelector('[data-dropdown="dropdown"]');
const linksWorks = footer.querySelectorAll('[data-dropdown="dropdown-link"]');

const documentClickHendler = (event) => {
  if (!event.target.closest('.is-active')) {
    linkNav.classList.remove('is-active');
    dropdown.classList.remove('is-active');
  }
};

const linkClickHandler = (event) => {
  event.preventDefault();
  linkNav.classList.toggle('is-active');
  dropdown.classList.toggle('is-active');

  if (linkNav.closest('.is-active')) {
    document.addEventListener('click', documentClickHendler);
  } else {
    document.removeEventListener('click', documentClickHendler);
  }
};

const linksClickHandler = () => {
  linkNav.classList.toggle('is-active');
  dropdown.classList.toggle('is-active');
};

const closeDropdown = () => {
  linksWorks.forEach((link) => {
    link.addEventListener('click', linksClickHandler);
  });
};

const initDropdownFooter = () => {
  if (linkNav && dropdown) {
    linkNav.addEventListener('click', linkClickHandler);
    closeDropdown();
  }
};

export {initDropdownFooter};

window.addEventListener('DOMContentLoaded', windowEventHandler);
/**
 * window event handler
 */
function windowEventHandler() {
  const backIcon = document.getElementById('back-icon');
  const drawerIcon = document.getElementById('drawer-icon');
  const backIconTopNav = document.getElementById('back-icon-top-nav');
  const searchIcon = document.getElementById('search-icon-mobile');
  const searchInputDeskTop = document.getElementById('search-desktop');
  const searchInputMobile = document.getElementById('search-mobile');
  const searchIconDesktop = document.getElementById('search-icon-desktop');
  const searchIconMobile = document.getElementById('search-icon-mobile-button');
  const moreInfo = document.querySelectorAll('.more-info');
  const bookInfo = document.querySelectorAll('.book-details-carousel');
  const cancelIcon = document.querySelectorAll('.cancel-icon');
  const bookStatus = document.querySelectorAll('.book-status');
  const elem = document.querySelector('.main-carousel');
  const flkty = new Flickity(elem, {
    cellAlign: 'left',
    freeScroll: true,
    wrapAround: true,
  });
  backIcon.addEventListener('click', toggleSideNav);
  drawerIcon.addEventListener('click', toggleSideNav);
  backIconTopNav.addEventListener('click', toggleGoBackTopNav);
  searchIcon.addEventListener('click', toggleGoBackTopNav);
  searchInputDeskTop.addEventListener('input', diplaySearchResult);
  searchInputDeskTop.addEventListener('blur', closeSearchResult);
  searchInputMobile.addEventListener('input', diplaySearchResultMobile);
  searchInputMobile.addEventListener('blur', closeMobileSearchResult);
  searchIconDesktop.addEventListener('click', closeSearchResult);
  searchIconMobile.addEventListener('click', closeMobileSearchResult);
  moreInfo.forEach((moreInfoButton, index, moreInfoButtons) => {
    moreInfoButton.addEventListener('click', () =>
      toggleBookInfo(index, bookInfo, moreInfoButtons, cancelIcon)
    );
  });
  cancelIcon.forEach((cancelIconButton, index, cancelIconButtons) => {
    cancelIconButton.addEventListener('click', () => {
      toggleBookInfo(index, bookInfo, moreInfo, cancelIconButtons);
    });
  });
  bookStatus.forEach((element, index) => {
    if (index % 2 === 0) {
      element.innerText = 'Borrowed out';
      element.style.color = 'red';
    }
  });
}

/**
 * @param {number} index
 * @param {array} bookInfo
 * @param {array} moreInfoButtons
 * @param {array} cancelIconButtons
 */
function toggleBookInfo(index, bookInfo, moreInfoButtons, cancelIconButtons) {
  if (bookInfo[index].classList.contains('book-details-carousel-visiblity')) {
    bookInfo[index].classList.remove('book-details-carousel-visiblity');
    moreInfoButtons[index].classList.remove('more-info-visibility');
    cancelIconButtons[index].classList.remove('cancel-icon-visibility');
  } else {
    bookInfo[index].classList.add('book-details-carousel-visiblity');
    moreInfoButtons[index].classList.add('more-info-visibility');
    cancelIconButtons[index].classList.add('cancel-icon-visibility');
  }
}

/**
 * Toggles the side anvigation bar
 */
function toggleSideNav() {
  const sideNav = document.getElementById('side-navigation-mobile');
  if (sideNav.classList.contains('toggle-side-navigation-mobile')) {
    sideNav.classList.remove('toggle-side-navigation-mobile');
  } else {
    sideNav.classList.add('toggle-side-navigation-mobile');
  }
}

/**
 * Toggles hidden navigation on mobile
 */
function toggleGoBackTopNav() {
  const mobileSearchArea = document.getElementById('mobile-search-area');
  if (mobileSearchArea.classList.contains('mobile-search-area-toggle')) {
    mobileSearchArea.classList.remove('mobile-search-area-toggle');
  } else {
    mobileSearchArea.classList.add('mobile-search-area-toggle');
  }
}

/**
 * Displays search result
 */
function diplaySearchResult() {
  const searchResult = document.getElementById('search-result-desktop');
  if (!searchResult.classList.contains('display-search-result-desktop')) {
    searchResult.classList.add('display-search-result-desktop');
  }
}

/**
 * Closes search result
 */
function closeSearchResult() {
  const searchResult = document.getElementById('search-result-desktop');
  if (searchResult.classList.contains('display-search-result-desktop')) {
    searchResult.classList.remove('display-search-result-desktop');
  }
}

/**
 * Displays search result on mobile
 */
function diplaySearchResultMobile() {
  const searchResultMobile = document.getElementById('search-result-mobile');
  if (!searchResultMobile.classList.contains('display-search-result-mobile')) {
    searchResultMobile.classList.add('display-search-result-mobile');
  }
}

/**
 * Closes search result on mobile
 */
function closeMobileSearchResult() {
  const searchResultMobile = document.getElementById('search-result-mobile');
  if (searchResultMobile.classList.contains('display-search-result-mobile')) {
    searchResultMobile.classList.remove('display-search-result-mobile');
  }
}

(function () {
  let header = document.querySelector('.page-header');
  let toggleButton = header.querySelector('.page-header__toggle');
  let mainScreen = document.querySelector('.main-screen');
  let welcomeScreen = document.querySelector('.welcome-screen');

  const isEnterKey = (evt, func) => {
    if (evt.keyCode === 13) {
      func();
    }
  };

  const toggleScreen = () => {
    header.classList.add('page-header--show');
    welcomeScreen.classList.add('welcome-screen--hide');
    mainScreen.classList.remove('main-screen--hide');
  };

  const openMenu = () => {
    header.classList.toggle('page-header--opened');
  };

  const toggleMainScreen = () => {
    mainScreen.classList.toggle('main-screen--toggle');
  };

  mainScreen.addEventListener('click', toggleMainScreen);

  welcomeScreen.addEventListener('click', toggleScreen);

  toggleButton.addEventListener('click', openMenu);

  window.addEventListener('keypress', (evt) => {
    isEnterKey(evt, toggleScreen);
  });
})();

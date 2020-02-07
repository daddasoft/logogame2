// Select Ui Element

let Level = +localStorage.getItem("LogoLevel") || 0;
const menuToggle = document.querySelector(".home__header--menu");
const homeMain = document.querySelector(".home__main");
const optionContainer = document.querySelector(".option__container");
const resetSetting = document.querySelector(".resetSetting");
const logoImage = document.querySelector(".logo__image");
const menuList = document.querySelector(".menu-list");
const LevelLabel = document.querySelector(".home__header--level");
const menu = document.querySelector(".menu");
const FontValue = document.querySelector(".valueFont");
const SizeValue = document.querySelector(".valueSize");
const FontSizeDrop = document.querySelector(".font__size--drop");
const FontFamilyDrop = document.querySelector(".font__family--drop");
const startButton = document.querySelector(".welcome__buttonStart");
const NextButton = document.querySelector(".nextButton");
const winPopUp = document.querySelector(".winpopup");
const LogoHint = document.querySelector(".logo__hint");
let IsShowingFont = false;
let IsShowingSize = false;
let isOpened = false;
const homeChecked = document.getElementById("toggle__home");
const menuContent = document.querySelector(".menu__content");
const answerWrapper = document.querySelector(
  ".home__main--answerContainer--answerWrapper"
);
const keyboardWrapper = document.querySelector(
  ".home__main--keyboardContainer--keyboardWrapper"
);
const setting = document.querySelector(".setting");
const report = document.querySelector(".report");
const themes = document.querySelector(".theme");
const FontDrop = document.querySelector(".font__drop");
const SizeDrop = document.querySelector(".size__drop");
//!
const KeyboardMinus = document.querySelector(".keyboard__minus");
const KeyboardPlus = document.querySelector(".keyboard__plus");
const KeyboardValue = document.querySelector(".keyboard__value");
//!
const listSize = document.querySelector(".list__size");
const listFont = document.querySelector(".list__font");
const Welcome = document.querySelector(".welcome");

// Select Ui Element
var Level = +localStorage.getItem("LogoLevel") || 0;
var menuToggle = document.querySelector(".home__header--menu");
var homeMain = document.querySelector(".home__main");
var optionContainer = document.querySelector(".option__container");
var resetSetting = document.querySelector(".resetSetting");
var logoImage = document.querySelector(".logo__image");
var menuList = document.querySelector(".menu-list");
var LevelLabel = document.querySelector(".home__header--level");
var menu = document.querySelector(".menu");
var losepopup = document.querySelector(".losepopup");
var CloseAnswer = document.querySelector(".losepopup__close");
var FontValue = document.querySelector(".valueFont");
var SizeValue = document.querySelector(".valueSize");
var DataNotFound = document.querySelector(".DataNotFound");
var DataNotFoundReset = document.querySelector(".DataNotFound__reset");
var FontSizeDrop = document.querySelector(".font__size--drop");
var FontFamilyDrop = document.querySelector(".font__family--drop");
var startButton = document.querySelector(".welcome__buttonStart");
var NextButton = document.querySelector(".nextButton");
var winPopUp = document.querySelector(".winpopup");
var LogoHint = document.querySelector(".logo__hint");
var IsShowingFont = false;
var IsShowingSize = false;
var isOpened = false;
var soundEffect = new Audio();
var homeChecked = document.getElementById("toggle__home");
var menuContent = document.querySelector(".menu__content");
var answerWrapper = document.querySelector(
  ".home__main--answerContainer--answerWrapper"
);
var keyboardWrapper = document.querySelector(
  ".home__main--keyboardContainer--keyboardWrapper"
);
var setting = document.querySelector(".setting");
var report = document.querySelector(".report");
var themes = document.querySelector(".theme");
var about = document.querySelector(".about");
var FontDrop = document.querySelector(".font__drop");
var SizeDrop = document.querySelector(".size__drop");
//!
var KeyboardMinus = document.querySelector(".keyboard__minus");
var KeyboardPlus = document.querySelector(".keyboard__plus");
var KeyboardValue = document.querySelector(".keyboard__value");
//!
var listSize = document.querySelector(".list__size");
var listFont = document.querySelector(".list__font");
var Welcome = document.querySelector(".welcome");
var themeList = document.querySelector(".theme__list");
var themePreview = document.querySelector(".theme__preview");

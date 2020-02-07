var logos = [
  {
    logoImag: "assets/logoQuestion/amazon.jpg",
    result: "AMAZON",
    keyboard: "ABXCATMUZRON",
    numberWords: 6,
    hint: "assets/logoAnswer/amazonres.jpg"
  },
  {
    logoImag: "assets/logoQuestion/android.jpg",
    result: "ANDROID",
    keyboard: "ABNDOYRID",
    numberWords: 7,
    hint: "assets/logoAnswer/android.jpg"
  },
  {
    logoImag: "assets/logoQuestion/ikea.jpg",
    result: "IKEA",
    keyboard: "IMEHAKNBC",
    numberWords: 4,
    hint: "assets/logoAnswer/ikeares.jpg"
  },
  {
    logoImag: "assets/logoQuestion/mastercard.jpg",
    result: "MASTERCARD",
    keyboard: "AMTRCDESURA",
    numberWords: 10,
    hint: "assets/logoAnswer/mastercardres.jpg"
  },
  {
    logoImag: "assets/logoQuestion/nivea.jpg",
    result: "NIVEA",
    keyboard: "NVSIBEPLEA",
    numberWords: 5,
    hint: "assets/logoAnswer/niveares.jpg"
  },
  {
    logoImag: "assets/logoQuestion/redbull.jpg",
    result: "REDBULL",
    keyboard: "REILFBUDYL",
    numberWords: 7,
    hint: "assets/logoAnswer/redbullres.jpg"
  },
  {
    logoImag: "assets/logoQuestion/skype.jpg",
    result: "SKYPE",
    keyboard: "SZYKEPNBY",
    numberWords: 5,
    hint: "assets/logoAnswer/skyperes.jpg"
  }
];

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
var FontValue = document.querySelector(".valueFont");
var SizeValue = document.querySelector(".valueSize");
var FontSizeDrop = document.querySelector(".font__size--drop");
var FontFamilyDrop = document.querySelector(".font__family--drop");
var startButton = document.querySelector(".welcome__buttonStart");
var NextButton = document.querySelector(".nextButton");
var winPopUp = document.querySelector(".winpopup");
var LogoHint = document.querySelector(".logo__hint");
var IsShowingFont = false;
var IsShowingSize = false;
var isOpened = false;
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

var UI = (function() {
  function loadEvent() {
    FontDrop.addEventListener("click", DropFontToggle);
    SizeDrop.addEventListener("click", DropSizeToggle);
    KeyboardPlus.addEventListener("click", keyboardSizePlus);
    KeyboardMinus.addEventListener("click", keyboardSizeMinus);
    listFont.addEventListener("click", FontSet);
    menuList.addEventListener("click", menuOptions);
    menuToggle.addEventListener("click", ToggleMenu);
    menu.addEventListener("click", hideMenu);
    startButton.addEventListener("click", StartTheGame);
    keyboardWrapper.addEventListener("click", KeypadPressed);
    answerWrapper.addEventListener("click", SymbolsPressed);
    NextButton.addEventListener("click", NextLevel);
    resetSetting.addEventListener("click", DefaultSetting);
  }
  function DefaultSetting() {
    localStorage.removeItem("logoSetting");
    window.location.reload();
  }

  function ToggleMenu() {
    menuContent.classList.remove("slideInLeft", "slideOutLeft", "animated");
    if (!isOpened) {
      showMenu();
    } else {
      hideMenu();
    }
  }
  function StartTheGame() {
    HideElement(Welcome);
  }
  function SymbolsPressed(e) {
    if (e.target.parentElement.classList.contains("symbols")) {
      var div = document.createElement("div");
      div.className = "keypad";
      div.appendChild(e.target);
      keyboardWrapper.appendChild(div);
    }
  }
  function KeypadPressed(e) {
    var AnswerSymbols = document.querySelectorAll(".symbols");
    if (e.target.parentElement.classList.contains("keypad")) {
      var parent = e.target.parentElement;
      for (var i = 0; i < AnswerSymbols.length; i++) {
        if (!AnswerSymbols[i].firstChild) {
          AnswerSymbols[i].appendChild(e.target);
          parent.remove();
          break;
        }
      }
      if (CheckAnswer()) {
        console.log("Yeah");
        showWin();
      } else {
        IsAllSet();
      }
    }
  }
  function hideMenu() {
    menuContent.classList.add("slideOutLeft", "animated");
    menuToggle.style.backgroundImage = "url('assets/icons/menu.svg')";
    menu.style.display = "none";
    isOpened = false;
  }
  function showMenu() {
    menu.style.display = "block";
    menuToggle.style.backgroundImage = "url('assets/icons/close.svg')";
    menuContent.classList.add("slideInLeft", "animated");
    isOpened = true;
  }
  function HideElement(element) {
    element.style.display = "none";
  }
  function LoadData() {
    if (Level < logos.length) {
      keyboardWrapper.innerHTML = null;
      answerWrapper.innerHTML = null;
      for (var i = 0; i < logos[Level].keyboard.length; i++) {
        keyboardWrapper.innerHTML += "\n        <div class=\"keypad\"\"><span>" + (logos[Level].keyboard[i]) + "</span></div>";
      }
      for (var i$1 = 0; i$1 < logos[Level].numberWords; i$1++) {
        answerWrapper.innerHTML += "\n        <div class=\"symbols\"\"></div>";
      }
      logoImage.src = logos[Level].logoImag;
      setSettings();
    } else {
      console.log("Out Of Range");
    }
    updateLevel();
  }
  function ShowElement(element, property) {
    if ( property === void 0 ) property = "block";

    element.style.display = property;
  }
  function DropFontToggle(e) {
    if (!IsShowingFont) {
      ShowElement(FontFamilyDrop);
      IsShowingFont = !IsShowingFont;
    } else {
      HideElement(FontFamilyDrop);
      IsShowingFont = !IsShowingFont;
    }
    console.log(e.target);
  }
  function CheckAnswer() {
    var place = document.querySelectorAll(".symbols");
    var answer = "";
    for (var j = 0; j < place.length; j++) {
      answer += place[j].textContent;
    }
    if (answer === logos[Level].result) {
      return true;
    } else {
      return false;
    }
  }
  function IsAllSet() {
    var place = document.querySelectorAll(".symbols");
    var count = 0;
    for (var j = 0; j < place.length; j++) {
      if (!place[j].firstChild) {
        count++;
      }
    }
    if (count === 0) {
      console.log("Error");
    }
  }
  function FontSet(e) {
    if (e.target.textContent === "Roboto") {
      document.documentElement.style.setProperty(
        "--font",
        "'Roboto', sans-serif"
      );
      if (localStorage.getItem("logoSetting")) {
        Setting = JSON.parse(localStorage.getItem("logoSetting"));
        Setting.FontFamily = { id: 1, name: "'Roboto'" };
        localStorage.setItem("logoSetting", JSON.stringify(Setting));
        console.log(Setting);
      } else {
        Setting = {};
        Setting.FontFamily = { id: 1, name: "'Roboto'" };
        localStorage.setItem("logoSetting", JSON.stringify(Setting));
        console.log(Setting);
      }
      FontValue.textContent = e.target.textContent;
    }
    if (e.target.textContent === "Default") {
      document.documentElement.style.setProperty("--font", '"Lexend Deca"');
      if (localStorage.getItem("logoSetting")) {
        Setting = JSON.parse(localStorage.getItem("logoSetting"));
        Setting.FontFamily = { id: 0, name: "'Lexend Deca'" };
        localStorage.setItem("logoSetting", JSON.stringify(Setting));
        console.log(Setting);
      } else {
        Setting = {};
        Setting.FontFamily = { id: 0, name: "'Lexend Deca'" };
        localStorage.setItem("logoSetting", JSON.stringify(Setting));
        console.log(Setting);
      }
      FontValue.textContent = e.target.textContent;
    }
    if (e.target.textContent === "Sans serif") {
      document.documentElement.style.setProperty("--font", "sans-serif");
      if (localStorage.getItem("logoSetting")) {
        Setting = JSON.parse(localStorage.getItem("logoSetting"));
        Setting.FontFamily = { id: 2, name: "sans-serif" };
        localStorage.setItem("logoSetting", JSON.stringify(Setting));
        console.log(Setting);
      } else {
        Setting = {};
        Setting.FontFamily = { id: 2, name: "sans-serif" };
        localStorage.setItem("logoSetting", JSON.stringify(Setting));
        console.log(Setting);
      }
      FontValue.textContent = e.target.textContent;
    }
  }
  function DropSizeToggle(e) {
    if (!IsShowingSize) {
      ShowElement(FontSizeDrop);
      IsShowingSize = !IsShowingSize;
    } else {
      HideElement(FontSizeDrop);
      IsShowingSize = !IsShowingSize;
    }
    var Setting;
    if (localStorage.getItem("logoSetting")) {
      Setting = JSON.parse(localStorage.getItem("logoSetting"));
    } else {
      Setting = {};
    }
    if (e.target.textContent == "Default") {
      SetFontSize(62.5);
      Setting.fontSize = { selector: "Default", value: 62.5 };
      SizeValue.textContent = e.target.textContent;
    }
    if (e.target.textContent == 12) {
      SetFontSize(64);
      Setting.fontSize = { selector: 12, value: 64 };
      SizeValue.textContent = e.target.textContent;
    }
    if (e.target.textContent == 14) {
      SetFontSize(65);
      Setting.fontSize = { selector: 14, value: 65 };
      SizeValue.textContent = e.target.textContent;
    }
    if (e.target.textContent == 16) {
      SetFontSize(67);
      Setting.fontSize = { selector: 16, value: 67 };
      SizeValue.textContent = e.target.textContent;
    }

    localStorage.setItem("logoSetting", JSON.stringify(Setting));
  }

  function menuOptions(e) {
    if (e.target.classList.contains("menu-home")) {
      HideElement(optionContainer);
      hideMenu();
    }
    if (e.target.classList.contains("menu-setting")) {
      ShowElement(optionContainer);
      HideElement(report);
      HideElement(themes);
      ShowElement(setting);
      hideMenu();
    }
    if (e.target.classList.contains("menu-rpError")) {
      ShowElement(optionContainer);
      ShowElement(report, "flex");
      HideElement(themes);
      HideElement(setting);
      hideMenu();
    }
    if (e.target.classList.contains("menu-themes")) {
      ShowElement(optionContainer);
      HideElement(report);
      HideElement(setting);
      ShowElement(themes);
      hideMenu();
    }
    if (e.target.classList.contains("menu-about")) {
      ShowElement(optionContainer);
      HideElement(report);
      HideElement(setting);
      HideElement(themes);
      hideMenu();
    }
  }
  function keyboardSizePlus() {
    var Size = +KeyboardValue.textContent;
    if (Size >= 34 && Size < 50) {
      Size++;
      KeyboardValue.textContent = Size;
      SetKeyboardSize(Size);
      var Setting;
      if (localStorage.getItem("logoSetting")) {
        Setting = JSON.parse(localStorage.getItem("logoSetting"));
        Setting.keyboardSize = Size;
        localStorage.setItem("logoSetting", JSON.stringify(Setting));
        console.log(Setting);
      } else {
        Setting = {};
        Setting.keyboardSize = Size;
        localStorage.setItem("logoSetting", JSON.stringify(Setting));
        console.log(Setting);
      }
    }
  }
  function keyboardSizeMinus() {
    var Size = +KeyboardValue.textContent;
    if (Size > 34 && Size <= 50) {
      Size--;
      KeyboardValue.textContent = Size;
      SetKeyboardSize(Size);
      var Setting;
      if (localStorage.getItem("logoSetting")) {
        Setting = JSON.parse(localStorage.getItem("logoSetting"));
        Setting.keyboardSize = Size;
        localStorage.setItem("logoSetting", JSON.stringify(Setting));
        console.log(Setting);
      } else {
        Setting = {};
        Setting.keyboardSize = Size;
        localStorage.setItem("logoSetting", JSON.stringify(Setting));
        console.log(Setting);
      }
    }
  }
  function SetKeyboardSize(Size) {
    var keypad = document.querySelectorAll(".keypad");
    keypad.forEach(function (item) {
      item.style.width = Size + "px";
      item.style.height = Size + "px";
    });
  }
  function SetFontSize(size) {
    document.querySelector("html").style.fontSize = size + "%";
  }
  function setSettings() {
    var Setting = {};
    if (localStorage.getItem("logoSetting")) {
      Setting = JSON.parse(localStorage.getItem("logoSetting"));
      if (Setting.keyboardSize) {
        SetKeyboardSize(Setting.keyboardSize);
        KeyboardValue.textContent = Setting.keyboardSize;
      }
      if (Setting.FontFamily) {
        var ref = Setting.FontFamily;
        var id = ref.id;
        var name = ref.name;
        if (id === 0) {
          document.documentElement.style.setProperty("--font", name);
          FontValue.textContent = "Default";
        }
        if (id === 1) {
          document.documentElement.style.setProperty("--font", name);
          FontValue.textContent = "Roboto";
        }
        if (id === 2) {
          document.documentElement.style.setProperty("--font", name);
          FontValue.textContent = "Sans Serif";
        }
      }
      if (Setting.fontSize) {
        SetFontSize(Setting.fontSize.value);
        SizeValue.textContent = Setting.fontSize.selector;
      }
    }
  }
  function showWin() {
    winPopUp.style.display = "flex";
    LogoHint.src = logos[Level].hint;
    winPopUp.classList.add("fadeIn", "animated");
    LogoHint.classList.add("slideInLeft", "animated");
    NextButton.classList.add("slideInLeft", "animated");
  }
  function NextLevel() {
    Level++;
    if (Level === logos.length) {
      Level = 0;
    }
    localStorage.setItem("LogoLevel", Level);
    LoadData();
    setSettings();
    HideElement(winPopUp);
    updateLevel();
  }
  function updateLevel() {
    LevelLabel.textContent = "Level : " + (Level + 1);
  }
  return {
    loadEvent: loadEvent,
    setSettings: setSettings,
    LoadData: LoadData
  };
})();
UI.loadEvent();
UI.setSettings();
UI.LoadData();
setTimeout(function () {
  document.querySelector(".splash").style.display = "none";
}, 2000);

var UI = (function () {
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
    homeChecked.addEventListener("change", homeScreen);
    themeList.addEventListener("click", themeManager);
    setting.addEventListener("click", hidedetails);
  }
  function hidedetails() {
    if (!IsShowingFont) {
      HideElement(FontFamilyDrop);
    }
    if (!IsShowingSize) {
      HideElement(FontSizeDrop);
    }
  }
  function closeLose() {
    HideElement(losepopup);
  }
  function reserTheApp() {
    localStorage.removeItem("LogoLevel");
    Level = 0;
    LoadData();
    setSettings();
    HideElement(DataNotFound);
  }
  function themeManager(e) {
    if (e.target.classList.contains("default")) {
      MySetting = {};
      if (localStorage.getItem("logoSetting")) {
        MySetting = JSON.parse(localStorage.getItem("logoSetting"));
      } else {
        MySetting = {};
      }
      MySetting.theme = 1;
      localStorage.setItem("logoSetting", JSON.stringify(MySetting));
      SetDefaultTheme();
      themePreview.style.backgroundImage =
        "url(assets/icons/" + MySetting.theme + ".jpg)";
    }
    if (e.target.classList.contains("red")) {
      MySetting = {};
      if (localStorage.getItem("logoSetting")) {
        MySetting = JSON.parse(localStorage.getItem("logoSetting"));
      } else {
        MySetting = {};
      }
      MySetting.theme = 5;
      localStorage.setItem("logoSetting", JSON.stringify(MySetting));
      SetRedTheme();
      themePreview.style.backgroundImage =
        "url(assets/icons/" + MySetting.theme + ".jpg)";
    }
    if (e.target.classList.contains("dark")) {
      MySetting = {};
      if (localStorage.getItem("logoSetting")) {
        MySetting = JSON.parse(localStorage.getItem("logoSetting"));
      } else {
        MySetting = {};
      }
      MySetting.theme = 3;
      localStorage.setItem("logoSetting", JSON.stringify(MySetting));
      SetBlackTheme();
      themePreview.style.backgroundImage =
        "url(assets/icons/" + MySetting.theme + ".jpg)";
    }
    if (e.target.classList.contains("green")) {
      MySetting = {};
      if (localStorage.getItem("logoSetting")) {
        MySetting = JSON.parse(localStorage.getItem("logoSetting"));
      } else {
        MySetting = {};
      }
      MySetting.theme = 2;
      localStorage.setItem("logoSetting", JSON.stringify(MySetting));
      SetGreenTheme();
      themePreview.style.backgroundImage =
        "url(assets/icons/" + MySetting.theme + ".jpg)";
    }
    if (e.target.classList.contains("orange")) {
      MySetting = {};
      if (localStorage.getItem("logoSetting")) {
        MySetting = JSON.parse(localStorage.getItem("logoSetting"));
      } else {
        MySetting = {};
      }
      MySetting.theme = 4;
      localStorage.setItem("logoSetting", JSON.stringify(MySetting));
      SetOrangeTheme();
      themePreview.style.backgroundImage =
        "url(assets/icons/" + MySetting.theme + ".jpg)";
    }
  }
  function SetDefaultTheme() {
    document.documentElement.style.setProperty("--headerColor", "#222e9f");
    document.documentElement.style.setProperty("--hoverColor", "#1b2586");
    document.documentElement.style.setProperty("--logoContainer", "#1a237e");
    document.documentElement.style.setProperty("--answerContainer", "#151f78");
    document.documentElement.style.setProperty(
      "--keyboardContainer",
      "#101b8d"
    );
    document.documentElement.style.setProperty("--border", "#2196f3");
    document.documentElement.style.setProperty("--buttons", "#1752a9");
    document.documentElement.style.setProperty("--buttonOption", "#1e288a");
    document.documentElement.style.setProperty("--popup", "#3f51b5e0");
    document.documentElement.style.setProperty("--bgColor", "#3f51b5");
  }
  function SetBlackTheme() {
    document.documentElement.style.setProperty("--headerColor", "#212121");
    document.documentElement.style.setProperty("--hoverColor", "#424242");
    document.documentElement.style.setProperty("--logoContainer", "#212121");
    document.documentElement.style.setProperty("--answerContainer", "#1d1919");
    document.documentElement.style.setProperty(
      "--keyboardContainer",
      "#212121"
    );
    document.documentElement.style.setProperty("--border", "#2196f3");
    document.documentElement.style.setProperty("--buttons", "#212121");
    document.documentElement.style.setProperty("--buttonOption", "#3e3d3d");
    document.documentElement.style.setProperty("--popup", "#1d1919d9");
    document.documentElement.style.setProperty("--bgColor", "#0b0b0b");
  }
  function SetGreenTheme() {
    document.documentElement.style.setProperty("--headerColor", "#43a047");
    document.documentElement.style.setProperty(
      "--hoverColor",
      "rgba(4,107,4,.767)"
    );
    document.documentElement.style.setProperty(
      "--logoContainer",
      "rgba(4,107,4,.767)"
    );
    document.documentElement.style.setProperty("--answerContainer", "#347b37");
    document.documentElement.style.setProperty(
      "--keyboardContainer",
      "rgba(4,107,4,.767)"
    );
    document.documentElement.style.setProperty("--border", "#ffffff");
    document.documentElement.style.setProperty(
      "--buttons",
      "rgba(4,107,4,.767)"
    );
    document.documentElement.style.setProperty("--buttonOption", "#3c8c3f");
    document.documentElement.style.setProperty("--popup", "rgba(4,107,4,.767)");
    document.documentElement.style.setProperty("--bgColor", "#3c8c3f");
  }
  function SetOrangeTheme() {
    document.documentElement.style.setProperty("--headerColor", "#e65100");
    document.documentElement.style.setProperty("--hoverColor", "#d26d06");
    document.documentElement.style.setProperty("--logoContainer", "#e65100");
    document.documentElement.style.setProperty("--answerContainer", "#e45d14");
    document.documentElement.style.setProperty(
      "--keyboardContainer",
      "#e65100"
    );
    document.documentElement.style.setProperty("--border", "#ffffff");
    document.documentElement.style.setProperty("--buttons", "#d85209");
    document.documentElement.style.setProperty("--buttonOption", "#c54c0b");
    document.documentElement.style.setProperty("--popup", "#d85209b5");
    document.documentElement.style.setProperty("--bgColor", "#f57c00");
    document.documentElement.style.setProperty("--SecondaryColor", "#fff");
  }
  function SetRedTheme() {
    document.documentElement.style.setProperty("--headerColor", "#cc2e2e");
    document.documentElement.style.setProperty("--hoverColor", "#941717");
    document.documentElement.style.setProperty("--logoContainer", "#b71c1c");
    document.documentElement.style.setProperty("--answerContainer", "#ad1717");
    document.documentElement.style.setProperty(
      "--keyboardContainer",
      "#b71c1c"
    );
    document.documentElement.style.setProperty("--border", "#ffffff");
    document.documentElement.style.setProperty("--buttons", "#b71c1c");
    document.documentElement.style.setProperty("--buttonOption", "#921616");
    document.documentElement.style.setProperty("--popup", "#b71c1c8a");
    document.documentElement.style.setProperty("--bgColor", "#a71a1a");
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
  function homeScreen(e) {
    var appSetting = {};
    if (localStorage.getItem("logoSetting")) {
      appSetting = JSON.parse(localStorage.getItem("logoSetting"));
      appSetting.homeScreen = e.target.checked;
    } else {
      appSetting.homeScreen = e.target.checked;
    }
    localStorage.setItem("logoSetting", JSON.stringify(appSetting));
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
  function clearAnswer() {
    LoadData();
    HideElement(losepopup);
  }
  function KeypadPressed(e) {
    var AnswerSymbols = document.querySelectorAll(".symbols");
    if (e.target.parentElement.classList.contains("keypad")) {
      var parent = e.target.parentElement;
      for (var i = 0; i < AnswerSymbols.length; i++) {
        if (!AnswerSymbols[i].firstChild) {
          e.target.classList.add("zoomIn", "animated");
          e.target.style.animationDuration = "0.2s";
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
        keyboardWrapper.innerHTML +=
          '\n        <div class="keypad""><span>' +
          logos[Level].keyboard[i] +
          "</span></div>";
      }
      for (var i$1 = 0; i$1 < logos[Level].numberWords; i$1++) {
        answerWrapper.innerHTML += '\n        <div class="symbols""></div>';
      }
      logoImage.src = logos[Level].logoImag;
      setSettings();
    } else {
      ShowElement(DataNotFound, "flex");
    }
    updateLevel();
  }
  function ShowElement(element, property) {
    if (property === void 0) property = "block";

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
      ShowElement(losepopup, "flex");
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
      HideElement(about);
      hideMenu();
    }
    if (e.target.classList.contains("menu-setting")) {
      ShowElement(optionContainer);
      HideElement(report);
      HideElement(themes);
      HideElement(about);
      ShowElement(setting);
      hideMenu();
    }
    if (e.target.classList.contains("menu-rpError")) {
      ShowElement(optionContainer);
      ShowElement(report, "flex");
      HideElement(themes);
      HideElement(about);
      HideElement(setting);
      hideMenu();
    }
    if (e.target.classList.contains("menu-themes")) {
      ShowElement(optionContainer);
      HideElement(report);
      HideElement(about);
      HideElement(setting);
      ShowElement(themes);
      hideMenu();
    }
    if (e.target.classList.contains("menu-about")) {
      ShowElement(optionContainer);
      HideElement(report);
      HideElement(setting);
      HideElement(themes);
      ShowElement(about, "flex");
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
    themePreview.style.backgroundImage = "url(assets/icons/1.jpg)";
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
      if (Setting.theme) {
        if (Setting.theme === 3) {
          SetBlackTheme();
          themePreview.style.backgroundImage =
            "url(assets/icons/" + Setting.theme + ".jpg)";
        }
        if (Setting.theme === 1) {
          SetDefaultTheme();
          themePreview.style.backgroundImage =
            "url(assets/icons/" + Setting.theme + ".jpg)";
        }
        if (Setting.theme === 2) {
          SetGreenTheme();
          themePreview.style.backgroundImage =
            "url(assets/icons/" + Setting.theme + ".jpg)";
        }
        if (Setting.theme === 4) {
          SetOrangeTheme();
          themePreview.style.backgroundImage =
            "url(assets/icons/" + Setting.theme + ".jpg)";
        }
        if (Setting.theme === 5) {
          SetRedTheme();
          themePreview.style.backgroundImage =
            "url(assets/icons/" + Setting.theme + ".jpg)";
        }
      }

      if (Setting.fontSize) {
        SetFontSize(Setting.fontSize.value);
        SizeValue.textContent = Setting.fontSize.selector;
      }
      if (Setting.homeScreen) {
        homeChecked.checked = true;
        document.querySelector(".splash").style.display = "none";
        document.querySelector(".welcome").style.display = "none";
      } else {
        setTimeout(function () {
          document.querySelector(".splash").style.display = "none";
        }, 2000);
      }
    } else {
      setTimeout(function () {
        document.querySelector(".splash").style.display = "none";
      }, 2000);
    }
  }
  function showWin() {
    winPopUp.style.display = "flex";
    LogoHint.src = logos[Level].hint;
    setTimeout(function () {
      LogoHint.classList.add("jackInTheBox", "animated");
      NextButton.classList.add("jackInTheBox", "animated");
    }, 300);
  }
  function NextLevel() {
    if (CheckAnswer()) {
      Level++;
      if (Level === logos.length) {
        Level = 0;
      }
      localStorage.setItem("LogoLevel", Level);
      LoadData();
      setSettings();
      HideElement(winPopUp);
      updateLevel();
      NextButton.focus = true;
    } else {
      console.log("Check Your Answer");
    }
  }
  function updateLevel() {
    LevelLabel.textContent = "Level : " + (Level + 1);
  }
  return {
    loadEvent: loadEvent,
    setSettings: setSettings,
    LoadData: LoadData,
  };
})();
UI.loadEvent();
UI.setSettings();
UI.LoadData();

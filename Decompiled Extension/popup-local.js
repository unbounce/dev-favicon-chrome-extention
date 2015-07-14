function checkEnv() {
  var curURL, imgURL;

  if (
    window.location.href.match(/localhost:3000/) ||
    window.location.href.match(/-dev:3000/) ||
    window.location.href.match(/-dev.ub:3000/)
  ) {
    curURL = 'local';
  } else if (window.location.href.match(/app-test\.unbounce/)) {
    curURL = 'appTest';
  } else if (window.location.href.match(/app-test-builder\.unbounce/)) {
    curURL = 'appTestBuilder'
  } else if (window.location.href.match(/app-test-pds\.unbounce/)) {
    curURL = 'appTestPds'
  } else if (window.location.href.match(/app-test-webapp\.unbounce/)) {
    curURL = 'appTestWebapp'
  } else if (window.location.href.match(/\.ub/)) {
    curURL = 'ub'
  }

  function icoLoad() {
    document.head = document.head || document.getElementsByTagName('head')[0];

    function changeFavicon(src) {
      var link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
      link.id = 'dynamic-favicon';
      link.rel = 'shortcut icon';
      link.href = src;
      if (oldLink) document.head.removeChild(oldLink);
      document.head.appendChild(link);
    }

    var cE = chrome.extension;

    switch (curURL) {
      case 'local':           imgURL = cE.getURL("icon-green-icon.ico");  break;
      case 'appTest':         imgURL = cE.getURL("icon-orange-icon.ico"); break;
      case 'appTestBuilder':  imgURL = cE.getURL("icon-purple-icon.ico"); break;
      case 'appTestPds':      imgURL = cE.getURL("icon-blue-icon.ico");   break;
      case 'appTestWebapp':   imgURL = cE.getURL("icon-red-icon.ico");    break;
      case 'ub':              imgURL = cE.getURL("icon-purple-icon.ico"); break;
    }

    changeFavicon(imgURL);
  }

  icoLoad();
  window.onload = function () {
    icoLoad();
    setTimeout(function () { icoLoad(); }, 1000);
    setTimeout(function () { icoLoad(); }, 5000);
    setTimeout(function () { icoLoad(); }, 10000);
  };
}

window.onload = checkEnv();
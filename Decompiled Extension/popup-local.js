window.onload=function(){

  var curURL, imgURL;

  if(window.location.href.match(/localhost/)){
    curURL = 'local';
  }else if(window.location.href.match(/app-test\.unbounce/)){
    curURL = 'appTest';
  }else if(window.location.href.match(/app-test-builder\.unbounce/)){
    curURL = 'appTestBuilder'
  }

  function icoLoad(){
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

    switch(curURL){
      case 'local': imgURL = chrome.extension.getURL("icon-green-icon.ico"); break;
      case 'appTest': imgURL = chrome.extension.getURL("icon-orange-icon.ico"); break;
      case 'appTestBuilder': imgURL = chrome.extension.getURL("icon-purple-icon.ico"); break;
    }

    changeFavicon(imgURL);
  }

  icoLoad();
  window.onload=function(){
    icoLoad();setTimeout(function(){icoLoad();},5000);setTimeout(function(){icoLoad();},10000);
  };
};
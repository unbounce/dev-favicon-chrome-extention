window.onload=function(){

  var curURL;

  if(window.location.href.match(/localhost/).length>=1){
    curURL = 'local';
  }else if(window.location.href.match(/app-test\.unbounce/).length>=1){
    curURL = 'appTest';
  }else if(window.location.href.match(/app-test-builder\.unbounce/).length>=1){
    curURL = 'appTestBuilder'
  }

  function icoLoad(){
    if(headers.includes){
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
      var imgURL = chrome.extension.getURL("dev.ico");
      changeFavicon(imgURL);
    }
  }

  icoLoad();
  window.onload=function(){
    icoLoad();setTimeout(function(){icoLoad();},5000);setTimeout(function(){icoLoad();},10000);
  };
};
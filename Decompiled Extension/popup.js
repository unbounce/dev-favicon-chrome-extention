// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

icoLoad = function(){
    if(document.URL.indexOf("localhost:3000") >= 0 && document.getElementById('olark')){
        document.head = document.head || document.getElementsByTagName('head')[0];
        function changeFavicon(src) {
            var link = document.createElement('link'),
                oldLink = document.getElementById('dynamic-favicon');
            link.id = 'dynamic-favicon';
            link.rel = 'shortcut icon';
            link.href = src;
            if (oldLink) {
                document.head.removeChild(oldLink);
            }
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

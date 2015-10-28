chrome.browserAction.onClicked.addListener(function (tab) {
    if (tab.url.indexOf("http://tabs.ultimate-guitar.com/") != -1) {
        chrome.tabs.executeScript(tab.id, {
            "file": "contentscript.js"
        }, function () {
            console.log("Script Executed .. ");
        });
    }
    else {
      alert("You are not on a Guitar Pro or Power Tab page");
    }
});

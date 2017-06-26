chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({code: 'replaceText(document.body);'});
});

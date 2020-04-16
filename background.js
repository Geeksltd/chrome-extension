// JQuery is available in this context.

var urlRegex = /^https:\/\/www\.mywebsite\.com\/part1\/part2\//;
var webApiUrl = 'http://localhost:8080/api/send';

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (tab.status !== 'complete') return;
	    
    if (urlRegex.test(tab.url)) {
		var message = {arg1: '...', arg2: '...'};
        chrome.tabs.sendMessage(tabId, message, function (response) { callBack(tab, tabId, response) });
    }    
});

function callBack(tab, tabId, args) {	
	if (!args) return;
	
    log(tabId, args);
    var url =  encodeURIComponent(args.url);
	var body = encodeURIComponent(args.body);

    var content = 'url='+ url +'&body='+ body; 
	 
	$.post(webApiUrl, content, function(data) {})
	   .done(function () {
		   // For example close the tab
		   chrome.tabs.remove(tabId, function() { });
	   })
	   .fail(function(e, err) { 
	      log(tabId, 'ERROR: Posting the content failed!');
	      log(tabId, e);
	      log(tabId, err);
	   });
}

// Use this to log debugging messages on the normal Chrome console (content).
function log(tabId, message) {
    chrome.tabs.sendMessage(tabId, {log: message}, function (x) {  });	
}
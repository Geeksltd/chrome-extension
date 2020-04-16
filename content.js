// jQuery is not necessarily available in this context

chrome.runtime.onMessage.addListener(handle);

function handle(msg, sender, callBack) {
	
	if (msg.log){
		console.log(msg.log);
		return;
	}
	
	console.log('message received!');
    console.log(msg);
		
	var response = { url:location.href, body: document.body.outerHTML };    
	callBack(response);	
}
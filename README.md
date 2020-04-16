# chrome extension template
A basic chrome extension template to get you started quickly.

This sample extension will simply read the full page content and send it to a Web Api of your application.

To get started, follow:

1. Clone this repository
2. In `manifest.json` set `name` to a unique name for your extension.
3. In `background.js` set `urlRegex` to the url of the website on which you want your extension to run
4. In `background.js` set `webApiUrl` to the url of your receiver application
5. Open Chrome and go to `chrome://extensions/`
6. Enable `Developer mode`
7. Click on `Load unpacked` and select the folder of your extension.

That's it! You can now test the extension and develop it further!

## Beginner Tips

- You cannot touch the DOM in `background.js`. Only `content.js` can access the DOM. If you need to access anything (e.g. click on a link) from the background.js file, you should *send a chrome tab message to the content tab*. 


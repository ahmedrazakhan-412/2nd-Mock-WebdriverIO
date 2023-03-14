describe('Multiple windows', () => {
	it('Handle multiple windows', () => {
		// navigate to the url
		browser.url("https://chercher.tech/python/windows-selenium-python");
		// get the Session id of the Parent
		var parentGUID = browser.getWindowHandle();
		// click the button to open new window
		$("#two-window").click();
		browser.pause(5000);
		// get the All the session id of the browsers
		var allGUID = browser.getWindowHandles();

		// pint the title of th epage
		console.log("Page title before Switching : "+ browser.getTitle());
		console.log("Total Windows : "+allGUID.length);
		// iterate the values in the set
		for(var i = 0; i< allGUID.length;i++){
			// one enter into if blobk if the GUID is not equal to parent window's GUID
			if(allGUID[i] != parentGUID){
				// switch to the guid
				browser.switchToWindow(allGUID[i]);
				// break the loop
				break;
			}
		}
		// search on the google page
		$("[name='q']").setValue("success");
		// print the title after switching
		console.log("Page title after Switching to google : "+ browser.getTitle());
		browser.pause(5000);
		// close the browser
		browser.close();
		// switch back to the parent window
		browser.switchToWindow(parentGUID);
		// print the title
		console.log("Page title after switching back to Parent: "+ browser.getTitle());
	})
})
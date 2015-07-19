// A Galen-JavaScript test to execute a spec against a specific configuration

test("Homepage Test on BrowserStack", function() {
	// Create a session on BrowserStack
	var driver = createGridDriver("http://<USERNAME>:<KEY>@hub.browserstack.com/wd/hub", {
		// Define capabilities
		desiredCapabilities: {
			 browser: "Chrome",
			 browser_version: "43.0",
			 os: "OS X",
			 os_version: "Mavericks",
			 "browserstack.debug": "true"
		}
	});

	// Open the URL you wish to run the test on
	driver.get("http://galenframework.com");

	// Select the spec to execute the test
	checkLayout(driver, "homepage.spec", ["desktop"]);

	// Destroy the session
	driver.quit();
});
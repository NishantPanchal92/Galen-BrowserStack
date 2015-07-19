test("Homepage Test on BrowserStack", function() {
	var driver = createGridDriver("http://nishant57:S7ZUamAuUp24pPLhDYsi@hub.browserstack.com/wd/hub", {
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
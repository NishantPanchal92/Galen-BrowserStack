this.devices = {
  mobile: {
    tag: "mobile",
    deviceName: "iPhone 5S",
    browserName: "iPhone",
    platform: "MAC",
    device: "iPhone 5S",
    browser: "",
    browser_version: "",
    os: "",
    os_version: ""
  },
  desktop: {
    tag: "desktop",
    deviceName: "Win-Chrome 43",
    browserName: "",
    platform: "",
    device: "",
    browser: "Chrome",
    browser_version: "43",
    os: "Windows",
    os_version: "8.1"
  }
};

forAll(devices, function (option) {
	test("Homepage Test on ${deviceName}", function() {
		var driver = createGridDriver("http://nishant57:S7ZUamAuUp24pPLhDYsi@hub.browserstack.com/wd/hub", {
			desiredCapabilities: {
				 browser: option.browser,
				 browser_version: option.browser_version,
				 os: option.os,
				 os_version: option.os_version,
				 browserName: option.browserName,
				 platform: option.platform,
				 device: option.device,
				 "browserstack.debug": "true"
			}
		});

		// Open the URL you wish to run the test on
		driver.get("http://galenframework.com");

		// Select the spec to execute the test
		checkLayout(driver, "homepage.spec", [option.tag]);

		// Destroy the session
		driver.quit();
	});
});
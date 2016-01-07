chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {
            redirectUrl: function() {
		if (details.url.indexOf("nocdn=1") !== -1) {
			return details.url;
		}
		if (details.url.indexOf("?") !== -1) {
			var parts = details.url.split("?");
			return parts[0] + "?nocdn=1&" + parts[1];
		}
		return details.url + "?nocdn=1";
	    }()
        };
    },
    {urls: ['*://arosoftware2.tpondemand.com/*'], types: ['main_frame']},
    ['blocking']
);


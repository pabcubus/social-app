(function() {
	let app = angular.module('social-app');

	app.config(function(FacebookProvider) {
		// Set your appId through the setAppId method or
		// use the shortcut in the initialize method directly.
		FacebookProvider.init('1919952364999376');
	})
})();

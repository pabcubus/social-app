(function() {
	let app = angular.module('social-app');

	app.config(function(FacebookProvider) {
		// Set your appId through the setAppId method or
		// use the shortcut in the initialize method directly.
		FacebookProvider.init({
				appId: '1919952364999376',
				status: true,
				cookie: true,
				xfbml: true
			});
	})
})();

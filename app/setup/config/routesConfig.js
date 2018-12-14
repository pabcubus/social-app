(function(){
	let app = angular.module('social-app');

	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'app/screens/home/html/home.html',
				controller: 'HomeController',
				controllerAs: 'hc'
			});
	});
})();

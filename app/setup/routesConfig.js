(function(){
	let app = angular.module('social-app');

	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/index');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'app/screens/home/html/home.html',
				controller: 'HomeController',
				controllerAs: 'hc'
			});
	});
})();

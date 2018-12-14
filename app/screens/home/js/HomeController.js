(function(){
	let app = angular.module('social-app');

	app.controller('HomeController', function($scope, SocialService, Facebook){
		let vm				= this;

		vm.string			= 'hola';

		vm.checkLoginState	= checkLoginState;
		vm.login			= login;
		vm.logout			= logout;
		vm.sessionInfo		= {};

		function checkLoginState() {
			console.log('Status: ', SocialService.isFBConnected());
		}

		function login() {
			Facebook.login(function(response) {
				vm.sessionInfo = response;
				if (response.status == 'connected') {
					vm.logged = true;
					me();
					pages();
				}

			});
		};

		function logout() {
			Facebook.logout(function() {
				vm.user = {};
				vm.logged = false;
			});
		}

		function pages(){
			Facebook.api(
				'/123042794945794?fields=id,description,tagged',
				{ access_token : 'EAACEdEose0cBAOXBYJj5j5kr72kOIS5LOkYGEehaspLz1TuZCgSvRMDI2xfiesnPfteUZA8aZCCYAMIsWpF9LZAQvPHpAT541DNRjEF9vZBorJGNifGluAARIRjkM8zWT7x65CK6xwWcgLcdAWVDxtgaejFmlSwJYbulNTrYTpQiwTSeW73HUjL0MsbKuPxQZD' },
				function(response) {
					console.log(response);
				}
			);
		}

		function me(){
			Facebook.api(
				'/me?fields=id,name',
				function(response) {
					$scope.$apply(function() {
							vm.user = response;
						}
					);
				}
			);
		}
	});
})();

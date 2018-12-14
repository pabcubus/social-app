(function(){
	let app = angular.module('social-app');

	app.service('SocialService', function($q, Facebook, lodash) {
		let vm				= this;

		vm.isFBConnected	= isFBConnected;
		vm.getUserAccounts	= getUserAccounts;

		function isFBConnected(){
			try{
				FB.getLoginStatus(function(response){
					if (response.status == 'connected') {
						return true;
					} else {
						return false;
					}
				});
			} catch(e) {
				return false;
			}
		}

		function getUserAccounts(){
			let defer = $q.defer();

			try{
				Facebook.api(
					'/me/accounts',
					function(response) {
						defer.resolve(response.data);
					}
				);
			} catch (err){
				defer.reject({});
			}

			return defer.promise;
		}

		function getPageNotifications(id, token){
			let defer = $q.defer();

			if (id.trim() == null || token.trim() == null){
				defer.reject({});
			} else {
				try{
					Facebook.api(
						'/' + id + '?fields=id,description,tagged',
						{ 'access_token' : token },
						function(response) {
							defer.resolve(response.data);
						}
					);
				} catch (err){
					defer.reject({});
				}
			}

			return defer.promise;
		}
	});
})();

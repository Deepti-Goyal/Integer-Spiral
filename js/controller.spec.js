
describe('GenerateSpiral for integer', function () {
		
	beforeEach(angular.mock.module('myApp'));

	var $controller;

	beforeEach(angular.mock.inject(function(_$controller_){
	  $controller = _$controller_;
	}));

	describe('Spiral-Interger', function () {
		it('Output should be true', function () {
			var $scope = {};
			var controller = $controller('myCtrl', { $scope: $scope });
			var params={'intNumber':'20', 'selectedDir':'left'};
			$scope.generateSpiral(params);
			expect($scope.showOutput).toBe(true);
		});
		
		it('Value of matrix at (1,4) position should be 19', function () {
			var $scope = {};
			var controller = $controller('myCtrl', { $scope: $scope });
			var params={'intNumber':'20', 'selectedDir':'left'};
			$scope.generateSpiral(params);
			expect($scope.spiral[1][4]).toBe(19);
		});		
	});

});

describe('GenerateSpiral for non integer', function () {
		
	beforeEach(angular.mock.module('myApp'));

	var $controller;

	beforeEach(angular.mock.inject(function(_$controller_){
	  $controller = _$controller_;
	}));

	describe('Spiral-Interger', function () {
		it('Output should be false', function () {
			var $scope = {};
			var controller = $controller('myCtrl', { $scope: $scope });
			var params={'intNumber':'a', 'selectedDir':'left'};
			$scope.generateSpiral(params);
			expect($scope.showOutput).toBe(false);
		});	
	});

});

describe('Spiral array for integer', function () {
		
	beforeEach(angular.mock.module('myApp'));

	var $controller;

	beforeEach(angular.mock.inject(function(_$controller_){
	  $controller = _$controller_;
	}));

	describe('Spiral-Interger', function () {
		
		it('Output should be a array', function () {
			var $scope = {};
			var controller = $controller('myCtrl', { $scope: $scope });
			//var currDir = 'UP';
			var params={'intNumber':'6', 'selectedDir':'left'};
			$scope.generateSpiral(params);
			expect($scope.grid).toEqual([ [ '  ', '  ', '   6' ], [ '   1', '   0', '   5' ], [ '   2', '   3', '   4' ] ]);
		});	
	});

});

describe('GenerateSpiral for direction not selected', function () {
		
	beforeEach(angular.mock.module('myApp'));

	var $controller;

	beforeEach(angular.mock.inject(function(_$controller_){
	  $controller = _$controller_;
	}));

	describe('Spiral-Interger', function () {
		it('Should throw error to select direction', function () {
			var $scope = {};
			var controller = $controller('myCtrl', { $scope: $scope });
			//var currDir = 'UP';
			var params={'intNumber':'6', 'selectedDir':' '};
			$scope.generateSpiral(params);
			expect($scope.errorMessage).toBe('Please Select the direction');
		});	
	});

});

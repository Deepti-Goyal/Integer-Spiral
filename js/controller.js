var app = angular.module('myApp', ['spiralService']);
app.controller('myCtrl', function($scope, myService) {
    $scope.dir = ["left", "right"];
    var rowIndex;
    var colIndex;
    var matrixSize;
    var left = "left";
    $scope.spiral = new Array();
	var currDir;
	
    //To generate the spiral String 
    $scope.generateSpiral = function(params) {
        var inputNum = parseInt(params.intNumber);
        currDir = "UP";
        if (Number.isInteger(inputNum) && (params.selectedDir != undefined) && (params.selectedDir != " ")) {
            $scope.showOutput = true;
			var spinStr = params.selectedDir;
            var spin = spinStr.toUpperCase() === left.toUpperCase();
            var solution = $scope.processedString(inputNum, spin);
            var rows = solution.split(",*,");
            var grid = new Array(rows.length);
            for (var i = 0; i < rows.length; i++) {
                grid[i] = rows[i].split(",:,")
            }
            this.grid = grid;
        }else if(isNaN(inputNum)) {
            $scope.showOutput = false;
            $scope.errorMessage = "Please enter valid input number";
        } else if ((params.selectedDir == undefined)  || (params.selectedDir == " ")){
            $scope.showOutput = false;
            $scope.errorMessage = "Please Select the direction";
        }

    };
 
    $scope.processedString = function(inputNum, spin) {
        // To determine the matrix size
        matrixSize = myService.getSizeOfMatrix(inputNum);

        $scope.spiral = new Array(matrixSize);
        for (var i = 0; i < matrixSize; i++) {
            $scope.spiral[i] = new Array();
            for (var j = 0; j < matrixSize; j++) {
                $scope.spiral[i][j] = -1;
            }
        }
        rowIndex = colIndex = parseInt(Math.floor(matrixSize / 2));
        $scope.spiral[rowIndex][colIndex] = 0;

        $scope.rotate(inputNum, spin);
        return $scope.toStringSpiral($scope.spiral);
    };
	
     //To generate the integer in spiral direction
    $scope.rotate = function(inputNum, spin) {
        for (var i = 0; i++ < inputNum;) {
            if (currDir == "UP") {
                if (spin) {
                    $scope.moveLeft(spin);
                } else {
                    $scope.moveRight(spin);
                }
            } else if (currDir == "DOWN") {
                if (spin) {
                    $scope.moveRight(spin);
                } else {
                    $scope.moveLeft(spin);
                }
            } else if (currDir == "LEFT") {
                if (spin) {
                    $scope.moveDown(spin);
                } else {
                    $scope.moveUp(spin);
                }
            } else if (currDir == "RIGHT") {
                if (spin) {
                    $scope.moveUp(spin);
                } else {
                    $scope.moveDown(spin);
                }
            }
            $scope.spiral[rowIndex][colIndex] = i;

        }
    };
	
    //To remove remaining "-1" in matrix and to convert it to string
    $scope.toStringSpiral = function(spiral) {
        var builder = new Array();
        for (var i = 0; i < matrixSize; i++) {
            for (var j = 0; j < matrixSize; j++) {
                if (spiral[i][j] == -1) {
                    builder.push("  ");
                } else {
                    builder.push("   " + spiral[i][j]);
                }
                if (j != spiral[i].length - 1) {
                    builder.push(":");
                }
            }
            builder.push("*");
        }
        if (builder.length > 0) {
            var builderstr = builder.toString();
            var len = builderstr.length - 2;
            var str = builderstr.substr(0, len);
        }
        return str;
    }
	
	//To move in "UP" direction
    $scope.moveUp = function(spin) {
        rowIndex--;
        if ($scope.spiral[rowIndex][colIndex] == -1) {
            currDir = "UP";
        } else {
            rowIndex++;
            colIndex = spin ? colIndex + 1 : colIndex - 1;
        }
    }
	
	//To move in "LEFT" direction
    $scope.moveLeft = function(spin) {
        colIndex--;
        if ($scope.spiral[rowIndex][colIndex] == -1) {
            currDir = "LEFT";
        } else {
            colIndex++;
            rowIndex = spin ? rowIndex - 1 : rowIndex + 1;
        }
    }
	
	//To move in "DOWN" direction
    $scope.moveDown = function(spin) {
        rowIndex++;
        if ($scope.spiral[rowIndex][colIndex] == -1) {
            currDir = "DOWN";
        } else {
            rowIndex--;
            colIndex = spin ? colIndex - 1 : colIndex + 1;
        }
    }
	
	//To move in "RIGHT" direction
    $scope.moveRight = function(spin) {
        colIndex++;
        if ($scope.spiral[rowIndex][colIndex] == -1) {
            currDir = "RIGHT";
        } else {
            colIndex--;
            rowIndex = spin ? rowIndex + 1 : rowIndex - 1;
        }
    }
    

});
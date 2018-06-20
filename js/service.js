var spiralService = angular.module('spiralService', [])
.service('myService', function () {
	
 
	//To get the size of the matrix
    this.getSizeOfMatrix = function(inputNum) {
        this.matrixSize = 1;
        while (inputNum >= this.matrixSize * this.matrixSize) {
            this.matrixSize = this.matrixSize + 2;
        }
        return this.matrixSize;
    }
	
});	
// WAP to find the index of 2D Array
function getIndex(n) {
    var A = [[1,2,],[3,4],[5,6]]
    
      for (var i = 0; i <A.length; i++) {
        var index = A[i].indexOf(n);
        if (index > -1) {
          return [i, index];
        }
      }
    }
   console.log(getIndex(4))



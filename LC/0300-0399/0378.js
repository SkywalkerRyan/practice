/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function( matrix, k )
{
    let newArr = [];
    
    matrix.forEach( arr => {
        newArr = newArr.concat(arr);
    });
    newArr.sort(function(a, b) {
        return a - b;
      });

    return newArr[ k - 1 ];
};

// console.log( kthSmallest( [[1,5,9],[10,11,13],[12,13,15]], 8 ) );
console.log( kthSmallest( [[-5]], 1 ) );
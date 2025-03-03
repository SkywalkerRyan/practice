/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function( nums, val ) 
{
    let change = nums.length;    
    for( let i = 0; i < change; i++ )    
    {
        if( nums[i] == val )
        {
            nums[i] = nums.pop();
            i--;
            change--;
        }
    }
    return change;
};

// console.log( removeElement( [ 3, 2, 2, 3 ], 3 ) );
// console.log( removeElement( [ 0, 1, 2, 2, 3, 0, 4, 2 ], 2 ) );
// console.log( removeElement( [ 2 ], 3) );
console.log( removeElement( [ 1 ], 1) );
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
    var nums_length = nums.length;
    var sums = [];

    for(let i = 0; i < nums_length; i++){
        for(let j = i +1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return(i,j)
            }
        }
    }
    
};



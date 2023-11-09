function hasTargetSum(array, target) {
    // Write your algorithm here
    //[3, 8, 12, 4, 11, 7], 10
    // 0  1  2   3  4   5
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let sum = array[i] + array[j];
            if (sum === target) {
                return true;
            }
        }

    }
    return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  itreat over array nums 
    count nums 
    if sum == target 
        return true 
    
*/

/*
  Add written explanation of your solution here
  write function returns true if there are cuple of numbers in an array their sum == target number 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

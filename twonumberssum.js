function twoNumberSum(array, targetSum) {
    // Write your code here.
      let hash_table ={};
      for (const num of array ){
          if(hash_table[`${targetSum - num}`]){
              return [num , targetSum-num]
          }
          else{
              hash_table[num]= true; 
          }
      }
      return []
  }

  console.log(twoNumberSum([1,2,3,4,5],10))// []
  console.log(twoNumberSum([1,4,5,7,8],13))// [8,5]
//   console.log(twoNumberSum([1,2,3,4,5,-5,3,-11,11],10))

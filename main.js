function adjacentElementsProduct(nums) {
   let product = nums[0] * nums[1]
   nums.forEach((num,idx) => {
      if (idx <= 4 && ((num * nums[idx+1]) > product)){
         product = num * nums[idx+1]
      }
   });
   return product
}



/**
* Test Suite 
*/
describe('adjacentElementsProduct()', () => {
   it('returns largest product of adjacent values', () => {
       // arrange
       const nums = [3, 6, -2, -5, 7, 3];
       
       // act
       const result = adjacentElementsProduct(nums);

       // log
       console.log("result: ", result);
       
       // assert
       expect(result).toBe(21);
   });
});
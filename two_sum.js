// const nums = [2, 7, 9, 11];
//
// let target = 11;
//
// for (i = 0; i < nums.length; i++) {
//   let compliment = target - nums[i];
//   let compExists = nums.find(
//     (element, index) => element == compliment && index !== i,
//   );
//   if (compExists) {
//     let index = nums.findIndex(
//       (stuff, index) => stuff == compliment && index !== i,
//     );
//     console.log(i, index);
//     return [i, index];
//   }
// }

// That was the unoptimized solution and now to optimize it further

const nums = [2, 7, 9, 11];

let target = 11;
for (i = 0; i < nums.length; i++) {
  let comp = target - nums[i];
  let findIndex = nums.findIndex((elements, index) => {
    return elements == comp && index !== i;
  });
  if (findIndex) {
    console.log([i, findIndex]);
    return [i, findIndex];
  }
}

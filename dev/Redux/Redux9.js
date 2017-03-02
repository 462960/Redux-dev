// Taken here
// https://egghead.io/lessons/javascript-redux-avoiding-array-mutations-with-concat-slice-and-spread


// Connect libraries:
// https://wzrd.in/standalone/deep-freeze@latest
// https://wzrd.in/standalone/expect@latest

// Case 1
const addCounter = (list) => {
 //return list.concat([0]);
   return [...list, 0];
};
const testAddCounter = () => {
  const listBefore = [2,4,6];
  const listAfter = [2,4,6,0];
  deepFreeze(listBefore);
  expect(addCounter(listBefore))
  .toEqual(listAfter)
};

 testAddCounter();
 console.log('Passed!');
//------------------------------------------- Case 2
const removeCounter = (arr, index) => 
        [ ...arr.slice(0,index),
          ...arr.slice(index+1)];

const testRemoveCounter = () => {
 const arrBefore = [4,6,8,8,10];
const arrAfter = [4,6,8,10];
  expect(removeCounter(arrBefore,3))
         .toEqual(arrAfter)
}

testRemoveCounter();
console.log('Arr equal!');
//------------------------------------------- Case 3
const incrementCount = (arr, i) =>
         [...arr.slice(0,i),
         arr[i] +1,
         ...arr.slice(i +1)];

const testIncrementCount = () => {
  const incrBefore = [3,5,7,9];
  const incrAfter = [3,6,7,9];
  expect(incrementCount(incrBefore,1))
          .toEqual(incrAfter)
};
testIncrementCount();
console.log('Increment equal!');
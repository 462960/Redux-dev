// Taken here 
// https://egghead.io/lessons/javascript-redux-avoiding-object-mutations-with-object-assign-and-spread


// Connect libraries:
// https://wzrd.in/standalone/deep-freeze@latest
// https://wzrd.in/standalone/expect@latest

// Option ONE (ES6)
const toggleTodo = (burdu) => {
return Object.assign({}, burdu,{
              completed: !burdu.completed 
})
};

// Option TWO
// const toggleTodo = (todo) => {
//       return { ...todo,
//                completed: !todo.completed 
//              };
// };


const testToggleTodo = () => {
  const prevDo = {
    id: 0,
    action: 'list',
    completed: false
  };
  const afterDo = {
    id: 0,
    action: 'list',
    completed: true
  };
  expect(toggleTodo(prevDo))
  .toEqual(afterDo);
};

testToggleTodo();
console.log('Passed!');
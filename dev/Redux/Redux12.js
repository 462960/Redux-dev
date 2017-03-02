// Taken here 
// https://egghead.io/lessons/javascript-redux-writing-a-todo-list-reducer-toggling-a-todo


// Connect libraries:
// https://wzrd.in/standalone/deep-freeze@latest
// https://wzrd.in/standalone/expect@latest

const todos = (state = [], action) => {
              switch(action.type) {
                case 'ADD_TODO':
                  return [
                  ...state,
                    {
                    id: action.id,
                    text: action.text,
                    completed: false  
                    }
                  ];
                  break;
                  
                case 'TOGGLE_TODO':
                  return state.map(todo => {
                       if(todo.id !== action.id){
                    return todo;
                  }
                    return {
                    ...todo,
                      completed: !todo.completed
                    };
                  });
                  break;
                  
                default:
                  return state;
                };
};

const testAddTodo = () => { 
  const stateBefore = [];
  const action = {
    id: 0,
    type: 'ADD_TODO',
    text: 'Learn Redux'
  };
  const stateAfter = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  }];
  
  deepFreeze(stateBefore);
  deepFreeze(action);
  
  expect(todos(stateBefore, action))
  .toEqual(stateAfter);
};

const testToggleTodo = () => {
   const stateBefore = [
     {
     id: 0,
     text: 'Learn Redux',
     completed: false 
     }, 
      {
     id: 1,
     text: 'Learn Destructuring',
     completed: false 
     } 
   ];
  const action = {
   type: 'TOGGLE_TODO',
   id: 1 
  };
  const stateAfter = [
     {
     id: 0,
     text: 'Learn Redux',
     completed: false 
     }, 
      {
     id: 1,
     text: 'Learn Destructuring',
     completed: true 
     } 
   ];
  
  deepFreeze(stateBefore);
  deepFreeze(action);
  
  expect(todos(stateBefore, action))
    .toEqual(stateAfter);
}

testAddTodo();
testToggleTodo();
console.log('Passed!');
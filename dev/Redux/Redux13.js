// Taken here 
// https://egghead.io/lessons/javascript-redux-reducer-composition-with-arrays


// Connect libraries:
// https://wzrd.in/standalone/deep-freeze@latest
// https://wzrd.in/standalone/expect@latest

const todo = (state, action) => {
            switch(action.type) {

              case 'ADD_TODO':
                  return {                    
                    id: action.id,
                    text: action.text,
                    completed: false  
                   };
                  break;

                case 'TOGGLE_TODO':
                 if(state.id !== action.id){
                    return state;
                  }
                    return {
                    ...state,
                      completed: !state.completed
                    };
                 break;

                default:
                  return state;
            }
        };

const todos = (state = [], action) => {
              switch(action.type) {
                case 'ADD_TODO':
                  return [
                  ...state,
                  todo(undefined, action)
                  ];
                  break;
                  
                case 'TOGGLE_TODO':
                  return state.map(t => todo(t,action));
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
};

testAddTodo();
testToggleTodo();
console.log('Passed!');
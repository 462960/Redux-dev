// Beginning here
// https://egghead.io/lessons/javascript-redux-react-todo-list-example-adding-a-todo


import React from 'react';
import { combineReducers, createStore} from 'redux';
import ReactDOM from 'react-dom';

const todo = (state, action) => {
	switch(action.type){
		case 'ADD_TODO':
		return {
			id: action.id,
			text: action.text,
			completed: false
		};
		break;

		case 'TOGGLE_TODO':
		return 
		if(state.id !== action.id){
            return state
		}
		//Does not work, Babel issue
		// return {
		// 	...state,
		// 	completed: !state:completed
		// }; so, replaced by:
			return Object.assign({}, state, {
				completed: !state.completed
			});
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
                  console.log(state.map(t => todo(t,action)));
                 break;
                  
                default:
                  return state;
                };
};

export const visibilityFilter = (
    state = 'SHOW_ALL',
    action
	) => {
	switch(action.type) {
		case 'SET_VISIBILITY_FILTER':
		return action.filter;
		break;

		default:
		return state;
	}
};

const todoApp = combineReducers({
	todos,
	visibilityFilter
});

export const store = createStore(todoApp);

const FilterLink = ({
	filter,
	children
}) => {
	return (
      <a href="#"
      // Stopped at https://egghead.io/lessons/javascript-redux-react-todo-list-example-filtering-todos
      // This function breaks everything
      // onClick={e =>
      // 	e.preventDefault(),
      //   store.dispatch({
      //   	type: 'SET_VISIBILITY_FILTER',
      //   	filter
      //   })
      // }
      >{children}</a>
		)
};

const getVisibleTodos = (
	todos,
	filter
	) => {
	switch(filter){
		case 'SHOW_ALL':
		return todos;
		break;
		case 'SHOW_COMPLETED':
		return todos.filter(t => t.completed);
		break;
		case 'SHOW_ACTIVE':
		return todos.filter(t => !t.completed);
		break;
		default:
		return todos;
	}
};

let nextId = 0; 
export default React.createClass({
	addItem(){
		 let text = ReactDOM.findDOMNode(this.refs.doos).value;
		store.dispatch({
			type: 'ADD_TODO',
			text,
			id: nextId++
		})
		 ReactDOM.findDOMNode(this.refs.doos).value = '';
	},
	toggleItem(){
		// Dispatch should be here
	},
	render(){
		const visibleTodos = getVisibleTodos(
			this.props.todos,
			this.props.visibilityFilter
			); 
		return <div>
		    <p><a href="https://github.com/462960/Redux-dev">GitHub</a></p>
		    <input ref="doos" type="text"/>
			<button onClick={this.addItem}>Add Item</button>
			<p>
				Show:
				{''}
				<FilterLink filter='SHOW_ALL'>All</FilterLink>
				{''}
				<FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
				{''}
				<FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
			</p>
			<ul>
			{visibleTodos.map(todo =>
				<li key={todo.id}
				//onClick={this.toggleItem}
				onClick={() => {
					 store.dispatch({
						type: 'TOGGLE_TODO',
						id: todo.id
					});
				}}
				 style={{
                    	textDecoration: todo.completed ?
                    	'line-through' : 'none',
                    	cursor: 'pointer'
                    }}>{todo.text}
				</li>
			)}
			</ul>
			
		</div>
	}
}); 
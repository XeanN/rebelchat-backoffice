"use strict";

import {combineReducers, createStore} from "redux";


const userReducer = (state={}, action) => {

	switch (action.type) {
		case 'CHANGE_NAME':
			state = {...state, name: action.payload}
			break;
		case 'CHANGE_AGE':
			state = {...state, age: action.payload}
			break;
	}
	return state;
};

const tweetsReducer = (state=[], action) => {

	return state;
};

const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer
})

const store = createStore(reducers);
// const store = createStore(reducers, {
// 	user: {
// 		name: 'Javier',
// 		age: 35
// 	},
// 	tweets: []
// });

store.subscribe(() =>{
	console.log('store changed', store.getState());
});

store.dispatch({type:'CHANGE_NAME', payload:"jegj"});
store.dispatch({type:'CHANGE_AGE', payload:27});
store.dispatch({type:'CHANGE_AGE', payload:30});
// store.dispatch({type:'INC', value:1});
// store.dispatch({type:'INC', value:1});
// store.dispatch({type:'INC', value:1});
// store.dispatch({type:'DEC', value:1});

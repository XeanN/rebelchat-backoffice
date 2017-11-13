// import { combineEpics } from 'redux-observable';

export const login = (action$) =>
	action$.ofType('test').switchMap(({ payload }) => {
		return null;
	});


// export const AuthEpic = combineEpics(
// 	login,
// );

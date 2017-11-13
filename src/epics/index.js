import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import * as AuthEpic from './auth';

export const login = (action$) =>
	action$.ofType('test').switchMap(({ payload }) => {
		return null;
	});

export const rootEpic = combineEpics(
	login
);

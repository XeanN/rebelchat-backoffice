import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import AuthEpic from './auth';

export const rootEpic = combineEpics(
	AuthEpic
);

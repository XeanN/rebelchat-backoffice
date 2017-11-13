import { Observable } from 'rxjs';

export const login = (action$) =>
	action$.ofType('test').switchMap(({ payload }) => {
		return null;
	});

export default function AuthEpics(action$, store) {
	return Observable.merge(
		login(action$)
	);
}

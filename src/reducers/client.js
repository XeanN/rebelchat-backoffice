import * as CLIENT_ACTIONS from '../constants/actions/client';

const defaultState = {
	list : {}
};

export default function ClientReducer(state = defaultState, action) {

	switch (action.type) {
		case CLIENT_ACTIONS.CLIENT_CHILD_ADDED:
			return {
				...state,
				list: {
					...state['list'],
					[action.payload.key]: action.payload.client
				}
			}
		default:
			return state;
	}
}

import * as CLIENT_ACTIONS from '../constants/actions/client';

const defaultState = {
	list : {},
	loading: true
};

export default function ClientReducer(state = defaultState, action) {

	switch (action.type) {
		case CLIENT_ACTIONS.CLIENT_CHILD_ADDED:
			return {
				...state,
				loading: false,
				list: {
					...state['list'],
					[action.payload.key]: action.payload.client
				}
			}
		default:
			return state;
	}
}

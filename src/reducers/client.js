import * as CLIENT_ACTIONS from '../constants/actions/client';

const defaultState = {
	list : {},
	loading: true,
	selected: null
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
		case CLIENT_ACTIONS.CLIENT_SELECTED:
			return {
				...state,
				selected: action.payload
			}
		default:
			return state;
	}
}

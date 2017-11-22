import { UI_TOOGLE_LOBBY_SIDEBAR } from '../constants/actions/ui';

const defaultState = {
	sidebarCssClass: ''
};

export default function UIReducer(state = defaultState, action) {

	switch (action.type) {
		case UI_TOOGLE_LOBBY_SIDEBAR:
			return {
				...state,
				sidebarCssClass: state.sidebarCssClass === '' ? 'active' : ''
			}
		default:
			return state;
	}
}

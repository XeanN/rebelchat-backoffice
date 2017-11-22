import { UI_TOOGLE_LOBBY_SIDEBAR } from '../constants/actions/ui';
import Notifications from 'react-notification-system-redux';

export const toogleLobbySidebar = () => {
	console.log('test')
	return dispatch => {
		return dispatch({
			type: UI_TOOGLE_LOBBY_SIDEBAR
		})
	}
}

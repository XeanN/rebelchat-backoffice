import { database } from '../lib/firebase';

export const watchNotificationsSettingsChangedEvent = () => {
	return dispatch => {
		const path = `/notifications/admin/`
		return database.ref(path).on('value', (snap) => {
			return dispatch(getNotifications(snap.val().webNotifications, snap.val().audioNotifications));
		});
	}
}

function getNotifications(webNotifications, soundNotifications) {
	return {
		type: "NOTIFICATION_SETTINGS_CHANGED",
		data: {
            webNotifications: webNotifications,
            soundNotifications: soundNotifications
        }
	};
}
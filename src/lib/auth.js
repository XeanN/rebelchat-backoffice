export const Auth = () => {

	const checkUserLocalStorage = () => {
		let hasLocalStorageUser = false;
		for (let key in localStorage) {
			if (key.startsWith("firebase:authUser:")) {
				hasLocalStorageUser = true;
			}
		}
		return hasLocalStorageUser;
	}

	return {
		checkUserLocalStorage
	};
}

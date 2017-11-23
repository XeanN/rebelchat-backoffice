export const Auth = () => {
	//TODO: FIX CLASS TO HANDLE UNIT TESTING AND ADD UNIT TESTS
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

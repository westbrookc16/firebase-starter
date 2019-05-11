import { useEffect, useState } from 'react';

export const useAuthState = auth => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
	console.log(`user=${JSON.stringify(user)}`);
	useEffect(() => {
		//console.log(auth);
		const listener = auth.onAuthStateChanged(firebaseUser => {
			if (firebaseUser) {
				const currentUser = { uid: firebaseUser.uid, displayName: firebaseUser.displayName };
				if (!user || currentUser.uid !== user.uid) {
					setUser(currentUser);
					localStorage.setItem('user', JSON.stringify(currentUser));
				}
			} else {
				console.log('signed out.');
				localStorage.removeItem('user');
				setUser(null);
			}
		});
		return listener;
	}, []);
	return user;
};

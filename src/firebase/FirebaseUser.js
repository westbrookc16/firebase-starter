import React, { useContext } from 'react';
import { useAuthState } from './firebase-hooks';
import FirebaseContext from './firebase';
import UserContext from './UserContext';
const FirebaseUser = props => {
	const firebase = useContext(FirebaseContext);
	console.log(firebase);
	const user = useAuthState(firebase.auth);
	return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>;
};
export default FirebaseUser;

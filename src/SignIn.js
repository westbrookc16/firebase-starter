import React, { useContext } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import FirebaseContext from './firebase/firebase';
const SignIn = () => {
	const fireBase = useContext(FirebaseContext);
	const config = { signInOptions: [fireBase.emailProvider, fireBase.googleProvider], signInSuccessUrl: '/' };
	console.log(config.signInOptions[0]);
	return (
		<div>
			<h1>Sign In</h1>
			<StyledFirebaseAuth uiConfig={config} firebaseAuth={fireBase.auth} />
		</div>
	);
};
export default SignIn;

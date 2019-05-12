import React, { useContext } from 'react';
import UserContext from './firebase/UserContext';
import FirebaseContext from './firebase/firebase';
import { Link } from 'react-router-dom';
const Navigation = () => {
	const firebase = useContext(FirebaseContext);
	const user = useContext(UserContext);
	return (
		<div>
			<ul>
				{user && (
					<li>
						<button
							onClick={e => {
								firebase.signOut();
							}}
						>
							Sign Out
						</button>
					</li>
				)}
				{!user && (
					<li>
						<Link to="/signin">Sign In</Link>
					</li>
				)}
			</ul>
		</div>
	);
};
export default Navigation;

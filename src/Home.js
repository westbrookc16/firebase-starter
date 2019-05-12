import React, { useContext } from 'react';
import UserContext from './firebase/UserContext';
const Home = () => {
	const user = useContext(UserContext);
	return <h1>Welcom home {user && user.displayName}</h1>;
};
export default Home;

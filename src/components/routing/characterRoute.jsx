import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function CharacterRoute() {
	return (
		<>
			<Link to="/agents/1">Agent 1</Link>
			<br />
			<Link to="/agents/2">Agent 2</Link>
			<br />
			<Outlet />
		</>
	);
}

export { CharacterRoute };

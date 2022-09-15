import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncAgents } from '../../features/agents/agentSlice';

function CharacterView() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAsyncAgents());
	}, [dispatch]);

	return (
		<div>
			<h1>Agents</h1>
		</div>
	);
}

export { CharacterView };

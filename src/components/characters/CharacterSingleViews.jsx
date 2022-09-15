import React from 'react';
import { useSelector } from 'react-redux';
import { getSingleAgents } from '../../features/agents/agentSlice';
import { AgentCards } from '../../styles/agentStyle/AgentCard';
import { ErrorCards } from '../../styles/Error/ErrorCard';

import { useParams } from 'react-router-dom';

function CharacterSingleView() {
	const { id } = useParams();

	const agents = useSelector(getSingleAgents);
	console.log(agents);

	let renderAgents = '';

	renderAgents =
		agents.status === 200 ? (
			agents.data.map((agent, index) => {
				return <AgentCards key={index} data={agent} />;
			})
		) : (
			<ErrorCards>
				<h3>{agents.Error}</h3>
			</ErrorCards>
		);

	return (
		<>
			<h1>Agents {id}</h1>
			<div>
				<div>
					<h1>Agents</h1>
					<div>{renderAgents}</div>
				</div>
			</div>
		</>
	);
}

export { CharacterSingleView };

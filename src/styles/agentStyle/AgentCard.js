import { AgentCard } from './AgentCard.styles';
import React from 'react';

function AgentCards(props) {
	const { data } = props;

	return (
		<AgentCard>
			<div>
				<div>
					<img src={data.displayIconSmall} alt={data.displayName} />
				</div>
			</div>
		</AgentCard>
	);
}

export { AgentCards };

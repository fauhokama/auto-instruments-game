import { FC, Suspense, useEffect, useState } from 'react';
import CreatureComponent from '../Creature/CreatureComponent';
import { BattleState } from 'types';

const BattleView: FC = () => {
	const [data, setData] = useState<BattleState | null>(null);

	useEffect(() => {
		const getState = async () => {
			const response = await fetch('/api/battle');
			setData(await response.json());
		};
		getState();
	}, []);

	return (
		<div>
			<h1> Team 1 </h1>
			<Suspense>
				{data?.playerTeam.creatures.map(creature => (
					<CreatureComponent key={creature.order} {...creature} />
				))}
			</Suspense>
		</div>
	);
};

export default BattleView;

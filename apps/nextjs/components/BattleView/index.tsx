import { FC, Suspense, useEffect, useState } from 'react';
import CreatureComponent from '../Creature/CreatureComponent';
import { BattleState } from 'shared';

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
			<button className="bg-red-300 p-4 mb-4"> Battle! </button>
			<div className="flex justify-between">
				<div>
					<h1> Team 1 </h1>
					{data?.playerTeam.creatures.map(creature => (
						<CreatureComponent key={creature.order} {...creature} />
					))}
				</div>
				<div>
					<h1> Team 2 </h1>
					{data?.enemyTeam.creatures.map(creature => (
						<CreatureComponent key={creature.order} {...creature} />
					))}
				</div>
			</div>
		</div>
	);
};

export default BattleView;

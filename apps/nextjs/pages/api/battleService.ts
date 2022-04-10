import { BattleState } from 'shared';

export const generateTurns = (battleState: BattleState) => {
	const { playerTeam, enemyTeam } = battleState;
	const { creatures: playerCreatures } = playerTeam;
	const { creatures: enemyCreatures } = enemyTeam;

	const dummyTurn = {
		fromcreature: playerCreatures[0],
		tocreature: enemyCreatures[0],
		effect: () => enemyTeam.creatures[0].health - playerTeam.creatures[0].attack,
	};

	dummyTurn.effect();

	return [dummyTurn, dummyTurn, dummyTurn];
};

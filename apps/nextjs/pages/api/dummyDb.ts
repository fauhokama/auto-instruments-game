import { BattleState } from 'shared';

const battles: BattleState[] = [
	{
		id: 1,
		playerTeam: {
			name: 'Team 1',
			creatures: [
				{
					order: 1,
					type: 'Piano',
					health: 2,
					attack: 2,
				},
				{
					order: 2,
					type: 'Guitar',
					attack: 1,
					health: 1,
				},
			],
		},
		enemyTeam: {
			name: 'Team 2',
			creatures: [
				{
					order: 1,
					type: 'Sax',
					attack: 2,
					health: 1,
				},
				{
					order: 2,
					type: 'Xylophone',
					attack: 1,
					health: 2,
				},
			],
		},
	},
	{
		id: 2,
		playerTeam: {
			name: 'Team 1',
			creatures: [
				{
					order: 1,
					type: 'Piano',
					health: 1,
					attack: 1,
				},
				{
					order: 2,
					type: 'Guitar',
					attack: 1,
					health: 1,
				},
			],
		},
		enemyTeam: {
			name: 'Team 2',
			creatures: [
				{
					order: 1,
					type: 'Sax',
					attack: 1,
					health: 1,
				},
				{
					order: 2,
					type: 'Xylophone',
					attack: 1,
					health: 1,
				},
			],
		},
	},
];

export default battles;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
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

export default function handler(req: NextApiRequest, res: NextApiResponse<BattleState | undefined>) {
	const battleState: BattleState | undefined = battles.find(b => b.id === 1);
	res.status(200).json(battleState);
}

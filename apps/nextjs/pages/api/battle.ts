// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { BattleState } from 'shared';
import battles from './dummyDb';
import { generateTurns } from './battleService';

export default function handler(req: NextApiRequest, res: NextApiResponse<BattleState>) {
	const battleState: BattleState = ensure(battles.find(b => b.id === 1));

	const turns = generateTurns(battleState);

	battleState.turns = turns;

	res.status(200).json(battleState);
}

function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
	if (argument === undefined || argument === null) {
		throw new TypeError(message);
	}

	return argument;
}

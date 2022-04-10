// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = any;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const json = {
        battle: 'demo',
        team1: {
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
        team2: {
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
    };
    res.status(200).json(json);
}

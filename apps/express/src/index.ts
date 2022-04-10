import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.get('/get', async (req, res) => {
	const battles = await prisma.battle.findMany();
	res.json(battles);
});

app.get('/post', async (req, res) => {
	const battle = await prisma.battle.create({
		data: {
			enemyTeam: {
				name: 'Enemy Team',
				creatures: [
					{
						health: 100,
						attack: 10,
						instrument: 'DRUM',
					},
				],
			},
			playerTeam: {
				name: 'Enemy Team',
				creatures: [
					{
						health: 100,
						attack: 10,
						instrument: 'DRUM',
					},
				],
			},
		},
	});
	res.json(battle);
});

const server = app.listen(3000);

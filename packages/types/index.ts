export type Creature = {
	attack: number;
	health: number;
	order: number;
	type: string;
	image?: JSX.Element;
};

export type Team = {
	name: string;
	creatures: Creature[];
};

export type BattleState = {
	playerTeam: Team;
	enemyTeam: Team;
};

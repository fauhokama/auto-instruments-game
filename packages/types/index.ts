export type Creature = {
	name: string;
	attack: number;
	health: number;
	order: number;
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

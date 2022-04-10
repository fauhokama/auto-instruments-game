export type Creature = {
	attack: number;
	health: number;
	type: string;
	order?: number;
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

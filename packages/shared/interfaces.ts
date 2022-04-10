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
	id: number;
	playerTeam: Team;
	enemyTeam: Team;
};

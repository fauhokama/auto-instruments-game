import { FC } from 'react';
import { Creature } from 'types';

const CreatureComponent: FC<Creature> = ({ type, attack, health, image }) => {
	return (
		<div>
			{image}
			<h1> {type} </h1>
			<p> Attack: {attack} </p>
			<p> Health: {health} </p>
		</div>
	);
};

export default CreatureComponent;

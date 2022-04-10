import { FC } from 'react';

type CreatureComponentProps = {
    name: string;
    attack: number;
    health: number;
    image?: JSX.Element;
};

const CreatureComponent: FC<CreatureComponentProps> = ({ name, attack, health, image }) => {
    return (
        <div>
            {image}
            <h1> {name} </h1>
            <p> Attack: {attack} </p>
            <p> Health: {health} </p>
        </div>
    );
};

export default CreatureComponent;

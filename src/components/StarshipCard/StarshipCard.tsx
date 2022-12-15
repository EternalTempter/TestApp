import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IStarship } from '../../models';
import styles from './StarshipCard.module.scss';

interface StarshipCardProps {
    starship: IStarship
}

const Starship:FC<StarshipCardProps> = ({starship}) => {
    const navigate = useNavigate();
    return (
        <div 
            className={styles.starship} 
            onClick={() => navigate(`${starship.url[starship.url.length - 2]}`)}
        >
            <div className={styles.image}>
                <img src={`https://starwars-visualguide.com/assets/img/starships/${starship.url.slice(32, -1)}.jpg`}/> 
            </div>
            <div className={styles.cost}>
                <span>Cost:</span>
                <p>{starship.cost_in_credits}</p>
            </div>
            <div className={styles.name}>
                <span>Name:</span>
                <p>{starship.name}</p>
            </div>
        </div>  
    );
};

export default Starship;
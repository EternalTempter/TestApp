import React, { useEffect, useMemo, useState } from 'react';
import { useGetStarshipsQuery } from '../../app/starship/starship.api';
import StarshipCard from '../../components/StarshipCard/StarshipCard';
import H1 from '../../components/UI/H1/H1';
import { IStarship } from '../../models';
import styles from './StarshipsPage.module.scss';

const StarshipsPage = () => {
    const {isError, isLoading, data} = useGetStarshipsQuery('');
    const [starships, setStarships] = useState<IStarship[]>([]);
    
    const [currentSortOption, setCurrentSortOption] = useState('name');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if(data) {
            setStarships(data.results)
        }
    }, [data])

    const sortedStarships = useMemo(() => {
        if(currentSortOption) { 
            if(currentSortOption === 'cost') 
                return [...starships].sort((starship1:IStarship,starship2:IStarship) => Number(starship1.cost_in_credits) < Number(starship2.cost_in_credits) ? 1 : -1)
            else 
                return [...starships].sort((starship1:IStarship,starship2:IStarship) => starship1.name < starship2.name ? 1 : -1)
        }
        return starships
    }, [currentSortOption, starships])

    const sortedAndSearchedStarships = useMemo(() => {
        if(searchQuery) { 
            return sortedStarships.filter(starship => starship.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return sortedStarships
    }, [searchQuery, sortedStarships])

    return (
        <div className={styles.starshipsPage}>
            <H1>Starships</H1>
            <div className={styles.sorter}>
                <p>Sort by: </p>
                <select 
                    defaultValue='name' 
                    onChange={e => setCurrentSortOption(e.target.value)}
                >
                    <option value="name">Name</option>
                    <option value="cost">Cost</option>
                </select>
            </div>
            <div className={styles.searcher}>
                <p>Find by name:</p>
                <input 
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Поиск по названию"
                />
            </div>
            <div className={styles.starshipsList}>
                {!isLoading && sortedAndSearchedStarships.length === 0 && 
                    <H1>Подходящих кораблей не найдено</H1>
                }
                {isLoading && [1,2,3,4,5,6,7,8,9,10].map(elem => 
                    <div className={styles.starshipMock} />
                )}
                {isError && 
                    <h2 className={styles.error}>Произошла непредвиденная ошибка</h2>
                }
                {!isLoading && !isError && sortedAndSearchedStarships.map(starship => 
                    <StarshipCard starship={starship}/>   
                )}
            </div>  
        </div>
    );
};

export default StarshipsPage;
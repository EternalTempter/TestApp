import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetStarshipQuery } from '../../app/starship/starship.api';
import H1 from '../../components/UI/H1/H1';
import styles from './StarshipPage.module.scss';

const StarshipPage = () => {
    const {id} = useParams();
    const {isLoading, isError, data} = useGetStarshipQuery(String(id));

    return (
        <div className={styles.starshipPage}>
            <H1>{data && data.name}</H1>
            {isError && 
                <h2 className={styles.error}>Произошла непредвиденная ошибка</h2>
            }
            {!isError && 
                <>
                    <div className={styles.starship}>
                        <div className={isLoading ? [styles.starshipImage, styles.mock].join(' ') : styles.starshipImage}>                
                            <img src={`https://starwars-visualguide.com/assets/img/starships/${data && data.url.slice(32, -1)}.jpg`}/> 
                        </div>
                        <div className={styles.starshipInfo}>
                            <ul>
                                <li>
                                    <div>
                                        <span>Model:</span>
                                        <p>{data && data.model}</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>Name:</span>
                                        <p>{data && data.name}</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>Length:</span>
                                        <p>{data && data.length}</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>Cost:</span>
                                        <p>{data && ('$' + data.cost_in_credits).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>Created:</span>
                                        <p>{data && String(data.created).slice(0, -17).split('-').reverse().join('.')}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor. Aenean massa. 
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
                    Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor. Aenean massa. 
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
                    Nulla consequat massa quis enim
                </p>
            </>
            }
        </div> 
    );
};

export default StarshipPage;

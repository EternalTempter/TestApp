import React from 'react';
import H1 from '../../components/UI/H1/H1';
import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <H1>Welcome  to StarDB</H1>
            <div className={styles.light}/>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa. 
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
                Nulla consequat massa quis enim
            </p>
        </div>
    );
};

export default HomePage;
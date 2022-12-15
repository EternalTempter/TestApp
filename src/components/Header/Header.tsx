import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../Form/Form';
import styles from './Header.module.scss'

const Header = () => {
    const navigate = useNavigate();
    const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);

    const [currentButton, setCurrentButton] = useState(window.location.pathname.slice(1))

    function toggleBurgerMenuHandler() {
        setIsBurgerMenuOpened(!isBurgerMenuOpened);
    }

    function toggleStarshipHandler() {
        toggleBurgerMenuHandler();
        setCurrentButton('starship')
    }

    function toggleFormHandler() {
        toggleBurgerMenuHandler();
        setCurrentButton('form')
    }

    function logoHandler() {
        navigate('/');
        setCurrentButton('')
    }
    
    return (
        <>
            <div className={styles.header}>
                <h1 
                    className={styles.logo}
                    onClick={logoHandler}
                >StarDB</h1>
                <ul className={styles.menu}>
                    <li 
                        className={currentButton === 'form' ? [styles.toggledMenuButton, styles.menuItem].join(' ') : styles.menuItem}
                        onClick={() => setCurrentButton('form')}
                    >
                        Form
                    </li>
                    <li
                        className={currentButton === 'starships' ? [styles.toggledMenuButton, styles.menuItem].join(' ') : styles.menuItem}
                        onClick={() => setCurrentButton('starships')}
                    >
                        <Link to="starships">Starships</Link>
                    </li>
                </ul>
                <div className={isBurgerMenuOpened ? [styles.burgerMenuButton, styles.opened].join(' ') : styles.burgerMenuButton} 
                    onClick={toggleBurgerMenuHandler}
                >
                    <div></div>
                </div>
                <div className={isBurgerMenuOpened ? [styles.burgerMenu, styles.opened].join(' ') : styles.burgerMenu}>
                    <ul>
                        <li onClick={toggleStarshipHandler}>
                            <Link to="starships">Starships</Link>
                        </li>
                        <li onClick={toggleFormHandler}>Form</li>
                    </ul>
                </div>
            </div>
            {currentButton === 'form' && 
                <Form />
            }
        </>
    );
};

export default Header;
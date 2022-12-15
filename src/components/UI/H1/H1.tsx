import React, { FC } from 'react';
import styles from './H1.module.scss';

interface H1Props {
    children: React.ReactNode
}

const H1:FC<H1Props> = ({children}) => {
    return (
        <h1 className={styles.header}>{children}</h1>
    );
};

export default H1;
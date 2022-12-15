import React, { useState } from 'react';
import H1 from '../UI/H1/H1';
import styles from './Form.module.scss'

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [isFirstNameError, setIsFirstNameError] = useState(false);
    const [isLastNameError, setIsLastNameError] = useState(false);

    function sendData(event: React.SyntheticEvent<EventTarget>) {
        event.preventDefault();
        if(!isFirstNameError && !isLastNameError && firstName !== '' && lastName !== '') {
            console.log(`FirstName - ${firstName} | LastName - ${lastName}`)
            setFirstName('');
            setLastName('');
        }
        else alert('Сначала заполните все поля верно!')
    }

    function validateFirstName(firstName: string) {
        setFirstName(firstName);
        setIsFirstNameError(firstName.length < 8 || firstName.length > 15)
    }

    function validateLastName(lastName: string) {
        setLastName(lastName);
        setIsLastNameError(lastName.length < 8 || lastName.length > 15)
    }

    return (
        <div className={styles.form}>
            <H1>Form</H1>
            <form>
                <div className={styles.firstName}>
                    <label>First Name:</label>
                    <input 
                        className={isFirstNameError ? [styles.error, styles.input].join(' ') : styles.input}
                        type="text" 
                        value={firstName}
                        onChange={e => validateFirstName(e.target.value)}
                    />
                </div>
                <div className={styles.lastName}>
                    <label>Last Name:</label>
                    <input 
                        className={isLastNameError ? [styles.error, styles.input].join(' ') : styles.input}
                        type="text"
                        value={lastName}
                        onChange={e => validateLastName(e.target.value)} 
                    />
                </div>
                <button onClick={sendData}>Submit</button>
            </form>
        </div>
    );
};

export default Form;
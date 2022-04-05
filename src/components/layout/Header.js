import React, { Fragment } from 'react'
import styles from './Header.module.css';

import { hero } from './imports';
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>{props.title}</h1>
                <HeaderCartButton />
            </header>

            <div className={styles['main-image']}>
                <img src={props.hero} alt={props.title} />
            </div>

        </Fragment>
    )
}


Header.defaultProps = {
    title: "React Meals",
    hero: hero,
}

export default Header;
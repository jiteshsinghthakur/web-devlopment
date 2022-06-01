import React from 'react';
import { showDates } from '../../utilities/showDates';
const Header = () => {
    return (
        <header>
            <h1>Header</h1>
            <h2>Component</h2>
            <p>This is Header component</p>
            <small>Date: {showDates()} </small>
        </header>
    )
}

export default Header
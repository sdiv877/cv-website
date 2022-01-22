import React from 'react';

import TextView from '../TextView';
import EmailButton from '../EmailButton';
import '../../styles/HeaderContainer.css'

const HeaderContainer = () => {
    return (
        <div className='header-container'>
            <TextView className='name-text'>Syon Divekar</TextView>
            <TextView className='qualification-text'>BE(Hons)/Computer Sytems</TextView>
            <EmailButton className='email-button' />
        </div>
    );
}

export default HeaderContainer;

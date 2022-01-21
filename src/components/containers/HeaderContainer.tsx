import React from 'react';

import TextView from '../TextView';
import EmailButton from '../EmailButton';
import '../../styles/HeaderContainer.css'

const HeaderContainer = () => {
    return (
        <div className='header-container'>
            <TextView className='name-text' text='Syon Divekar' />
            <TextView className='qualification-text' text='BE(Hons)/Computer Sytems' />
            <EmailButton className='email-button' />
        </div>
    );
}

export default HeaderContainer;

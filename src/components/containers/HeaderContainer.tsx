import React from 'react';

import Transition from '../Transition';
import TextView from '../TextView';
import EmailButton from '../EmailButton';
import '../../styles/HeaderContainer.css';

const HeaderContainer = () => {
    return (
        <Transition animation='slide-top'>
            <div className='header-container'>
                <TextView className='name-text'>Syon Divekar</TextView>
                <TextView className='qualification-text'>BE(Hons)/Computer Sytems</TextView>
                <EmailButton className='email-button' />
            </div >
        </Transition>
    );
}

export default HeaderContainer;

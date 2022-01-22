import React from 'react';
import { CSSTransition } from 'react-transition-group';

import TextView from '../TextView';
import EmailButton from '../EmailButton';
import '../../styles/HeaderContainer.css';
import '../../styles/Transitions.css'

const HeaderContainer = () => {
    return (
        <CSSTransition
            appear={true}
            in={true}
            timeout={450}
            classNames='slide-top'
        >
            <div className='header-container'>
                <TextView className='name-text'>Syon Divekar</TextView>
                <TextView className='qualification-text'>BE(Hons)/Computer Sytems</TextView>
                <EmailButton className='email-button' />
            </div>
        </CSSTransition>
    );
}

export default HeaderContainer;

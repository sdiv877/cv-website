import React, { ReactElement } from 'react';
import { CSSTransition } from 'react-transition-group';

import '../../styles/Transitions.css';

interface TransitionProps {
    animation: Animation
    children: ReactElement
}

type Animation = 'slide-top' | 'slide-left';

const Transition = (props: TransitionProps) => {
    return (
        <CSSTransition
            appear={true}
            in={true}
            timeout={450} 
            classNames={props.animation}
        >
            {props.children}
        </CSSTransition>
    );
}

export default Transition;

import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Stack } from '@mui/material';

import LinkCard from './LinkCard';
import '../styles/SocialLinks.css'
import '../styles/Transitions.css'

const SocialLinks = () => {
    return (
        <CSSTransition
            appear={true}
            in={true}
            timeout={450}
            classNames='slide-left'
        >
            <Stack className='social-links' spacing={1.9}>
                <LinkCard name='CV' />
                <LinkCard name='GitHub' />
                <LinkCard name='LinkedIn' />
            </Stack>
        </CSSTransition>
    );
}

export default SocialLinks;

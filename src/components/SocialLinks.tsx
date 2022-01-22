import React from 'react';
import { Stack } from '@mui/material';

import LinkCard from './LinkCard';
import '../styles/SocialLinks.css'

const SocialLinks = () => {
    return (
        <Stack className='social-links' spacing={2.1}>
            <LinkCard name='CV' />
            <LinkCard name='GitHub' />
            <LinkCard name='LinkedIn' />
        </Stack>
    );
}

export default SocialLinks;

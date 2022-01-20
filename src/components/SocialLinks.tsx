import React from 'react';

import LinkCard from './LinkCard';

const SocialLinks = () => {
    return (
        <div className='social-links'>
            <LinkCard name='CV' />
            <LinkCard name='GitHub' />
            <LinkCard name='LinkedIn' />
        </div>
    );
}

export default SocialLinks;

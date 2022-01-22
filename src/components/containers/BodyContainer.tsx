import React from 'react';

import Transition from '../Transition';
import SocialLinks from '../SocialLinks';

const BodyContainer = () => {
    return (
        <Transition animation='slide-left'>
            <div className='body-container'>
                <SocialLinks />
            </div>
        </Transition>
    );
}

export default BodyContainer;

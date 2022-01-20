import React from 'react';

import { LinkCardProps, GetLinkFromName } from '../utils/LinkCardUtil';
import '../styles/LinkCard.css'

const LinkCard = (props: LinkCardProps) => {
    return (
        <div className='link-card'>
            <a className='link-text' href={GetLinkFromName(props.name)} target="_blank" rel="noreferrer">
                {props.name}
            </a>
        </div>
    );
}

export default LinkCard;

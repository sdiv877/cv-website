import React from 'react';

import { LinkName, getLinkFromName } from '../utils/LinkCardUtil';
import ExtLink from './ExtLink';
import SimpleCard from './SimpleCard';
import '../styles/LinkCard.css'

export interface LinkCardProps {
    name: LinkName
}

const LinkCard = (props: LinkCardProps) => {
    return (
        <div className='link-card-container'>
            <ExtLink className='link-referrer' href={getLinkFromName(props.name)}>
                <SimpleCard className='link-card'>
                    <div className='link-text'>{props.name}</div>
                </SimpleCard>
            </ExtLink>
        </div>
    );
}

export default LinkCard;

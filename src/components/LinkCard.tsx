import React from 'react';

import { LinkName, getLinkFromName } from '../utils/LinkCardUtil';
import ExtLink from './ExtLink';
import SimpleCard from './SimpleCard';
import TextView from './TextView';
import '../styles/LinkCard.css'

export interface LinkCardProps {
    name: LinkName
}

const LinkCard = (props: LinkCardProps) => {
    return (
        <div className='link-card-container'>
            <ExtLink className='link-referrer' href={getLinkFromName(props.name)}>
                <SimpleCard className='link-card'>
                    <TextView className='link-text'>{props.name}</TextView>
                </SimpleCard>
            </ExtLink>
        </div>
    );
}

export default LinkCard;

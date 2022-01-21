import React from 'react';
import { Card, ButtonBase } from '@mui/material'

import { LinkName, getLinkFromName } from '../utils/LinkCardUtil';
import '../styles/LinkCard.css'

export interface LinkCardProps {
    name: LinkName
}

const LinkCard = (props: LinkCardProps) => {
    return (
        <div className='link-card-container'>
            <ButtonBase className='link-referrer' href={getLinkFromName(props.name)} target='_blank' rel='noreferrer'>
                <Card className='link-card' variant='outlined'>
                    <div className='link-text'>{props.name}</div>
                </Card>
            </ButtonBase>
        </div>
    );
}

export default LinkCard;

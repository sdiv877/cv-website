import React from 'react';
import { Grid } from '@mui/material';

import { LinkName, getLinkFromName, getIconFromName } from '../utils/LinkCardUtil';
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
                    <Grid container spacing={2}>
                        <Grid className='centered-icon' item xs={2}>
                            {getIconFromName(props.name)}
                        </Grid>
                        <Grid className='centered-text' item xs>
                            <TextView>{props.name}</TextView>
                        </Grid>
                        <Grid className='empty-item' item xs={2} />
                    </Grid>
                </SimpleCard>
            </ExtLink>
        </div>
    );
}

export default LinkCard;

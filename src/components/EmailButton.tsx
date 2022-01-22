import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Tooltip, Typography } from '@mui/material';
import Email from '@mui/icons-material/Email'

import { getHoverStyle, getLinkFromName } from '../utils/LinkCardUtil';

interface EmailButtonProps extends React.HTMLAttributes<HTMLDivElement> { }

const emailAddress = getLinkFromName('Email');

const EmailButton = (props: EmailButtonProps) => {
    return (
        <div className={props.className}>
            <Tooltip arrow title={EmailText}>
                <StyledButton
                    variant='outlined'
                    disableFocusRipple
                    disableTouchRipple
                    startIcon={<Email />}
                    href={`mailto: ${emailAddress}`}
                >
                    Email
                </StyledButton>
            </Tooltip>
        </div>
    );
}

const hoverStyle = getHoverStyle('Email');

const StyledButton = styled(Button)({
    textTransform: 'none',
    fontSize: '15px',
    fontFamily: '"Montserrat"',
    backgroundColor: 'white',
    color: 'black',
    borderColor: '#ccc',
    borderWidth: '1px',
    '&:hover': hoverStyle
});

const EmailText = (
    <Typography fontSize={15} fontFamily='"Montserrat"'>
        {emailAddress}
    </Typography>
);

export default EmailButton;

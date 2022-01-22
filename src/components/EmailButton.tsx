import React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import Email from '@mui/icons-material/Email'

import { getHoverStyle } from '../utils/LinkCardUtil';

interface EmailButtonProps extends React.HTMLAttributes<HTMLDivElement> { }

const EmailButton = (props: EmailButtonProps) => {
    return (
        <div className={props.className}>
            <StyledButton
                variant='outlined'
                startIcon={<Email />}
                href="mailto: sdiv877@aucklanduni.ac.nz"
            >
                Email
            </StyledButton>
        </div>
    );
}

const hoverStyle = getHoverStyle('Email');

const StyledButton = styled(Button)({
    textTransform: 'none',
    fontFamily: '"Montserrat"',
    color: 'black',
    borderColor: 'black',
    '&:hover': hoverStyle
});

export default EmailButton;

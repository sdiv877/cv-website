import React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import Email from '@mui/icons-material/Email'

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

const StyledButton = styled(Button)({
    textTransform: 'none',
    fontFamily: '"Montserrat"'
});

export default EmailButton;

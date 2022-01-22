import React from 'react';

import '../../styles/SimpleCard.css'

interface SimpleCardProps extends React.HTMLAttributes<HTMLDivElement> { }

const SimpleCard = (props: SimpleCardProps) => {
    return (
        <div className={`simple-card ${props.className}`} style={props.style}>
            {props.children}
        </div>
    );
}

export default SimpleCard;

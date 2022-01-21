import React from 'react';

interface TextViewProps extends React.HTMLAttributes<HTMLDivElement> {
    text: string
}

const TextView = (props: TextViewProps) => {
    return (
        <div className={props.className}>
            {props.text}
        </div>
    );
}

export default TextView;

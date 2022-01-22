import React from 'react';

interface TextViewProps extends React.HTMLAttributes<HTMLDivElement> { }

const TextView = (props: TextViewProps) => {
    return (
        <div className={`text-view ${props.className}`}>
            {props.children}
        </div>
    );
}

export default TextView;

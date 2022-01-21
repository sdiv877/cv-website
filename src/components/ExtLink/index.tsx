import React from 'react';

interface ExtLinkProps extends React.HTMLAttributes<HTMLAnchorElement> { 
    href: string | ''
}

const ExtLink = (props: ExtLinkProps) => {
    return (
        <a className={`ext-link ${props.className}`} href={props.href} target='_blank' rel='noreferrer'>
            {props.children}
        </a>
    );
}

export default ExtLink;

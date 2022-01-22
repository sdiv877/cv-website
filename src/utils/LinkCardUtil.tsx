import Description from '@mui/icons-material/Description';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Help from '@mui/icons-material/Help';

import { CV_PDF } from '../assets';

export type LinkName = 'GitHub' | 'CV' | 'LinkedIn' | 'Email';

export type HoverStyle = {
    backgroundColor: string,
    color: string,
    borderColor: string
}

type HoverColours = {
    light: string,
    dark: string
}

const iconStyle = {
    fontSize: '30px'
}

export const getLinkFromName = (name: LinkName): string => {
    switch (name) {
        case 'CV':
            return CV_PDF;
        case 'GitHub':
            return "https://github.com/sdiv877";
        case 'LinkedIn':
            return "https://linkedin.com/in/syon-divekar-6b3b25207"
        case 'Email':
            return "sdiv877@aucklanduni.ac.nz"
        default:
            return "syondivekar.com"
    }
}

export const getIconFromName = (name: LinkName): React.ReactElement => {
    switch (name) {
        case 'CV':
            return <Description style={iconStyle} />;
        case 'GitHub':
            return <GitHub style={iconStyle} />;
        case 'LinkedIn':
            return <LinkedIn style={iconStyle} />
        default:
            return <Help style={iconStyle} />
    }
}

const getHoverColours = (name: LinkName): HoverColours => {
    switch (name) {
        case 'CV':
            return { light: '#f6fbfe', dark: '#1d9bf0' };
        case 'GitHub':
            return { light: '#fff0ff', dark: '#800080' };
        case 'LinkedIn':
            return { light: '#f3f9fe', dark: '#0A66C2' };
        case 'Email':
            return { light: '#bbdefb', dark: '#1d9bf0' }
        default:
            return { light: '#ccc', dark: '#000000' };
    }
}

export const getHoverStyle = (name: LinkName): HoverStyle => {
    const hoverColours = getHoverColours(name);

    return {
        color: hoverColours.dark,
        borderColor: hoverColours.dark,
        backgroundColor: hoverColours.light,
    }
}
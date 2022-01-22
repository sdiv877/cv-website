import Description from '@mui/icons-material/Description'
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Help from '@mui/icons-material/Help'

export type LinkName = 'GitHub' | 'CV' | 'LinkedIn' | 'Email'

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
            return "https://drive.google.com/file/d/1Gv09R9Wh3mHQTEuqRHYZTak6KZ51Nlwg/view";
        case 'GitHub':
            return "https://github.com/sdiv877";
        case 'LinkedIn':
            return "https://linkedin.com/in/syon-divekar-6b3b25207"
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
        case 'Email':
        case 'CV':
            return { light: '#f6fbfe', dark: '#1d9bf0' };
        case 'GitHub':
            return { light: '#fff0ff', dark: '#800080' };
        case 'LinkedIn':
            return { light: '#f3f9fe', dark: '#0A66C2' };
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
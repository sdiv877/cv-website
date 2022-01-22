import Description from '@mui/icons-material/Description'
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Help from '@mui/icons-material/Help'

export type LinkName = 'GitHub' | 'CV' | 'LinkedIn'

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
            return <Description />;
        case 'GitHub':
            return <GitHub />;
        case 'LinkedIn':
            return <LinkedIn />
        default:
            return <Help />
    }
}
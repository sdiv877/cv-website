export type LinkName = 'GitHub' | 'CV' | 'LinkedIn'

export interface LinkCardProps {
    name: LinkName
}

export const GetLinkFromName = (name: LinkName) => {
    switch (name) {
        case 'CV':
            return "https://drive.google.com/file/d/1Gv09R9Wh3mHQTEuqRHYZTak6KZ51Nlwg/view";
        case 'GitHub':
            return "https://github.com/sdiv877";
        case 'LinkedIn':
            return "https://nz.linkedin.com/in/syon-divekar-6b3b25207"
        default:
            return "syondivekar.com"
    }
}
'use client'
import { Typography } from "@mui/material";

interface TextProps {
    label: string;
    color: string;
    size: string;
    weight: number;
}

const Text = ({ label, color = '#373737', size = '14px', weight = 400 }: TextProps) => {
    return (
        <Typography sx={ { color, fontSize: size, fontVariationSettings: `"wght" ${ weight }` } }>{ label }</Typography>
    );
}

export default Text;
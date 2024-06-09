'use client'

import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: "Ravi",
        htmlFontSize: 14,
        body1: {
            fontSize: '1rem'
        }
    },
    components: {
        MuiPagination: {
            defaultProps: {
                dir: 'ltr'
            }
        }
    }
});
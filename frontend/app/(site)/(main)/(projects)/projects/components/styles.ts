import { MenuItem, styled } from "@mui/material";

export const CategoryItem = styled(MenuItem)({
    margin: '10px',
    borderRadius: '4px',
    padding: '20px',
    ['&.Mui-selected']: {
        backgroundColor: '#f1f1f1'
    },
    ['&:hover']: {
        backgroundColor: '#f1f1f1'
    },
});
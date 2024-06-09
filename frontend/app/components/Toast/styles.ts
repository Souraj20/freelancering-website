import { styled } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";

export const CustomToastContainer = styled(ToastContainer)({
    '& .Toastify__toast': {
        direction: 'rtl',
        fontFamily: 'yekan',
    }
});
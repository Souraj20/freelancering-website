import Image from "next/image";
import styles from "./page.module.css";
import { Stack, TextField } from "@mui/material";

export default function Home() {
    return (
        <Stack sx={{ margin: '50px 0' }}>
            <TextField InputLabelProps={ { shrink: true } } label={'نام'} />
        </Stack>
    );
}

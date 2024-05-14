import React from 'react';
import { Stack } from "@mui/material";
import IsMounted from "@/app/components/is-mount/IsMounted";
import Navbar from "@/app/components/navbar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Stack>
            <IsMounted>
                <Navbar/>
            </IsMounted>
            { children }
        </Stack>
    );
};

export default MainLayout;
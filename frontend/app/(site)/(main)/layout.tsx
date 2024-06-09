import React from 'react';
import { Button, Stack } from "@mui/material";
import IsMounted from "@/app/components/is-mount/IsMounted";
import Navbar from "@/app/components/navbar/Navbar";
import Grid from "@mui/material/Unstable_Grid2";
import logo from "@/app/assets/images/logo/logo-02.png";
import Image from "next/image";
import Link from "next/link";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Stack>
            <Grid container>
                <Grid xs={ 2 }>
                    <Stack sx={ { width: '100%' } }>
                        <Image width={ 200 } height={ 70 } src={ logo.src }
                               alt={ '' }/>
                    </Stack>
                </Grid>

                <Grid xs={ 8 }>
                    <IsMounted>
                        <Navbar/>
                    </IsMounted>
                </Grid>

                <Grid xs={ 2 }>
                    <Stack sx={ { width: '100%', height: '100%', padding: '0 30px' } } alignItems={ 'flex-end' }
                           justifyContent={ 'center' }>
                        <Button sx={ { width: '158px' } } variant={ 'contained' } color={ 'primary' }>
                            <Link style={ { color: '#ffffff' } } href={ '/auth' }>
                                ورود | ثبت نام
                            </Link>
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
            { children }
        </Stack>
    );
};

export default MainLayout;
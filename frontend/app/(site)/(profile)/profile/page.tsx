import React from 'react';
import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import pageTitleBg from "@/app/assets/images/about/shape.png";
import Image from "next/image";
import Text from "@/app/components/text/Text";
import ProfileSidebar from "@/app/(site)/(profile)/profile/components/ProfileSidebar";
import ProfileDetail from "@/app/(site)/(profile)/profile/components/ProfileDetail";


const ProfilePage = () => {
    return (
        <Stack gap={ '30px' }>
            <Stack
                sx={ { backgroundColor: '#5C6BC0', justifyContent: 'center', alignItems: 'center', padding: '50px' } }>
                <Text label={ 'پروفایل من' } color={ '#ffffff' } size={ '20px' } weight={ 400 }/>
            </Stack>

            <Stack sx={ { padding: '0 100px' } }>
                <Grid container spacing={ 4 }>
                    <Grid xs={ 4 }>
                        <ProfileSidebar/>
                    </Grid>

                    <Grid xs={ 8 }>
                        <ProfileDetail/>
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
    );
};

export default ProfilePage;
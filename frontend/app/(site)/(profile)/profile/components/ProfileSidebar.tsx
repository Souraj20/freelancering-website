'use client'
import React from 'react';
import { Avatar, Button, Stack } from "@mui/material";
import Text from "@/app/components/text/Text";
import userImg from "@/app/assets/images/user/img-01.jpg";
import Grid from "@mui/material/Unstable_Grid2";
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const ProfileSidebar = () => {
    return (
        <Stack sx={ { border: '1px solid rgb(204 206 214 / 0.5)', borderRadius: '0.25rem' } }>
            <Stack gap={ '10px' } sx={ { borderBottom: '1px solid rgb(204 206 214 / 0.5)', padding: '30px 0' } }>
                <Stack sx={ { justifyContent: 'center', alignItems: 'center' } }>
                    <Avatar
                        alt="Remy Sharp"
                        src={ userImg.src }
                        sx={ { width: 56, height: 56 } }
                    />
                </Stack>

                <Stack sx={ { justifyContent: 'center', alignItems: 'center' } }>
                    <Text label={ 'فاطمه عبادی' } color={ '#000000' } size={ '1.125rem' } weight={ 600 }/>
                    <Text label={ 'توسعه دهنده' } color={ '#000000' } size={ '0.9rem' } weight={ 300 }/>
                </Stack>
            </Stack>

            <Stack sx={ { padding: '30px' } }>
                <Stack direction={'row'} gap={'50px'} justifyContent={'center'}>
                    <Text label={ 'پست الکترونیک' } color={ '#000000' } size={ '.9rem' } weight={ 300 }/>

                    <Text label={ 'Jansh@gmail.com' } color={ '#000000' } size={ '.9rem' } weight={ 300 }/>
                </Stack>

                <Stack direction={'row'} gap={'50px'} justifyContent={'center'}>
                    <Text label={ 'شماره تلفن' } color={ '#000000' } size={ '.9rem' } weight={ 300 }/>

                    <Text label={ '09169541565' } color={ '#000000' } size={ '.9rem' } weight={ 300 }/>
                </Stack>

                <Stack direction={'row'} gap={'50px'} justifyContent={'center'}>
                    <Text label={ 'محل' } color={ '#000000' } size={ '.9rem' } weight={ 300 }/>

                    <Text label={ 'خوزستان' } color={ '#000000' } size={ '.9rem' } weight={ 300 }/>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default ProfileSidebar;
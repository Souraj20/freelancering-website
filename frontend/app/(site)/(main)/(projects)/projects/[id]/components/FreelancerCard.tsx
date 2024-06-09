'use client'

import React from 'react';
import { Avatar, Card, Divider, Stack } from "@mui/material";
import userPic from "@/app/assets/images/user/img-03.jpg";
import Text from "@/app/components/text/Text";
import Grid from "@mui/material/Unstable_Grid2";
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const FreelancerCard = () => {
    return (
        <Card sx={ { padding: '10px', boxShadow: 'none', border: '1px solid #B0BEC5', borderRadius: '7px' } }>
            <Stack gap={ '20px' }>
                <Stack sx={ { alignItems: 'center', justifyContent: 'center' } } gap={ '15px' }>
                    <Avatar
                        alt="Remy Sharp"
                        src={ userPic.src }
                        sx={ { width: 56, height: 56 } }
                    />

                    <Text label={ 'faezejavidian7\n' } color={ '#000000' } size={ '20px' } weight={ 600 }/>
                </Stack>

                <Stack>
                    <Divider/>
                </Stack>

                <Stack>
                    <Grid container>
                        <Grid xs={ 6 }>
                            <Stack sx={ { height: '100%' } } direction={ 'row' } alignItems={ 'center' } gap={ '3px' }>
                                <AccessTimeIcon/>

                                <Text label={ 'زمان تحویل: 1 روز' } color={ '#373737' } size={ '12px' } weight={ 300 }/>
                            </Stack>
                        </Grid>

                        <Grid xs={ 6 }>
                            <Stack sx={ { height: '100%' } } justifyContent={ 'center' } alignItems={ 'flex-end' }>
                                <Text label={ '14 دقیقه پیش' } color={ '#373737' } size={ '12px' } weight={ 300 }/>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>
        </Card>
    );
};

export default FreelancerCard;
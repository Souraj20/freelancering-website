'use client'
import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, Stack, Typography } from "@mui/material";
import testUser from "@/app/assets/images/user/img-10.jpg";
import Text from "@/app/components/text/Text";

const FreelancerRow = () => {
    return (
        <Grid container sx={ { border: '1px solid rgb(204 206 214 / 0.5)', padding: '10px', borderRadius: '5px' } }>
            <Grid xs={ 3 }>
                <Stack direction={ 'row' } gap={ '5px' }>
                    <Stack>
                        <Avatar alt="Cindy Baker" src={ testUser.src }/>
                    </Stack>

                    <Stack>
                        <Stack direction={ 'row' }>
                            <Text label={ 'طاها' } color={ '#000000' } size={ '16px' } weight={ 400 }/>

                            <Text label={ 'ایمانی' } color={ '#000000' } size={ '16px' } weight={ 400 }/>
                        </Stack>

                        <Stack>
                            <Text label={ '09169541565' } color={ '#000000' } size={ '12px' } weight={ 300 }/>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid>

            <Grid xs={ 2 }>
                <Stack sx={ { height: '100%' } } justifyContent={ 'center' }>
                    <Text label={ 'برنامه نویس وب' } color={ '#000000' } size={ '14px' } weight={ 300 }/>
                </Stack>
            </Grid>

            <Grid xs={ 3 }>
                <Stack sx={ { height: '100%' } } justifyContent={ 'center' }>
                    <Text label={ 'tahaimani10@gmail.com' } color={ '#000000' } size={ '14px' } weight={ 300 }/>
                </Stack>
            </Grid>

            <Grid xs={ 2 }>
                <Stack sx={ { height: '100%' } } justifyContent={ 'center' }>
                    <Text label={ 'فروشگاه لوازم آرایش' } color={ '#000000' } size={ '14px' } weight={ 300 }/>
                </Stack>
            </Grid>

            <Grid xs={ 2 }>
                <Grid container spacing={ 2 } justifyContent={ 'center' }>
                    <Grid xs={ 6 }>
                        <Stack sx={ { width: '100%' } }>
                            <Typography
                                sx={ {
                                    padding: '8px',
                                    backgroundColor: '#4CAF50',
                                    borderRadius: '3px',
                                    color: '#ffffff'
                                } }>
                                قبول
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid xs={ 6 }>
                        <Stack sx={ { width: '100%' } }>
                            <Typography
                                sx={ {
                                    padding: '8px',
                                    backgroundColor: '#e84e5f',
                                    borderRadius: '3px',
                                    color: '#ffffff'
                                } }>
                                رد
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default FreelancerRow;
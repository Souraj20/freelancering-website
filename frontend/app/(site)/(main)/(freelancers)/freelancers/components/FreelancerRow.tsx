'use client'

import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, Button, Stack } from "@mui/material";
import testUser from "@/app/assets/images/user/img-01.jpg";
import Text from "@/app/components/text/Text";
import Link from "next/link";

const FreelancerRow = () => {
    return (
        <Grid container sx={ {
            border: '1px solid rgb(204 206 214 / 0.5)',
            padding: '10px',
            borderRadius: '5px',
        } }>
            <Grid xs={ 3 }>
                <Stack direction={ 'row' } gap={ '5px' }>
                    <Stack>
                        <Avatar alt="Cindy Baker" src={ testUser.src }/>
                    </Stack>

                    <Stack>
                        <Stack direction={ 'row' }>
                            <Text label={ 'فاطمه' } color={ '#000000' } size={ '16px' } weight={ 400 }/>

                            <Text label={ 'عبادی' } color={ '#000000' } size={ '16px' } weight={ 400 }/>
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
                <Stack sx={ { width: '100%' } }>
                    <Link href={ '/profile' }>
                        <Button variant={ 'contained' } color={ 'primary' }>
                            مشاهده پروفایل
                        </Button>
                    </Link>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default FreelancerRow;
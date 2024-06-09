'use client'
import React from 'react';
import { Button, Card, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Text from "@/app/components/text/Text";
import Link from "next/link";

const ProjectCard = () => {
    return (
        <Card sx={ { padding: '20px 10px', boxShadow: 'none', border: '1px solid #78909C', borderRadius: '20px' } }>
            <Grid container spacing={ 2 }>
                <Grid xs={ 7 }>
                    <Stack sx={ { width: '100%' } }>
                        <Stack gap={ '10px' }>
                            <Text label={ 'طراحی شبکه در packet tracer' } color={ '#007E46' } size={ '16px' }
                                  weight={ 600 }/>

                            <Text label={ 'شبیه سازی طراحی شبکه یک بیمارستان\n' +
                                'وی لن بندی انجام شده فقط ntp و Firewall لازمه کانفیگ بشه' } color={ '#000000' }
                                  size={ '12px' }
                                  weight={ 300 }/>
                        </Stack>
                    </Stack>
                </Grid>

                <Grid xs={ 5 }>
                    <Stack sx={ { width: '100%' } } gap={ '20px' }>
                        <Stack>
                            <Text label={ '14 روز و 23 ساعت' } color={ '#000000' } size={ '12px' } weight={ 600 }/>
                        </Stack>

                        <Stack>
                            <Text label={ '13 پیشنهاد' } color={ '#000000' } size={ '12px' } weight={ 600 }/>
                        </Stack>

                        <Stack>
                            <Text label={ 'بودجه 500,000 تومان' } color={ '#000000' } size={ '12px' } weight={ 600 }/>
                        </Stack>

                        <Stack>
                            <Text label={ 'ترکیبی از قیمت و کیفیت اهمیت دارد.' } color={ '#fb964d' } size={ '12px' }
                                  weight={ 600 }/>
                        </Stack>

                        <Stack>
                            <Link href={ '/projects/1' }>
                                <Button sx={ { width: '200px' } } variant={ 'outlined' } color={ 'primary' }>
                                    مشاهده پروژه
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Card>
    );
};

export default ProjectCard;
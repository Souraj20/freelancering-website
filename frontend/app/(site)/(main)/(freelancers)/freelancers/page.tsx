'use client'

import React from 'react';
import { Container, Divider, Stack, TextField } from "@mui/material";
import Text from "@/app/components/text/Text";
import Grid from "@mui/material/Unstable_Grid2";
import CustomSelect from "@/app/components/select/CustomSelect";
import ProjectList from "@/app/(site)/(main)/(projects)/projects/components/ProjectList";
import CustomPagination from "@/app/components/pagination/CustomPagination";
import TextInput from "@/app/components/text-input/TextInput";
import FreelancerRow from "@/app/(site)/(main)/(freelancers)/freelancers/components/FreelancerRow";

const FreelancersPage = () => {


    return (
        <Container maxWidth={ 'md' }>
            <Stack gap={ '30px' }>
                <Stack gap={ '20px' }>
                    <Text label={ 'فریلنسر ها' } color={ '#000000' } size={ '1.2rem' } weight={ 600 }/>

                    <Divider/>
                </Stack>

                <Stack>
                    <Grid container spacing={ 2 }>
                        <Grid xs={ 4 }>
                            <Stack sx={ { width: '100%' } } gap={ '7px' }>
                                <Text label={ 'مهارت' } color={ '#000000' } size={ '12px' } weight={ 300 }/>

                                <CustomSelect defaultValue={ 'ALL' } items={ [
                                    { label: 'php', value: 'php' },
                                    { label: 'premiere', value: 'premiere' },
                                    { label: 'Ai', value: 'Ai' },
                                ] }/>
                            </Stack>
                        </Grid>

                        <Grid xs={ 8 }>
                            <Stack sx={ { width: '100%', height: '100%' } } gap={ '7px' } justifyContent={ 'flex-end' }>
                                <TextField InputLabelProps={ { shrink: true } } placeholder={ 'جستجو در فریلنسرها' }/>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>

                <Stack gap={ '20px' }>
                    <Grid container>
                        <Grid xs={ 7 }>
                            <Stack direction={ 'row' } sx={ { width: '100%', height: '100%' } } gap={ '5px' }
                                   alignItems={ 'center' }>
                                <Text label={ 'تعداد یافته ها:' } color={ '#000000' } size={ '12px' } weight={ 400 }/>

                                <Text label={ '584 فریلنسر' } color={ '#000000' } size={ '12px' } weight={ 600 }/>
                            </Stack>
                        </Grid>

                        <Grid xs={ 5 }>
                            <Stack direction={ 'row' } sx={ { width: '100%' } } gap={ '7px' } alignItems={ 'center' }>
                                <Stack sx={ { width: '150px' } }>
                                    <Text label={ 'مرتب سازی بر اساس' } color={ '#000000' } size={ '12px' }
                                          weight={ 300 }/>
                                </Stack>

                                <CustomSelect defaultValue={ 'ALL' } items={ [
                                    { label: 'همه', value: 'ALL' },
                                    { label: 'کسب و کار', value: 'WORK' },
                                    { label: 'مهندسی نرم افزار و برنامه نویسی', value: 'SOFT-ENG' },
                                    { label: 'دیجیتال مارکتینگ', value: 'MARKETING' },
                                ] }/>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Divider/>
                </Stack>

                <Stack gap={ '15px' }>
                    <FreelancerRow/>

                    <FreelancerRow/>

                    <FreelancerRow/>

                    <FreelancerRow/>

                    <FreelancerRow/>
                </Stack>

                <Stack>
                    <CustomPagination count={ 10 }/>
                </Stack>
            </Stack>
        </Container>
    );
};

export default FreelancersPage;
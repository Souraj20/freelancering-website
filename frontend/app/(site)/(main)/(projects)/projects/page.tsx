import { Container, Divider, Stack } from '@mui/material';
import React from 'react';
import Text from "@/app/components/text/Text";
import Grid from "@mui/material/Unstable_Grid2";
import SearchBox from "@/app/components/search-box/SearchBox";
import { TabContext } from "@mui/lab";
import ProjectStatusTab from "@/app/(site)/(main)/(projects)/projects/components/ProjectStatusTab";
import CustomSelect from "@/app/components/select/CustomSelect";
import ProjectList from "@/app/(site)/(main)/(projects)/projects/components/ProjectList";
import CustomPagination from "@/app/components/pagination/CustomPagination";
import { jobs } from "@/app/utils/jobs";

const ProjectsPage = () => {
    return (
        <Container maxWidth={ 'md' }>
            <Stack gap={ '30px' }>
                <Stack gap={ '20px' }>
                    <Text label={ 'پروژه ها' } color={ '#000000' } size={ '1.2rem' } weight={ 600 }/>

                    <Divider/>
                </Stack>

                <Stack>
                    <Grid container spacing={ 2 }>
                        <Grid xs={ 9 }>
                            <Stack sx={ { width: '100%', height: '100%' } }>
                                <SearchBox label={ 'جستجو در پروژه ها' } items={ jobs }/>
                            </Stack>
                        </Grid>

                        <Grid xs={ 3 }>
                            <Stack sx={ { width: '100%', height: '100%' } }>
                                <ProjectStatusTab/>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>

                <Stack>
                    <Grid container spacing={ 2 }>
                        <Grid xs={ 3 }>
                            <Stack sx={ { width: '100%' } } gap={ '7px' }>
                                <Text label={ 'دسته بندی' } color={ '#000000' } size={ '12px' } weight={ 300 }/>

                                <CustomSelect defaultValue={ 'ALL' } items={ [
                                    { label: 'همه', value: 'ALL' },
                                    { label: 'کسب و کار', value: 'WORK' },
                                    { label: 'مهندسی نرم افزار و برنامه نویسی', value: 'SOFT-ENG' },
                                    { label: 'دیجیتال مارکتینگ', value: 'MARKETING' },
                                ] }/>
                            </Stack>
                        </Grid>

                        <Grid xs={ 6 }>
                            <Stack sx={ { width: '100%' } } gap={ '7px' }>
                                <Text label={ 'مهارت' } color={ '#000000' } size={ '12px' } weight={ 300 }/>

                                <CustomSelect defaultValue={ 'ALL' } items={ [
                                    { label: 'php', value: 'php' },
                                    { label: 'premiere', value: 'premiere' },
                                    { label: 'Ai', value: 'Ai' },
                                ] }/>
                            </Stack>
                        </Grid>

                        <Grid xs={ 3 }>
                            <Stack sx={ { width: '100%' } } gap={ '7px' }>
                                <Text label={ 'نوع' } color={ '#000000' } size={ '12px' } weight={ 300 }/>

                                <CustomSelect defaultValue={ 'ALL' } items={ [
                                    { label: 'همه', value: 'ALL' },
                                    { label: 'دورکاری', value: 'HYBRID' },
                                    { label: 'تمام وقت', value: 'FULL-TIME' },
                                ] }/>
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

                                <Text label={ '100 پروژه' } color={ '#000000' } size={ '12px' } weight={ 600 }/>
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

                <Stack>
                    <ProjectList/>
                </Stack>

                <Stack>
                    <CustomPagination count={ 10 }/>
                </Stack>
            </Stack>
        </Container>
    );
};

export default ProjectsPage;
'use client'
import React, { useState } from 'react';
import { Box, Stack, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ProfileSetting from "@/app/(site)/(profile)/profile/components/ProfileSetting";
import DefineProject from "@/app/(site)/(profile)/profile/components/DefineProject";
import ProjectsList from "@/app/components/projects-list/ProjectsList";
import FreelancersList from "@/app/components/freelancers-list/FreelancersList";

type ProfileItems = 'PROJECTS-LIST' | 'DEFINE-PROJECT' | 'EDIT-PROFILE';

const ProfileDetail = () => {

    const [formType, setFormType] = useState<ProfileItems>('EDIT-PROFILE');

    const handleChange = (event: React.SyntheticEvent, newValue: ProfileItems) => {
        setFormType(newValue);
    };

    return (
        <Stack sx={ { border: '1px solid rgb(204 206 214 / 0.5)', borderRadius: '0.25rem' } }>
            <TabContext value={ formType }>
                <Box sx={ { borderBottom: 1, borderColor: 'divider', padding: '0 20px' } }>
                    <TabList
                        onChange={ handleChange } aria-label="lab API tabs example">
                        <Tab label="تنظیمات" value="EDIT-PROFILE"/>

                        <Tab label="ثبت پروژه" value="DEFINE-PROJECT"/>

                        <Tab label="لیست پروژه ها" value="PROJECTS-LIST"/>

                        <Tab label="درخواست ارتباط" value="FREELANCERS-LIST"/>
                    </TabList>
                </Box>

                <TabPanel value="EDIT-PROFILE">
                    <ProfileSetting/>
                </TabPanel>

                <TabPanel value="DEFINE-PROJECT">
                    <DefineProject/>
                </TabPanel>

                <TabPanel value="PROJECTS-LIST">
                    <ProjectsList/>
                </TabPanel>

                <TabPanel value="FREELANCERS-LIST">
                    <FreelancersList/>
                </TabPanel>
            </TabContext>
        </Stack>
    );
};

export default ProfileDetail;
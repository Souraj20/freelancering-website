'use client'

import React, { useState } from 'react';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";

type ProjectStatus = 'ALL' | 'OPEN';

const ProjectStatusTab = () => {

    const [status, setStatus] = useState<ProjectStatus>('ALL');

    const handleChange = (event: React.SyntheticEvent, newValue: ProjectStatus) => {
        setStatus(newValue);
    };

    return (
        <TabContext value={ status }>
            <Box sx={ { backgroundColor: '#f2f2f2', borderRadius: '7px', padding: '5px' } }>
                <TabList sx={ {
                    minHeight: '40px',
                    '& .MuiTabs-flexContainer': {
                        justifyContent: 'space-between',
                    },
                    '& .Mui-selected': {
                        backgroundColor: '#ffffff'
                    },
                    "& .MuiTabs-indicator": {
                        display: "none",
                    },
                } } onChange={ handleChange }>
                    <Tab sx={ { width: '50%', borderRadius: '7px', fontSize: '12px', padding: '0', minHeight: '40px' } } label={ 'همه پروژه ها' }
                         value={ 'ALL' }/>

                    <Tab sx={ { width: '50%', borderRadius: '7px', fontSize: '12px', padding: '0', minHeight: '40px' } } label={ 'پروژه های باز' }
                         value={ 'OPEN' }/>
                </TabList>
            </Box>
        </TabContext>
    );
};

export default ProjectStatusTab;
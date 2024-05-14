'use client'
import React from 'react';
import { Stack } from "@mui/material";
import FreelancerRow from "@/app/components/single-freelancer-row/FreelancerRow";

const FreelancersList = () => {
    return (
        <Stack gap={ '10px' }>
            <FreelancerRow/>

            <FreelancerRow/>

            <FreelancerRow/>
        </Stack>
    );
};

export default FreelancersList;
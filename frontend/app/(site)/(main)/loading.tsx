'use client'

import React, { useState } from 'react';
import { Stack } from "@mui/material";
import { ClipLoader } from "react-spinners";

const Loading = () => {

    const [loading, setLoading] = useState(true);

    return (
        <Stack sx={ { padding: '200px' } } justifyContent={ 'center' } alignItems={ 'center' }>
            <ClipLoader loading={ loading } color="#36d7b7"/>
        </Stack>
    );
};

export default Loading;
'use client'
import React from 'react';
import { Button, Card, Stack } from "@mui/material";
import Text from "@/app/components/text/Text";
import testPic from "@/app/assets/images/job-detail.jpg";


const ProjectCard = () => {
    return (
        <Card>
            <Stack gap={ '10px' }>
                <Stack sx={ { width: '100%', height: '150px' } }>
                    <img style={ { width: '100%', height: '100%', display: 'block' } } src={ testPic.src } alt=""/>
                </Stack>

                <Stack sx={ { padding: '0 10px' } }>
                    <Text label={ 'سایت فروشگاهی' } color={ '#000000' } size={ '1.23rem' } weight={ 600 }/>

                    <Text label={ 'سایت فروشگاهی' } color={ '#000000' } size={ '.9rem' } weight={ 400 }/>
                </Stack>

                <Stack sx={ { padding: '10px' } }>
                    <Button variant={ 'contained' } color={ 'primary' }>
                        مشاهده
                    </Button>
                </Stack>
            </Stack>
        </Card>
    );
};

export default ProjectCard;
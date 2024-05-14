'use client'

import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import TextInput from "@/app/components/text-input/TextInput";
import { FieldValues, useForm } from "react-hook-form";
import SelectMenu from "@/app/components/select-menu/SelectMenu";
import { Stack } from "@mui/material";
import Text from "@/app/components/text/Text";
import { TextArea } from "@/app/components/text-area/styles";
import ProfileUploader from "@/app/components/profile-uploader/ProfileUploader";

const ProfileSetting = () => {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FieldValues>();

    return (
        <Stack gap={ '30px' }>
            <Grid container>
                <Stack sx={ { width: '100%', justifyContent: 'center', alignItems: 'center' } }>
                    <ProfileUploader id={ 'profile-pic' }/>
                </Stack>
            </Grid>

            <Grid container spacing={ 4 }>
                <Grid xs={ 6 }>
                    <TextInput id={ 'username' } label={ 'نام کاربری' } required={ true } isShrink={ true }
                               width={ '100%' } register={ register } errors={ errors }/>
                </Grid>

                <Grid xs={ 6 }>
                    <TextInput id={ 'username' } label={ 'نام کاربری' } required={ true } isShrink={ true }
                               width={ '100%' } register={ register } errors={ errors }/>
                </Grid>

                <Grid xs={ 6 }>
                    <Stack sx={ { width: '100%' } }>
                        <SelectMenu id={ 'job' } label={ 'مهارت تخصصی' } defaultValue={ 'programmer' }
                                    register={ register }
                                    names={ [
                                        { label: 'برنامه نویسی و نرم افزار', value: 'programmer' },
                                        { label: 'گرافیست', value: 'graphic' },
                                        { label: 'تدوین گر و مدل دیزاینر', value: 'designer' },
                                    ] }/>
                    </Stack>
                </Grid>

                <Grid xs={ 6 }>
                    <TextInput id={ 'username' } label={ 'نام کاربری' } required={ true } isShrink={ true }
                               width={ '100%' } register={ register } errors={ errors }/>
                </Grid>
            </Grid>

            <Stack gap={ '10px' }>
                <Stack>
                    <Text label={ 'خودت را معرفی کن:' } color={ '#000000' } size={ '1.1rem' } weight={ 400 }/>
                </Stack>

                <Stack>
                    <TextArea/>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default ProfileSetting;
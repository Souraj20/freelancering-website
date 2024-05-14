'use client'
import React from 'react';
import { FieldValues, useForm } from "react-hook-form";
import Grid from "@mui/material/Unstable_Grid2";
import TextInput from "@/app/components/text-input/TextInput";
import SelectMenu from "@/app/components/select-menu/SelectMenu";
import { Stack } from "@mui/material";
import Text from "@/app/components/text/Text";
import { TextArea } from "@/app/components/text-area/styles";
import PersianCalendar from "@/app/components/persian-calendar/PersianCalendar";

const DefineProject = () => {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FieldValues>();

    return (
        <form>
            <Stack gap={ '15px' }>
                <Grid container spacing={ 3 }>
                    <Grid xs={ 6 }>
                        <TextInput id={ 'title' } label={ 'نام پروژه' } required={ true } isShrink={ true }
                                   width={ '100%' } register={ register } errors={ errors }/>
                    </Grid>

                    <Grid xs={ 6 }>
                        <TextInput id={ 'budget' } label={ 'مقدار بودجه' } required={ true } isShrink={ true }
                                   width={ '100%' } register={ register } errors={ errors }/>
                    </Grid>

                    <Grid xs={ 6 }>
                        <Stack sx={ { width: '100%', height: '100%' } } gap={ '5px' }>
                            <PersianCalendar/>
                        </Stack>
                    </Grid>

                    <Grid xs={ 6 }>
                        <Stack sx={ { width: '100%' } }>
                            <SelectMenu id={ 'type' } label={ 'نوع پروژه' } defaultValue={ 'USER' }
                                        register={ register }
                                        names={ [
                                            { label: 'برنامه نویسی و نرم افزار', value: 'USER' },
                                            { label: 'تدوین و گرافیک', value: 'FREELANCER' },
                                            { label: 'سایر', value: 'EMPLOYER' },
                                        ] }/>
                        </Stack>
                    </Grid>
                </Grid>

                <Stack gap={ '10px' }>
                    <Stack>
                        <Text label={ 'توضیحات:' } color={ '#000000' } size={ '1.1rem' } weight={ 400 }/>
                    </Stack>

                    <Stack>
                        <TextArea/>
                    </Stack>
                </Stack>
            </Stack>
        </form>
    );
};

export default DefineProject;
'use client'

import Grid from "@mui/material/Unstable_Grid2";
import { Button, CircularProgress, Stack } from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import TextInput from "@/app/components/text-input/TextInput";
import SelectMenu from "@/app/components/select-menu/SelectMenu";
import { toast } from "react-toastify";
import { useState } from "react";

const Register = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setLoading(true);
        const res = new Promise((resolve) => setTimeout(() => resolve(true), 2000));

        await toast.promise(
            res,
            {
                pending: 'در حال ارسال درخواست...',
                success: {
                    render({ data }) {
                        if (data) {
                            setLoading(false);
                            return 'ثبت نام با موفقیت انجام شد.';
                        }
                    }
                },
                error: 'همچین کاربری وجود ندارد.'
            },
            { autoClose: 1000 }
        );
    };

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <Grid container spacing={ 3 }>
                <Grid xs={ 12 }>
                    <Stack sx={ { width: '100%' } }>
                        <TextInput id={ 'username' } label={ 'نام کاربری' } required={ true } isShrink={ true }
                                   width={ '100%' } register={ register } errors={ errors }/>
                    </Stack>
                </Grid>

                <Grid xs={ 12 }>
                    <Stack sx={ { width: '100%' } }>
                        <TextInput id={ 'email' } label={ 'ایمیل' } required={ true } isShrink={ true }
                                   width={ '100%' } register={ register } errors={ errors }/>
                    </Stack>
                </Grid>

                <Grid xs={ 12 }>
                    <Stack sx={ { width: '100%' } }>
                        <SelectMenu id={ 'role' } label={ 'نقش کاربری' } defaultValue={ 'USER' } register={ register }
                                    names={ [
                                        { label: 'کاربر', value: 'USER' },
                                        { label: 'فریلنسر', value: 'FREELANCER' },
                                        { label: 'کارفرما', value: 'EMPLOYER' },
                                    ] }/>
                    </Stack>
                </Grid>

                <Grid xs={ 12 }>
                    <Stack sx={ { width: '100%' } }>
                        <TextInput type={ 'password' } id={ 'password' } label={ 'رمز عبور' } required={ true }
                                   isShrink={ true }
                                   width={ '100%' } register={ register } errors={ errors }/>
                    </Stack>
                </Grid>

                <Grid xs={ 12 }>
                    <Stack sx={ { width: '100%', alignItems: 'center' } }>
                        <Button disabled={ loading } sx={ { width: '100%' } } type={ 'submit' } variant={ 'contained' }
                                color={ 'primary' }>
                            ثبت نام
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </form>
    );
}

export default Register;
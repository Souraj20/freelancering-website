'use client'

import Grid from "@mui/material/Unstable_Grid2";
import { Button, CircularProgress, Stack } from "@mui/material";
import TextInput from "@/app/components/text-input/TextInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";

const Login = () => {

    const { push } = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setLoading(true);
        const res = new Promise((resolve) => setTimeout(() => resolve(true), 2000));

        const response = await toast.promise(
            res,
            {
                pending: 'در حال ارسال درخواست...',
                success: {
                    render({ data }) {
                        if (data) {
                            setLoading(false);
                            return 'به آزادکاران خوش آمدید.';
                        }
                    }
                },
                error: 'همچین کاربری وجود ندارد.'
            },
            { autoClose: 1000 }
        );

        if (response) {
            setTimeout(() => {
                push('/');
            }, 1000);
        }
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
                        <TextInput type={ 'password' } id={ 'password' } label={ 'رمز عبور' } required={ true }
                                   isShrink={ true }
                                   width={ '100%' } register={ register } errors={ errors }/>
                    </Stack>
                </Grid>

                <Grid xs={ 12 }>
                    <Stack sx={ { width: '100%', alignItems: 'center' } }>
                        <Button disabled={ loading } sx={ { width: '100%' } } type={ 'submit' } variant={ 'contained' }
                                color={ 'primary' }>
                            ورود
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </form>
    );
};

export default Login;

'use client'

import Grid from "@mui/material/Unstable_Grid2";
import { Button, CircularProgress, Stack } from "@mui/material";
import TextInput from "@/app/components/text-input/TextInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FieldValues>();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data)
    };

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <Grid container spacing={ 3 }>
                <Grid xs={ 12 }>
                    <Stack sx={ { width: '100%' } }>
                        <TextInput id={ 'username' } label={ 'نام کاربری' } required={ true } isShrink={ true }
                                   width={ '100%' } register={ register } errors={ errors } />
                    </Stack>
                </Grid>

                <Grid xs={ 12 }>
                    <Stack sx={ { width: '100%' } }>
                        <TextInput type={ 'password' } id={ 'password' } label={ 'رمز عبور' } required={ true }
                                   isShrink={ true }
                                   width={ '100%' } register={ register } errors={ errors } />
                    </Stack>
                </Grid>

                <Grid xs={ 12 }>
                    <Stack sx={ { width: '100%', alignItems: 'center' } }>
                        {
                            isSubmitting ? (
                                <CircularProgress color="primary" />
                            ) : (
                                <Button sx={ { width: '100%' } } type={ 'submit' } variant={ 'contained' }
                                        color={ 'primary' }>
                                    ورود
                                </Button>
                            )
                        }

                    </Stack>
                </Grid>
            </Grid>
        </form>
    );
};

export default Login;

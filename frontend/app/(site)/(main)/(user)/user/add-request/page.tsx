'use client'

import React, { useCallback, useState } from 'react';
import { Button, Card, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Text from "@/app/components/text/Text";
import Image from "next/image";
import jobPic from "@/app/assets/images/blog/img-05.jpg";
import { TextArea } from "@/app/components/text-area/styles";
import { toast } from "react-toastify";


const AddRequestUserPage = () => {

    const [loading, setLoading] = useState<boolean>(false);

    const handleSendRequest = useCallback(async () => {
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
                            return 'درخواست ارسال شد.';
                        }
                    }
                },
                error: 'درخواست ثبت نشد.'
            },
            { autoClose: 1000 }
        );
    }, [loading]);

    return (
        <Stack sx={ { margin: '50px 0' } }>
            <Container maxWidth={ 'lg' }>
                <Grid container spacing={ 2 }>
                    <Grid xs={ 9 }>
                        <Stack sx={ { width: '100%', height: '100%' } }>
                            <Stack gap={ '20px' }>
                                <Stack>
                                    <Text label={ 'ایجاد پروژه اختصاصی برای طاها ایمانی' } color={ '#000000' }
                                          size={ '22px' } weight={ 600 }/>
                                </Stack>

                                <Stack direction={ 'row' } alignItems={ 'center' } gap={ '7px' }>
                                    <Stack>
                                        <Image style={ { borderRadius: '50%' } } width={ 40 } height={ 40 }
                                               src={ jobPic.src } alt={ '' }/>
                                    </Stack>

                                    <Stack>
                                        <Text label={ 'iamtahaimani' } color={ '#000000' }
                                              size={ '19px' } weight={ 500 }/>
                                    </Stack>
                                </Stack>

                                <Stack>
                                    <Card sx={ {
                                        boxShadow: 'none',
                                        backgroundColor: 'rgb(242, 242, 242)',
                                        padding: '10px'
                                    } }>
                                        <Typography>
                                            این پروژه به صورت اختصاصی برای anovaco ایجاد می‌شود.
                                            فریلنسرهای دیگر امکان ارسال پیشنهاد برای پروژه شما رو ندارند و پروژه شما در
                                            صفحه بازدید برای تمام فریلنسرها دیده نخواهد شد.
                                        </Typography>
                                    </Card>
                                </Stack>

                                <Stack direction={ 'row' } gap={ '20px' } alignItems={ 'center' }>
                                    <Stack>
                                        <Typography sx={ {
                                            width: '16px',
                                            height: '16px',
                                            borderRadius: '50%',
                                            border: '1px solid rgb(0, 126, 70)',
                                            color: 'rgb(0, 126, 70)',
                                            lineHeight: '16px',
                                            display: 'flex',
                                            justifyContent: 'center'
                                        } }>
                                            1
                                        </Typography>
                                    </Stack>

                                    <Stack>
                                        <Text label={ 'می‌خواهید چه کاری برای شما انجام شود؟' } color={ '#000000' }
                                              size={ '16px' } weight={ 600 }/>
                                    </Stack>
                                </Stack>

                                <Stack>
                                    <Grid container spacing={ 4 }>
                                        <Grid xs={ 4 }>
                                            <Stack sx={ {
                                                width: '100%',
                                                padding: '8px 16px',
                                                border: '1px solid rgb(226, 229, 237)',
                                                borderRadius: '4px',
                                                minHeight: '56px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                transition: '120ms',
                                                "&:hover": {
                                                    backgroundColor: 'rgb(209,210,213)'
                                                }
                                            } }>
                                                <Text label={ 'توسعه نرم افزار و آی تی' } color={ '#000000' }
                                                      size={ '14px' } weight={ 300 }/>
                                            </Stack>
                                        </Grid>

                                        <Grid xs={ 4 }>
                                            <Stack sx={ {
                                                width: '100%',
                                                padding: '8px 16px',
                                                border: '1px solid rgb(226, 229, 237)',
                                                borderRadius: '4px',
                                                minHeight: '56px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                transition: '120ms',
                                                "&:hover": {
                                                    backgroundColor: 'rgb(209,210,213)'
                                                }
                                            } }>
                                                <Text label={ 'تولید محتوا و ترجمه' } color={ '#000000' }
                                                      size={ '14px' } weight={ 300 }/>
                                            </Stack>
                                        </Grid>

                                        <Grid xs={ 4 }>
                                            <Stack sx={ {
                                                width: '100%',
                                                padding: '8px 16px',
                                                border: '1px solid rgb(226, 229, 237)',
                                                borderRadius: '4px',
                                                minHeight: '56px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                transition: '120ms',
                                                "&:hover": {
                                                    backgroundColor: 'rgb(209,210,213)'
                                                }
                                            } }>
                                                <Text label={ 'طراحی و خلاقیت' } color={ '#000000' }
                                                      size={ '14px' } weight={ 300 }/>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Stack>

                                <Stack gap={ '15px' }>
                                    <Stack>
                                        <Text label={ 'شرح درخواست:' } color={ '#000000' } size={ '16px' }
                                              weight={ 500 }/>
                                    </Stack>

                                    <Stack>
                                        <TextArea/>
                                    </Stack>
                                </Stack>

                                <Stack>
                                    <Button disabled={ loading } onClick={ () => handleSendRequest() }
                                            variant={ 'contained' } color={ 'primary' } sx={ { width: '180px' } }>
                                        ثبت درخواست
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid xs={ 3 }>

                    </Grid>
                </Grid>
            </Container>
        </Stack>
    );
};

export default AddRequestUserPage;
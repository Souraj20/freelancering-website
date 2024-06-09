'use client'

import React, { useCallback, useState } from 'react';
import { Button, Card, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Text from "@/app/components/text/Text";
import ShareIcon from '@mui/icons-material/Share';
import { SkillContainer } from "@/app/(site)/(main)/(projects)/projects/[id]/styles";
import SkillsList from "@/app/(site)/(main)/(projects)/projects/[id]/components/SkillsList";
import FreelancerCard from "@/app/(site)/(main)/(projects)/projects/[id]/components/FreelancerCard";
import { toast } from "react-toastify";

const ProjectPage = () => {

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
        <Container maxWidth={ 'md' } sx={ { marginBottom: '50px' } }>
            <Stack sx={ { marginTop: '100px' } } gap={ '30px' }>
                <Card sx={ {
                    padding: '20px',
                    boxShadow: 'rgba(135, 139, 142, 0.32) 0px 0px 6px 3px',
                    borderTop: '7px solid',
                    borderColor: 'primary.main'
                } }>
                    <Stack gap={ '20px' }>
                        <Stack>
                            <Grid container>
                                <Grid xs={ 6 }>
                                    <Stack sx={ { width: '100%', height: '100%' } } direction={ 'row' }
                                           alignItems={ 'center' }
                                           gap={ '10px' }>
                                        <Stack sx={ {
                                            padding: '7px',
                                            backgroundColor: '#00796B',
                                            borderRadius: '4px',
                                            maxWidth: '100px'
                                        } } alignItems={ 'center' }>
                                            <Text label={ 'پروژه باز' } color={ '#ffffff' } size={ '12px' }
                                                  weight={ 300 }/>
                                        </Stack>

                                        <Stack alignItems={ 'center' }>
                                            <Text label={ 'ترکیبی از قیمت و کیفیت اهمیت دارد.' }
                                                  color={ 'rgb(251, 150, 77)' }
                                                  size={ '14px' } weight={ 300 }/>
                                        </Stack>
                                    </Stack>
                                </Grid>

                                <Grid xs={ 6 }>
                                    <Stack sx={ { width: '100%', height: '100%' } } alignItems={ 'flex-end' }>
                                        <Button sx={ { width: '120px', fontSize: '10px' } } variant={ 'outlined' }
                                                color={ 'primary' } startIcon={ <ShareIcon/> }>
                                            اشتراک گذاری
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Stack>

                        <Stack gap={ '15px' }>
                            <Text label={ 'مبدل تقویم جلالی برای تقویم Sencha Touch' } color={ '#000000' }
                                  size={ '1.6rem' }
                                  weight={ 500 }/>

                            <Typography sx={ { textAlign: 'justify', lineHeight: '2.2rem', fontSize: '16px' } }>
                                مبدل تقویمی که برای دسکتاپ نوشته شده در آدرس

                                https://github.com/behrang/Ext.ux.JalaliDatePlugin

                                هست ، به یک کار مشابه کار بالا برای تبدیل تقویم موبایل به هجری شمسی نیاز دارم

                                صحت محاسبات با توجه به تقویم


                                https://www.time.ir/
                                یا
                                https://new.time.ir/
                                هم در مورد میلادی هم شمسی و هم در مورد روزهای هفته و سالهای کبیسه تعیین خواهد گردید
                            </Typography>
                        </Stack>

                        <Stack gap={ '7px' }>
                            <Stack>
                                <Text label={ 'مهارت های مورد نیاز' } color={ '#000000' } size={ '14px' }
                                      weight={ 600 }/>
                            </Stack>

                            <Stack>
                                <SkillsList/>
                            </Stack>
                        </Stack>

                        <Stack>
                            <Grid container>
                                <Grid xs={ 6 }>
                                    <Stack sx={ { width: '100%' } } direction={ 'row' } gap={ '20px' }>
                                        <Stack>
                                            <Text label={ 'زمان باقی‌مانده برای ارسال پیشنهاد' } color={ '#5F6468' }
                                                  size={ '14px' } weight={ 400 }/>

                                            <Text label={ '14 روز و 17 ساعت' } color={ '#000000' }
                                                  size={ '16px' } weight={ 600 }/>

                                        </Stack>

                                        <Stack>
                                            <Text label={ 'بودجه کارفرما' } color={ '#5F6468' }
                                                  size={ '14px' } weight={ 400 }/>

                                            <Text label={ '2,500,000 تومان' } color={ '#000000' }
                                                  size={ '16px' } weight={ 600 }/>

                                        </Stack>
                                    </Stack>
                                </Grid>

                                <Grid xs={ 6 }>
                                    <Stack sx={ { width: '100%', height: '100%' } } alignItems={ 'flex-end' }
                                           justifyContent={ 'center' }>
                                        <Button disabled={ loading } onClick={ () => handleSendRequest() }
                                                sx={ { width: '170px' } } variant={ 'contained' } color={ 'primary' }>
                                            ارسال پیشنهاد
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Stack>
                </Card>

                <Stack gap={ '30px' }>
                    <Stack>
                        <Text label={ 'فریلنسرهایی که در این پروژه پیشنهاد ارسال کرده‌اند\n' } color={ '#000000' }
                              size={ '22px' } weight={ 600 }/>
                    </Stack>

                    <Grid container spacing={ 2 }>
                        <Grid xs={ 4 }>
                            <Stack sx={ { width: '100%' } }>
                                <FreelancerCard/>
                            </Stack>
                        </Grid>

                        <Grid xs={ 4 }>
                            <Stack sx={ { width: '100%' } }>
                                <FreelancerCard/>
                            </Stack>
                        </Grid>

                        <Grid xs={ 4 }>
                            <Stack sx={ { width: '100%' } }>
                                <FreelancerCard/>
                            </Stack>
                        </Grid>

                        <Grid xs={ 4 }>
                            <Stack sx={ { width: '100%' } }>
                                <FreelancerCard/>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>
        </Container>
    );
};

export default ProjectPage;
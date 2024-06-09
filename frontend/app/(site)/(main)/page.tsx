import Image from "next/image";
import { Button, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import heroHeaderImg from '@/app/assets/images/process-02.png';
import ProjectsSlider from "@/app/components/projects-slider/ProjectsSlider";
import BestFreelancers from "@/app/(site)/(main)/components/BestFreelancers/BestFreelancers";
import employerPic from "@/app/assets/images/employer.webp";
import React from "react";


export default function Home() {
    return (
        <Stack gap={ '100px' }>
            <Stack sx={ {
                height: '84vh',
                backgroundColor: 'rgb(129 93 242 / 0.2)',
                clipPath: ' polygon(0 0, 100% 0, 100% 85%, 0 100%)'
            } }>
                <Grid container>
                    <Grid xs={ 7 }>
                        <Stack sx={ { width: '100%', justifyContent: 'center', height: '70%', padding: '200px 100px' } }
                               gap={ '20px' }>
                            <Typography sx={ { fontSize: '14px' } }>
                                ما بیش از 12000 فرصت شغلی داریم.
                            </Typography>

                            <Typography sx={ { fontSize: '50px', fontVariationSettings: '"wght" 600' } }>
                                مشاغل رویایی خود را پیدا کنید
                                باشغلی
                            </Typography>

                            <Typography sx={ { fontSize: '18px', fontVariationSettings: '"wght" 100' } }>
                                شغل پیدا کنید، رزومه های قابل پیگیری ایجاد کنید و برنامه های خود را غنی کنید. پس از
                                تجزیه و
                                تحلیل نیازهای صنایع مختلف، با دقت ساخته شده است.
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid xs={ 5 }>
                        <Stack sx={ { width: '100%', height: '100%' } }>
                            <img src={ heroHeaderImg.src } alt=""/>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>

            <Stack sx={ { padding: '0 100px' } } gap={ '30px' }>
                <Stack alignItems={ 'center' }>
                    <Typography sx={ { fontSize: '40px', fontVariationSettings: '"wght" 600' } }>
                        چه کارهایی را می‌توانید انجام دهید؟
                    </Typography>
                </Stack>

                <Stack>
                    <Grid container>
                        <ProjectsSlider/>
                    </Grid>
                </Stack>
            </Stack>

            <Stack sx={ { padding: '0 100px' } } gap={ '15px' }>
                <Stack alignItems={ 'center' }>
                    <Typography sx={ { fontSize: '40px', fontVariationSettings: '"wght" 600' } }>
                        بهترین فریلنسر ها:
                    </Typography>
                </Stack>

                <Stack>
                    <Grid container>
                        <BestFreelancers/>
                    </Grid>
                </Stack>
            </Stack>

            <Stack sx={ { padding: '0 100px' } }>
                <Grid sx={ { backgroundColor: '#f8f8f8' } } container spacing={ 2 }>
                    <Grid xs={ 7 }>
                        <Stack sx={ { width: '100%', justifyContent: 'center', height: '70%', padding: '0 100px' } }
                               gap={ '20px' }>
                            <Typography sx={ { fontSize: '14px', color: 'primary.main' } }>
                                برای کارفرمایان
                            </Typography>

                            <Typography sx={ { fontSize: '30px', fontVariationSettings: '"wght" 600' } }>
                                به سادگی افراد متخصص را برای پروژه‌ی خود پیدا کنید
                            </Typography>

                            <Typography sx={ { fontSize: '18px', fontVariationSettings: '"wght" 300' } }>
                                پس از ثبت پرو‌ژه در پونیشا، از هزاران فریلنسر پیشنهاد دریافت می‌کنید، و با بررسی نمونه
                                کارها، می‌توانید بهترین پیشنهاد را انتخاب کنید.
                            </Typography>
                        </Stack>

                        <Stack sx={ { width: '100%', padding: '0 100px' } }>
                            <Button sx={{ width: '180px' }} variant={ 'contained' } color={ 'primary' }>
                                ایجاد پروژه
                            </Button>
                        </Stack>
                    </Grid>

                    <Grid xs={ 5 }>
                        <Image style={ { width: '100%', height: 'auto' } } width={ 0 } height={ 0 }
                               src={ employerPic.src } alt={ '' }/>
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
    );
}

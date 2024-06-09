'use client'

import * as React from 'react';
import './navbar.css';
import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2";
import { Stack, Typography } from "@mui/material";

const Navbar = () => {

    return (
        <nav className="navbar">
            <ul className="navbar__nav nav">
                <li className="nav__item">
                    <Link className="nav__link" href="/">خانه</Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link" href="/projects">پروژه ها</Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link" href="/freelancers">فریلنسر ها</Link>

                    <ul className="navbar-dropdown dropdown">
                        <Grid container>
                            <Grid xs={ 6 }>
                                <Stack sx={ { width: '100%', padding: '20px' } } gap={ '15px' }>
                                    <Stack sx={ {
                                        minWidth: '100px',
                                        border: '1px solid #e0e0e2',
                                        borderRadius: '5px',
                                        padding: '22px',
                                        position: 'relative',
                                        '&::before': {
                                            content: '""',
                                            borderLeft: '5px solid #D84315',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '5px',
                                            height: '100%',
                                            borderTopLeftRadius: '5px',
                                            borderBottomLeftRadius: '5px',
                                            zIndex: '-1'
                                        }
                                    } }>
                                        <Link href={ '/projects' }>
                                            <Typography sx={ { color: '#373737' } }>
                                                مشاهده تمام پروژه ها
                                            </Typography>
                                        </Link>
                                    </Stack>

                                    <Stack sx={ {
                                        minWidth: '100px',
                                        border: '1px solid #e0e0e2',
                                        borderRadius: '5px',
                                        padding: '22px',
                                        position: 'relative',
                                        '&::before': {
                                            content: '""',
                                            borderLeft: '5px solid #00897B',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '5px',
                                            height: '100%',
                                            borderTopLeftRadius: '5px',
                                            borderBottomLeftRadius: '5px',
                                            zIndex: '-1'
                                        }
                                    } }>
                                        <Link href={ '/freelancers' }>
                                            <Typography sx={ { color: '#373737' } }>
                                                مشاهده تمام فریلنسر ها
                                            </Typography>
                                        </Link>
                                    </Stack>
                                </Stack>
                            </Grid>

                            <Grid xs={ 6 }>
                                <Stack sx={ { width: '100%', height: '100%', padding: '22px' } } gap={ '30px' }>
                                    <Typography>
                                        آمار
                                    </Typography>

                                    <Typography>
                                        240 پروژه ثبت شده است
                                    </Typography>

                                    <Typography>
                                        230 کارفرما پروژه خود را ثبت کرده اند
                                    </Typography>

                                    <Typography>
                                        200 فریلنسر پروژه های پونیشا را انجام داده اند
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </ul>
                </li>

                <li className="nav__item">
                    <Link className="nav__link" href="#">درباره ی ما</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
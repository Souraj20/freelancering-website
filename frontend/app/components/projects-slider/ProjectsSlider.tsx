'use client'

import React from 'react';
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "@/app/components/project-card/ProjectCard";

const ProjectsSlider = () => {
    return (
        <Swiper
            style={ { padding: '0 0 50px 0' } }
            freeMode={ true }
            loop={ true }
            pagination={ {
                clickable: true,
            } }
            modules={ [Pagination, Autoplay] }
            autoplay={ {
                delay: 2000,
                disableOnInteraction: false,
            } }
            breakpoints={ {
                360: {
                    slidesPerView: 2
                },
                1200: {
                    slidesPerView: 4
                }
            } }
            spaceBetween={ 15 }
        >
            <SwiperSlide
                style={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }
            >
                <ProjectCard/>
            </SwiperSlide>

            <SwiperSlide
                style={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }
            >
                <ProjectCard/>
            </SwiperSlide>

            <SwiperSlide
                style={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }
            >
                <ProjectCard/>
            </SwiperSlide>

            <SwiperSlide
                style={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }
            >
                <ProjectCard/>
            </SwiperSlide>

            <SwiperSlide
                style={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }
            >
                <ProjectCard/>
            </SwiperSlide>

            <SwiperSlide
                style={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }
            >
                <ProjectCard/>
            </SwiperSlide>

            <SwiperSlide
                style={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }
            >
                <ProjectCard/>
            </SwiperSlide>

            <SwiperSlide
                style={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }
            >
                <ProjectCard/>
            </SwiperSlide>
        </Swiper>
    );
};

export default ProjectsSlider;
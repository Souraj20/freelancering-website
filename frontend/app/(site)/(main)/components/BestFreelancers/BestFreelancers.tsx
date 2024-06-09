'use client'

import React from 'react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import FreelancerCard from "@/app/components/freelancer-card/FreelancerCard";

const BestFreelancers = () => {
    return (
        <Swiper navigation={ true } modules={ [Navigation] } className="mySwiper">
            <SwiperSlide>
                <FreelancerCard/>
            </SwiperSlide>

            <SwiperSlide>
                <FreelancerCard/>
            </SwiperSlide>

            <SwiperSlide>
                <FreelancerCard/>
            </SwiperSlide>

            <SwiperSlide>
                <FreelancerCard/>
            </SwiperSlide>

            <SwiperSlide>
                <FreelancerCard/>
            </SwiperSlide>
        </Swiper>
    );
};

export default BestFreelancers;
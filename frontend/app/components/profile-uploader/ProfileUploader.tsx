'use client'
import React from 'react';
import { Avatar, styled } from "@mui/material";
import userImg from "@/app/assets/images/user/img-01.jpg";

interface ProfileUploaderProps {
    id: string;
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const ProfileUploader = ({ id }: ProfileUploaderProps) => {
    return (
        <Avatar
            htmlFor={ id }
            component={ 'label' }
            alt="Remy Sharp"
            src={ userImg.src }
            sx={ { width: 130, height: 130 } }
        >
            <VisuallyHiddenInput id={ id } type="file"/>
        </Avatar>
    );
};

export default ProfileUploader;
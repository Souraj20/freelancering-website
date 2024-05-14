'use client'
import React from 'react';
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { TextField } from "@mui/material";

const PersianCalendar = () => {
    return (
        <DatePicker
            calendar={ persian }
            locale={ persian_fa }
            calendarPosition="bottom-center"
            render={ <TextField label={'زمان تحویل'} sx={{ width: '100%' }} InputLabelProps={ { shrink: true } }/> }
        />
    );
};

export default PersianCalendar;
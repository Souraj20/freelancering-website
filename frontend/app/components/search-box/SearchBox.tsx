'use client'
import React from 'react';
import { Autocomplete, TextField } from "@mui/material";

interface SearchBoxProps {
    label: string;
    items: { id: number, title: string }[]
}

const SearchBox = ({ label, items }: SearchBoxProps) => {
    return (
        <Autocomplete renderInput={ (params: any) => (
            <TextField
                { ...params }
                sx={ {
                    '& .MuiOutlinedInput-root': { padding: '5px' }
                } }
                InputProps={ {
                    ...params.InputProps,
                    type: 'search',
                } }
                placeholder={ label }
            />
        ) } options={ items.map((option) => option.title) }/>
    );
};

export default SearchBox;
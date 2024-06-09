'use client'
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { CategoryItem } from "@/app/(site)/(main)/(projects)/projects/components/styles";

interface ProjectCategoryProps {
    defaultValue: string;
    items: Item[];
}

interface Item {
    label: string;
    value: string;
}

const CustomSelect = ({ items, defaultValue }: ProjectCategoryProps) => {

    const [item, setItem] = React.useState<string>(defaultValue);

    const handleChange = (event: SelectChangeEvent) => {
        setItem(event.target.value as string);
    };

    return (
        <Box sx={ { width: '100%' } }>
            <FormControl fullWidth>
                <Select
                    value={ item }
                    onChange={ handleChange }>
                    {
                        items.map((item) => (
                            <CategoryItem value={ item.value }>
                                { item.label }
                            </CategoryItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    );
};

export default CustomSelect;
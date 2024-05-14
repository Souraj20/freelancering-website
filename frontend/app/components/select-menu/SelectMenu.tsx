import {
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface SelectMenuProps {
    id: string;
    label: string;
    defaultValue: string;
    register: UseFormRegister<FieldValues>;
    names: NameProps[];
}

interface NameProps {
    label: string;
    value: string;
}

const SelectMenu = ({ id, label, names, defaultValue, register }: SelectMenuProps) => {

    const [name, setName] = useState<string>(defaultValue);

    const handleChange = (event: SelectChangeEvent) => {
        setName(event.target.value as string);
    };

    return (
        <FormControl>
            <InputLabel id="demo-multiple-name-label">{ label }</InputLabel>
            <Select
                { ...register(id) }
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={ name }
                onChange={ handleChange }
                input={ <OutlinedInput label={ label }/> }
            >
                {
                    names.map((name) => (
                        <MenuItem value={ name.value }>
                            { name.label }
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
}

export default SelectMenu;
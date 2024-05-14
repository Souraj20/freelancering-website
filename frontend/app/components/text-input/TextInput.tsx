'use client'

import { TextField } from "@mui/material";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextInputProps {
    id: string;
    type?: string;
    label: string;
    required: boolean;
    isShrink: boolean;
    width: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const TextInput = ({
                       id,
                       label,
                       type = 'text',
                       isShrink = true,
                       width = '100%',
                       register,
                       errors,
                       required
                   }: TextInputProps) => {
    return (
        <TextField type={ type } helperText={ errors && errors[id]?.message as string } sx={ { width } }
                   InputLabelProps={ { shrink: isShrink } }
                   label={ label } { ...register(id, { required }) } />
    );
}

export default TextInput;
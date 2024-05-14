'use client'

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import { useState } from "react";
import Register from "@/app/(site)/(auth)/auth/components/Register";
import Login from "@/app/(site)/(auth)/auth/components/Login";

type FormStatus = 'LOGIN' | 'REGISTER';

const AuthForm = () => {

    const [formType, setFormType] = useState<FormStatus>('LOGIN');
    const { handleSubmit } = useForm<FieldValues>()

    const handleChange = (event: React.SyntheticEvent, newValue: FormStatus) => {
        setFormType(newValue);
    };

    return (
        <TabContext value={ formType }>
            <TabList
                sx={ {
                    width: '100%',
                    justifyContent: 'space-between',
                    "& .MuiTabs-flexContainer": {
                        padding: "10px 0 10px 20px",
                    },
                    "& .Mui-selected": {
                        backgroundColor: "primary.main",
                        color: "#ffffff !important",
                    },
                    "& .MuiTabs-indicator": {
                        display: "none",
                    },
                } }
                onChange={ handleChange } aria-label="lab API tabs example">
                <Tab sx={ {
                    width: '45%',
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    backgroundColor: "#ffffff",
                    marginRight: "15px",
                    borderRadius: "3.796px",
                    color: "#373737",
                } } label="ورود" value="LOGIN" />

                <Tab sx={ {
                    width: '45%',
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    backgroundColor: "#ffffff",
                    marginRight: "15px",
                    borderRadius: "3.796px",
                    color: "#373737",
                } } label="ثبت نام" value="REGISTER" />
            </TabList>

            <TabPanel value="LOGIN">
                <Login />
            </TabPanel>

            <TabPanel value="REGISTER">
                <Register />
            </TabPanel>
        </TabContext>
    );
}

export default AuthForm;
import { Card, Stack } from "@mui/material";
import AuthForm from "@/app/(site)/(auth)/auth/components/AuthForm";

const AuthPage = () => {
    return (
        <Stack sx={ { minHeight: '100vh', justifyContent: 'center', alignItems: 'center' } }>
            <Card sx={ { maxWidth: '450px', minWidth: '450px' } }>
                <AuthForm />
            </Card>
        </Stack>
    );
}

export default AuthPage;
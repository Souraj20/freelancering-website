import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Stack, Typography } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";

const ContentErrorHandler = ({ children }: { children: React.ReactNode }) => {

    return (
        <ErrorBoundary
            fallbackRender={ () => (
                <Stack sx={ { height: '200px' } } alignItems={ 'center' } justifyContent={ 'center' }>
                    <Typography>
                        خطا هنگام دریافت اطلاعات .... لطفا صفحه را مجددا بارگذاری کنید.
                    </Typography>
                </Stack>
            ) }
        >
            <React.Suspense fallback={
                <Stack direction={ 'row' } justifyContent={ 'center' } alignItems={ 'center' }
                       sx={ { width: '100%', height: '200px' } }>
                    <RotatingLines
                        visible={ true }
                        width="80"
                        strokeWidth="5"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                    />
                </Stack>
            }>
                { children }
            </React.Suspense>
        </ErrorBoundary>
    );
}

export default ContentErrorHandler;
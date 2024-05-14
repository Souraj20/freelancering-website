'use client'
import React, { useEffect, useState } from "react";

const IsMounted = ({ children }: { children: React.ReactNode }) => {

    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true)
    }, []);

    if (!isMounted)
        return null;

    return (
        <>
            { children }
        </>
    );
}

export default IsMounted;
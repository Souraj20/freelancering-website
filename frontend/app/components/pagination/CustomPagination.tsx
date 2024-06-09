'use client'
import { Pagination } from "@mui/material";
import { PaginationContainer } from "./styles";

interface CustomPaginationProps {
    count?: number;
    onChange?: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
                                                               count,
                                                               onChange,
                                                           }) => {
    return (
        <PaginationContainer>
            <Pagination
                size={'large'}
                color="primary"
                count={ count }
                onChange={ onChange }
            />
        </PaginationContainer>
    );
};

export default CustomPagination;

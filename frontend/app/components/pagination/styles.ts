import styled from "@emotion/styled";

export const PaginationContainer = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: center;

    & .MuiPagination-ul li:first-child button,
    & .MuiPagination-ul li:last-child button {
        border: 1px solid #00293f;
        border-radius: 3px;
    }
`;
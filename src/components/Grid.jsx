import styled from "@emotion/styled";
import { Grid, TableCell, TableContainer } from "@mui/material";

export const HeaderGrid = styled(Grid)`
    border: 1px solid black;
    text-align: center;
    padding: 20px;
    display: flex;
    justify-content: space-between;
`;

export const TableGrid = styled(Grid)`
    display: flex;
    justify-content: center;
`;

export const TableContainerGrid = styled(TableContainer)`
    width: 500px;
    border-radius: 20px;
    background: whitesmoke;
`;

export const TableCellGrid = styled(TableCell)`
    font-weight: bold;
    background: lightgray;
`;
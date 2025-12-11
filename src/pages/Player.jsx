import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { HeaderGrid, TableCellGrid, TableContainerGrid, TableGrid } from "../components/Grid";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCardUrl, getPlayCardToken } from "../api/bingo";

export default function Player() {
    const navigate = useNavigate();
    const [bcode, setBcode] = useState("");
    const [token, setToken] = useState(null);
    const [tokenStatus, setTokenStatus] = useState(false);

    const [B, setB] = useState([]);
    const [I, setI] = useState([]);
    const [N, setN] = useState([]);
    const [G, setG] = useState([]);
    const [O, setO] = useState([]);

    const handleHost = () => {
        navigate("/");
    };

    const handleEnter = async () => {
        try {
            const res = await getCardUrl(bcode);
            if (res.data == 0) {
                alert("Game code not found.");
                return;
            }

            setB(res.data.card.B);
            setI(res.data.card.I);
            setN(res.data.card.N);
            setG(res.data.card.G);
            setO(res.data.card.O);
            setToken(res.data.playcard_token);

        } catch (err) {
            console.error(err);
            alert("Failed to fetch Bingo card.");
        }
    };

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const res = await getPlayCardToken(token);
                if (res.data == 1)
                    setTokenStatus(true);
            } catch (err) {
                console.error(err);
            }
        }

        fetchToken();
    }, [token]);

    return (
        <Grid container spacing={5}>
            <HeaderGrid size={12}>
                <Typography variant="h5">Play Bingo</Typography>
                <Button variant="outlined" onClick={handleHost}>Host</Button>
            </HeaderGrid>

            <Grid size={12} sx={{ textAlign: "center" }}>
                <TextField 
                    variant="outlined" 
                    placeholder="Enter bingo code"
                    value={bcode}
                    onChange={(e) => setBcode(e.target.value)} />
                <Button onClick={handleEnter} variant="contained" sx={{ height: "100%" }}>Enter</Button>
            </Grid>

            <Grid size={12} sx={{ textAlign: "center" }}>
                <b>Play Card Token: {token}</b>
                {(token) ? (tokenStatus ? 
                    <Grid>Congratulations! You got a winning card.</Grid> :
                    <Grid>Sorry. Your card is not a winning card.</Grid>) :
                    <Grid>Enter a bingo code</Grid>
                }
            </Grid>

            <TableGrid container spacing={2} size={12}>
                <TableContainerGrid>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCellGrid align="center">B</TableCellGrid>
                                <TableCellGrid align="center">I</TableCellGrid>
                                <TableCellGrid align="center">N</TableCellGrid>
                                <TableCellGrid align="center">G</TableCellGrid>
                                <TableCellGrid align="center">O</TableCellGrid>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {B.map((_, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    <TableCell align="center">{B[rowIndex]}</TableCell>
                                    <TableCell align="center">{I[rowIndex]}</TableCell>
                                    <TableCell align="center">{N[rowIndex]}</TableCell>
                                    <TableCell align="center">{G[rowIndex]}</TableCell>
                                    <TableCell align="center">{O[rowIndex]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerGrid>
            </TableGrid>
        </Grid>
    );
}
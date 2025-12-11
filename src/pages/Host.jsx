import { Button, Typography, Grid } from "@mui/material";
import { HeaderGrid } from "../components/Grid";
import { useNavigate } from "react-router-dom";

export default function Host() {
    const navigate = useNavigate();

    const handlePlay = () => {
        navigate("/player");
    };

    return (
        <Grid container spacing={5}>
        <HeaderGrid size={12}>
            <Typography variant="h5">Bingo Host</Typography>
            <Button variant="outlined" onClick={handlePlay}>Play</Button>
        </HeaderGrid>

        <Grid container size={12}>
            <iframe
            src="http://www.hyeumine.com/bingodashboard.php?bcode=2lLqSLyH"
            style={{
                width: "100%",
                height: "80vh",
                border: "none",
                borderRadius: "8px",
            }}
            title="Bingo Dashboard"
            />
        </Grid>
        </Grid>
    );
}

import { Box, Container, CssBaseline, Typography } from "@mui/material";

const App = () => {
    return(
        <Box>
            <Container/>
            <CssBaseline/>
            <Box sx={{display: 'flex', flexDirection: 'column' , justifyContent: 'center', alignItems: 'center',height: '100vh'}}>
                 <Box>
                    <Typography variant="h2">TS + webpack + docker</Typography>
                 </Box>
                 <Box mt={15}>
                     <Typography variant="h3">Matvey Khodosevich</Typography>
                </Box>
            </Box>
            
        </Box>
    )
}

export default App;
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import Divider from '@mui/material/Divider';

export default function ButtonAppBar() {

  let navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div style={{display:"flex"}}>
            <Typography variant="h5" component="div" sx={{cursor:"pointer"}} onClick={() => navigate("/")}>
              Coupon usage test
            </Typography>
            <Divider orientation='vertical' flexItem sx={{color:"black", marginX:"15px"}} />
          </div>
          <div style={{display:"flex", fontSize:"1.2rem", flexGrow: 1, color:"#b0bec5"}}>
            blah
          </div>
          <div style={{ backgroundColor: "", display:"flex", gap:"5px" }}>
            <Button color="inherit" variant="contained" sx={{backgroundColor:"#00e676"}} onClick={() => navigate("/login")}>Login</Button>
            <Button color="inherit" variant="contained" sx={{backgroundColor:"#f44336"}} onClick={() => navigate("/login")}>Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

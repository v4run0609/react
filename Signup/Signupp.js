import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme} from '@mui/material/styles';
import '../Signup/Signup.css'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function SignUp() {
  const [mail,setMail]=React.useState("");
  const [pasw,setPasw]=React.useState("");
  const [lname,setLname]=React.useState("");
  const [fname,setFname]=React.useState("");
  const next=useNavigate();
  const Home1 =async(event)=>{
    event.preventDefault();
    const dat={
        last: lname,
        pass: pasw,
        user: mail,
        first: fname,
    }
    console.log("==========================")
    try {
      await axios.post('https://retoolapi.dev/wJpwxa/login', dat);
      next("/login");
      // Perform any further actions here upon successful submission
    } catch (error) {
      console.error('Error submitting data:', error.message);
      // Handle errors or show user feedback
    }
  }

 const handlemail = (e) => {
    setMail(e.target.value)
 }
 const handlepasw = (e) => {
    setPasw(e.target.value)
 }
 const handleln = (e) => {
    setLname(e.target.value)
 }
 const handlefn = (e) => {
    setFname(e.target.value)
 }
  return (
   <div>
     <form className='tt'>
        <div style={{
                borderLeft: '2px solid black',
                height: '860px',
                left: '50%',
                top: '0px',
                position: 'absolute'
            }}>
        </div>
          <div style={{
                  borderLeft: '20px solid ',
                  color:"#4169E1",
                  height: '150px',
                  left: '11%',
                  top: '200px',
                  position: 'absolute'
              }}/>
            <h1  className="kl" style={{fontFamily:'Arial, Helvetica, sans-serif',fontSize:"40px"}}>SignUp for better</h1>
            <h1 className="rl" style={{fontFamily:'Arial, Helvetica, sans-serif',fontSize:"40px"}}>Experience</h1>
            <div className='kj'>
            <img className='jj' src='./Images/logo.png'></img>
            </div>
             <div className='ll'>
            <Container component="main" maxWidth="xs">
                <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                >
                  
                  <p className='ba'>www.santrack.com</p>
                  <div className='mm'>
                          <Box component="form" noValidate  sx={{ mt: 3 }}>
                          <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                              <TextField
                              autoComplete="given-name"
                              name="firstName"
                              required
                              fullWidth
                              id="firstName"
                              label="First Name"
                              autoFocus
                              value={fname}
                              onChange={handlefn}
                              />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                              <TextField
                              required
                              fullWidth
                              id="lastName"
                              label="Last Name"
                              name="lastName"
                              autoComplete="family-name"
                              value={lname}
                              onChange={handleln}
                              />
                          </Grid>
                          <Grid item xs={12}>
                              <TextField
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              name="email"
                              autoComplete="email"
                              value={mail}
                              onChange={handlemail}
                              />
                          </Grid>
                          <Grid item xs={12}>
                              <TextField
                              required
                              fullWidth
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                              autoComplete="new-password"
                              value={pasw}
                              onChange={handlepasw}
                              />
                          </Grid>
                          <Grid item xs={12}>
                              <FormControlLabel
                              control={<Checkbox value="allowExtraEmails" color="primary" />}
                              label="I want to receive inspiration, marketing promotions and updates via email."
                              />
                          </Grid>
                          </Grid>
                          <Button onClick={Home1}
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                          >
                          Sign Up
                          </Button>
                          
                      </Box>
                      </div>
                      </Box>
                  </Container>
             </div>
        </form>
            </div>
   
  );
}
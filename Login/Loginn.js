import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Loginnn.css'
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect'
import axios from 'axios';


const defaultTheme = createTheme();

export default function SignIn() {
  const [name,setName]=React.useState("");
  const [pasw,setPasw]=React.useState("");
  const [ser,setSer]=React.useState(false);
  const [view,setView]=React.useState("")

  const nav=useNavigate();
  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      nav("/Home");
      const response = await axios.get("https://retoolapi.dev/wJpwxa/login");
      let userFound = false;
      for (let i = 0; i < response.data.length; i++) {
        const e = response.data[i].user;
        const p = response.data[i].pass;
        console.log(e,">>>>>>>>>",name,"---------",pasw,"<<<<<<<<<<<<",p)
        if (name === e) {
          if(pasw === p){
          userFound = true;
          setSer(userFound);
          setView(response.data[i].first);
          break;
          }
        }
        
      }
      console.log(ser,'=========ser')
    } 
    catch (error) {
      console.log(error);
    }
    if(ser){
      const usr={email:view}
    }
  }

  
  const handleChange = (e) => {
    setName(e.target.value)
  }
  const handlepass = (e) =>{
    setPasw(e.target.value)
  }

  return (
    <div className='st'> 
        <form className='ft'>
          <img className='img2' src='./Images/logo.png'></img>
        <div style={{
            borderLeft: '20px solid ',
            color:"#4169E1",
            height: '150px',
            left: '16%',
            top: '200px',
            position: 'absolute'
        }}/>
      <h1 className='san' >
        <Typewriter
            options={{
              strings:[
                "Welcome to"
              ],
              autoStart :true,
              loop : false,
            }}/>
         </h1>
      <h1 className='at' >
        <Typewriter
            options={{
              strings:[
                "Santrack"
              ],
              autoStart :true,
              loop : false,
            }}/></h1>
      <p className='web'>www.santrack.com</p>
        <div style={{
            borderLeft: '2px solid black',
            height: '860px',
            left: '50%',
            top: '0px',
            position: 'absolute'
        }}>
    </div>
    <div className='dt'>
            <Container component="main" maxWidth="xs">
                <Box
                  sx={{
                    marginLeft:10,
                    marginTop: 8,
                    marginright:1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                  >
                  <Typography component="h1" variant="h5">
                   <b> Sign in</b>
                  </Typography>
                  <Box  noValidate sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="text"
                      label="Username"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      value={name}
                      onChange={handleChange}
                      />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={pasw}
                      onChange={handlepass}
                      />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                      />
                    <Button
                      type="submit"
                      fullWidth
                      onClick={handleSubmit}
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      >
                      Sign In
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>

              </Container>
              </div>
            
            </form>
        </div>
  );
}
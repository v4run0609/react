
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Newhome.css'

import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function FormRow(){

    const loc=useLocation();
    const dat=loc.state;
    const [mail,setMail]=useState()

    React.useEffect(() => {
        if(dat && dat.email){
            setMail(dat.email)
        }
    }, [dat]);
    const[searchKey,setSearchKey]=useState(false)
    const disp=()=>{
        setSearchKey(true)
    }

    const next=useNavigate();
    const Sine =()=>{
        next("/audio");
    }
    const Home2 =()=>{
        alert("Logined")
        next("/Home");
    }
    const fro =()=>{

        next("/sett");
    }

  return (
    <div className='info'>
        <div>

        <div className='lleftt'>
        <Grid item xs={11} style={{color:'grey'}}>
        <Item>
            <h1 style={{ fontFamily: 'curFantasy	Copperplatee', fontSize: '35px', fontWeight: 'normal', color: 'black', textShadow: '1px 1px #ccc' }}>Santrack</h1>
            <Button color="primary" onClick={Home2} ><FaHome size="40px" /></Button>
            <br></br>
            <Button  onClick={disp} color="secondary"><IoSearch size="40px" /></Button>
            <Button onClick={fro} color="secondary"><IoMdSettings size="40px" /></Button>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
         </Item>
      </Grid>
        </div>
        </div>

        <div>
        

        <h2 className='hello' style={{color:"white",fontFamily:'Arial, Helvetica, sans-serif'}}>Welcome {mail}</h2>
 
      { searchKey &&
            <input style={{marginLeft:"1100px",width:"7cm", paddingTop:"20px", borderRadius:'100px'}}  type='text'></input>

      }

        </div>



    







        <div className='cont' style={{marginTop:"100px",marginLeft:"220px"}}>
        
        <React.Fragment>
            <Grid className='cat' item xs={3}>
                <Item> <Card sx={{ maxWidth: 305 }}>
            <CardMedia
                sx={{ height: 200 }}
                image="../Images/wannabeyours.png"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Wanna be Yours
                </Typography>
                <Typography variant="body2" color="text.secondary">
                The adaptation, produced by James Ford and Ross Orton!
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={Sine}  size="small">View</Button>
                
            </CardActions>
            </Card></Item>
            </Grid>

            <Grid className='cat' item xs={3}>
                <Item> <Card sx={{ maxWidth: 305 }}>
            <CardMedia
                sx={{ height: 200 }}
                image="../Images/eminem.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                SuperMan
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Eminem, is an American rapper All time greatest
                </Typography>
            </CardContent>
            <CardActions>
                <Button  onClick={Sine}  size="small">View</Button>
                
            </CardActions>
            </Card></Item>
            </Grid>

            <Grid className='cat' item xs={3}>
                <Item> <Card sx={{ maxWidth: 305 }}>
            <CardMedia
                sx={{ height: 200 }}
                image="../Images/heartstero.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Stereo Hearts
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles
                </Typography>
            </CardContent>
            <CardActions>
                <Button   onClick={Sine} size="small">View</Button>
            </CardActions>
            </Card></Item>
            </Grid>

            <Grid className='cat' item xs={3}>
                <Item> <Card sx={{ maxWidth: 305 }}>
            <CardMedia
                sx={{ height: 200 }}
                image="../Images/2570211.png"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Heart of Love
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles
                </Typography>
            </CardContent>
            <CardActions>
                <Button  onClick={Sine}  size="small">View</Button>
            </CardActions>
            </Card></Item>
            </Grid>

            <Grid className='cat' item xs={3}>
                <Item> <Card sx={{ maxWidth: 305 }}>
            <CardMedia
                sx={{ height: 200 }}
                image="../Images/eminem.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Eminem Songs
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles
                </Typography>
            </CardContent>
            <CardActions>
                <Button  onClick={Sine}  size="small">View</Button>
            </CardActions>
            </Card></Item>
            </Grid>


        </React.Fragment>
        </div>
        <div className='contt' style={{marginLeft:"220px"}}>
        <React.Fragment>
            <Grid className='cat' item xs={3}>
                <Item> <Card sx={{ maxWidth: 305 }}>
            <CardMedia
                sx={{ height: 200 }}
                image="../Images/gym.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Gym playlist
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Get the Muscle and Veins pumped..!!
                </Typography>
            </CardContent>
            <CardActions>
                <Button  onClick={Sine}  size="small">View</Button>
            </CardActions>
            </Card></Item>
            </Grid>

            <Grid className='cat' item xs={3}>
                <Item> <Card sx={{ maxWidth: 305 }}>
            <CardMedia
                sx={{ height: 200 }}
                image="../Images/happy.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Happy vibes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles
                </Typography>
            </CardContent>
            <CardActions>
                <Button  onClick={Sine}  size="small">View</Button>
            </CardActions>
            </Card></Item>
            </Grid>

            <Grid className='cat' item xs={3}>
                <Item> <Card sx={{ maxWidth: 305 }}>
            <CardMedia
                sx={{ height: 200 }}
                image="../Images/kollywood.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Kollywood
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles
                </Typography>
            </CardContent>
            <CardActions>
                <Button   onClick={Sine} size="small">View</Button>
            </CardActions>
            </Card></Item>
            </Grid>

            <Grid  className='cat' item xs={3}>
                <Item> <Card sx={{ maxWidth: 305 }}>
            <CardMedia
                sx={{ height: 200 }}
                image="../Images/yuvan.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Yuvan hits
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles
                </Typography>
            </CardContent>
            <CardActions>
                <Button   onClick={Sine} size="small">View</Button>
            </CardActions>
            </Card></Item>
            </Grid>

            <Grid className='cat' item xs={3}>
                <Item> <Card sx={{ maxWidth: 305 }}>
            <CardMedia
                sx={{ height: 200 }}
                image="../Images/melody.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Melody vibes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
            </CardActions>
            </Card></Item>
            </Grid>

    </React.Fragment>
    </div>
    </div>
  );
}

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid container item spacing={3}>
          <FormRow />
          
        </Grid>
      </Grid>
    </Box>
    
  );
}
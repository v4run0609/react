import  React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import FacebookIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PlayCircleFilledWhiteTwoToneIcon from '@mui/icons-material/PlayCircleFilledWhiteTwoTone';
import LibraryMusicTwoToneIcon from '@mui/icons-material/LibraryMusicTwoTone';
import "../Settings/Settings.css"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';





export default function SwitchListSecondary() {
  const navigate=useNavigate()
   
  const handlepremium =()=>{
    navigate("/pre")
  }

  return (
    <div>
      <div className='aa'>
        <List 
          sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}
         >
          <h1 className='bb'>Settings</h1>
          <ListItem>
            <ListItemIcon>
              <InstagramIcon />
            </ListItemIcon>
            <ListItemText  primary="Connect to Instagram" />
            <Switch
              edge="end"
              
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TwitterIcon />
            </ListItemIcon>
            <ListItemText  primary="Connect to Twitter" />
            <Switch
              edge="end"
              
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText  primary="Link to Email" />
            <Switch
              edge="end"
              
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BluetoothIcon/>
            </ListItemIcon>
            <ListItemText  primary="Bluetooth" />
            <Switch
              edge="end"
              
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PlayCircleFilledWhiteTwoToneIcon/>
            </ListItemIcon>
            <ListItemText  primary="Autoplay" />
            <Switch
              edge="end"
              
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LibraryMusicTwoToneIcon/>
            </ListItemIcon>
            <ListItemText  primary="Your Library" />
            <Switch
              edge="end"
              
            />
          </ListItem>
          
          <ListItem>
          
            <ListItemIcon>
              <FacebookIcon />
            </ListItemIcon>
            <ListItemText  primary="Connect to facebook" />
            <Switch
              edge="end"
              
            /><br></br>
          </ListItem>
          <br></br>
        </List>
        <div className='pri'>
      </div>
        </div>
<h1 className='cc'>For Better Experiences</h1>
        <div className='dd'>
<Button onClick={handlepremium} variant="outlined" color="secondary">GO PREMIUM</Button>
        </div>
        </div>
  
       
  );
}
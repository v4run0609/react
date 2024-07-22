import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import "../Premium/Premium.css";
import DiamondIcon from '@mui/icons-material/Diamond';
import { useNavigate } from 'react-router-dom';



const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 220,
  height: 320,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function Variants() {
    const navigate=useNavigate()
    const handlenext =()=>{
        navigate("/pay")
        
    }
  return (
    <div className='prem'>

        <h1><center>GO PREMIUM <DiamondIcon/></center></h1><br></br>
        
      <Stack direction="row" spacing={5} float>
       
      <DemoPaper onClick={handlenext} className="ee" square={false} >
        <h1>Rs.49 / Month</h1>
        
        <h4>Ad-free music</h4>
        <h4>One Phone</h4>
        <h4>One windows</h4>
        
        
        
        </DemoPaper>
      <DemoPaper onClick={handlenext} className="ee" square={false}>
      <h1>Rs.99 / Month</h1>
       
        <h4>Ad-free music</h4>
        <h4>Two Phones</h4>
        <h4>One windows</h4>
        <h4>Share playlists with friends</h4>
      </DemoPaper>

      <DemoPaper onClick={handlenext} className="ee" square={false}>
      <h1>Rs.499 / Year</h1>
        
        <h4>Ad-free music</h4>
        <h4>Three Phone</h4>
        <h4>Two windows</h4>
        <h4>Listen Together on different gadgets</h4>
        <h4>Share playlists with friends</h4>
      </DemoPaper>

      <DemoPaper onClick={handlenext} className="ee"  square={false}>
      <h1>Rs.699 / Year</h1>
        
        <h4>Ad-free music</h4>
        <h4>One Phone</h4>
        <h4>One windows</h4>
        <h4>Listen Together on different gadgets</h4>
        <h4>Share playlists with friends</h4>
        <h4>Download Music</h4>
      </DemoPaper>
     
    </Stack>
    
    </div>
  );
}


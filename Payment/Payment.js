import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import "../Payment/Payment.css";
export default function PaymentForm() {

  const handlesubscription = () => {
    // Gather form data
    const cardName = document.getElementById('cardName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expDate = document.getElementById('expDate').value;
    const cvv = document.getElementById('cvv').value;
    const saveCard = document.getElementsByName('saveCard')[0].checked;

    // Prepare the data object to be sent
    const formData = {
      cardName,
      cardNumber,
      expDate,
      cvv,
      saveCard
    };

    // Post data to the new API endpoint
    fetch('https://apigenerator.dronahq.com/api/BXTPwRmS/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data posted successfully:', data);
        alert('Enjoy Premium'); // Show success message
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        alert('There was an error processing your payment. Please try again later.');
      });
  };

  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 400,
    height: 400,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));


  return (
    <React.Fragment>
      <h1 style={{ marginLeft: '50%', marginTop: '5%', color: 'white' }}>Payment</h1>
      <DemoPaper className='hh'>
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <TextField
              required
              id="cardName"
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="expDate"
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
            />
          </Grid>
          <Grid item xs={16} mt={3} mr={6} >
            <FormControlLabel class="gg"
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="Remember credit card details for next time"
            />
          </Grid>
        </Grid>
      </DemoPaper>
      <br></br>
      <div className='ff'>
        <Button onClick={handlesubscription} variant="outlined">Confirm Payment</Button>
      </div>
    </React.Fragment>
  );
}

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import max from '../Components/Images/max.jpg'
import './ImageGridTwo.css';
import { Button } from 'bootstrap';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ImageGridTwo() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container my={1}>
            <Grid item xs={12} sm={3}>
      <div className='photo3'>
          <img className='maxi' src={max} alt="max"></img>
      </div>
      </Grid>
      <Grid item xs={12} sm={6}>
      <div className='max3'>
                <h1>Max Smith</h1>
                <p>Developer  SF, Bay Area max@at.com</p>
                <div className='box11' ><h1>$ 4,500</h1>
                <p>Earnings</p></div>
                <div className='box21' ><h1>80</h1>
                <p>Projects</p></div>
                <div className='box31' ><h1>%60</h1>
                <p>Success Rate</p></div>
                </div>
                </Grid>

                <Grid item xs={12} sm={3}>
                <div className='follow2'>
                  <h4>follow   <button className='hire2'>Hire me</button></h4>
                  <div className='profile2'><h4>Profile Compleation</h4></div>     
                  <div className='percentage2'><h4>50%</h4></div>
                  <div className='imageperc2'></div>
                  </div>
                  </Grid>
                </Grid>
    </Box>
  );
}

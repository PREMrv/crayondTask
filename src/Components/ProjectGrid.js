import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import max from '../Components/Images/max.jpg'
import './ProjectGrid.css';
import { Button } from 'bootstrap';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProjectGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} sm={9}>
          <Item>
          <div className='pro'>
            <h1>Projects</h1>
            <ul>
              <li>home</li>
              <li>crafted</li>
              <li>pages</li>
              <li>profile</li>
            </ul>
          </div>
              </Item>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Item>
              <div className='filter'><h4>Filter <button className='create'>Create</button></h4></div>
              
          </Item>
        </Grid>
        
      </Grid>
    </Box>
  );
}

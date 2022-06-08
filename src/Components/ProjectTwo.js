import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import max from '../Components/Images/max.jpg'
import './ProjectTwo.css';
import { Button } from 'bootstrap';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProjectTwo() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          <Item>
          <div className='myproject2'>
            <h3>My Projects <span className='mypro2'>Active</span></h3>
          </div>
              </Item>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Item>
              <div className='active'><h4>Active<button className='newprojectbutton'>New Project</button></h4></div>
              
          </Item>
        </Grid>
        
      </Grid>
    </Box>
  );
}

import './App.css';
import Appbar from './Components/Appbar';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
// import Item from '@mui/material/Item';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import max from './Components/Images/max.jpg'
import Product from './Components/Product';
import ProductDetails from './Components/ProductDetails';
import ResponsiveGrid from './Components/ResponsiveGrid';
// import ImageGrid from './Components/ImageGrid';
import ProjectGrid from './Components/ProjectGrid';
import ProjectTwo from './Components/ProjectTwo';
import ImageGridTwo from './Components/ImageGridTwo';


var arr = [{
  logoUrl:"https://preview.keenthemes.com/metronic8/demo22/assets/media/svg/brand-logos/plurk.svg",
  process:"In Progress",
  header: "Fitness App",
  title: "CMR App application to HR Efficient",
  date: "Mar 10,2022",
  dueDate: "Duedate",
  amount: "$284,900.00",
  budget: "Budget",
  
},
{
  logoUrl:"https://preview.keenthemes.com/metronic8/demo22/assets/media/svg/brand-logos/disqus.svg",
  process:"Pending",
  header: "Leaf CRM",
  title: "CMR App application to HR Efficient",
  date: "May 10,2021",
  dueDate: "Duedate",
  amount: "$36,4000.00",
  budget: "Budget"
},
{
  logoUrl:"https://preview.keenthemes.com/metronic8/demo22/assets/media/svg/brand-logos/figma-1.svg",
  process:"Completed",
  header: "Atica Banking",
  title: "CMR App application to HR Efficient",
  date: "Mar 14,2021",
  dueDate: "Duedate",
  amount: "605,100.00",
  budget: "Budget"
},
{
  logoUrl:"https://preview.keenthemes.com/metronic8/demo22/assets/media/svg/brand-logos/sentry-3.svg",
  process:"Pending",
  header: "Finance Dispatch",
  title: "CMR App application to HR Efficient",
  date: "Feb 21,2022",
  dueDate: "Duedate",
  amount: "284,900.00",
  budget: "Budget"
},
{
  logoUrl:"https://preview.keenthemes.com/metronic8/demo22/assets/media/svg/brand-logos/xing-icon.svg",
  process:"In Progress",
  header: "9 Degree",
  title: "CMR App application to HR Efficient",
  date: "May 5,2022",
  dueDate: "Duedate",
  amount: "284,900.00",
  budget: "Budget"
},
{
  logoUrl:"https://preview.keenthemes.com/metronic8/demo22/assets/media/svg/brand-logos/tvit.svg",
  process:"In Progress",
  header: "Go Pro App",
  title: "CMR App application to HR Efficient",
  date: "Mar 10,2022",
  dueDate: "Duedate",
  amount: "284,900.00",
  budget: "Budget"
},
{
  logoUrl:"https://preview.keenthemes.com/metronic8/demo22/assets/media/svg/brand-logos/aven.svg",
  process:"In Progress",
  header: "Buldozer CRM",
  title: "CMR App application to HR Efficient",
  date: "Jul 25,2022",
  dueDate: "Duedate",
  amount: "284,900.00",
  budget: "Budget"
},
{
  logoUrl:"https://preview.keenthemes.com/metronic8/demo22/assets/media/svg/brand-logos/treva.svg",
  process:"Pending",
  header: "Avicasales App",
  title: "CMR App application to HR Efficient",
  date: "June 20,2022",
  dueDate: "Duedate",
  amount: "284,900.00",
  budget: "Budget"
},
{
  logoUrl:"https://preview.keenthemes.com/metronic8/demo22/assets/media/svg/brand-logos/kanba.svg",
  process:"Completed",
  header: "Oppo CRM",
  title: "CMR App application to HR Efficient",
  date: "Sep 22,2022",
  dueDate: "Duedate",
  amount: "284,900.00",
  budget: "Budget"
}]



function App() {
  return (
    <div className="App">

      <Appbar></Appbar>
    <Grid container>
    <Grid item xs={12} sm={12}>
    <div className='headernav'>
      <ul className='headul'>
      
       <li> <a href='#'>Dashboard<br/><span>Summary & reports</span></a></li>
      
       
        <li><a href='#'>Crafted<br/><span>Pages & Utilities</span></a></li>
        
        
        <li><a href='#'>Apps<br/><span>Started Applications</span></a></li>
        
        <li><a href='#'>Resource<br/><span>Docs & Layout Builder</span></a></li>
        
        
        <li><a href='#'>Mega menu<br/><span>Extended Navigation</span></a></li>
        
      </ul>
    </div>
    </Grid>
    </Grid>

      <ProjectGrid/>
     

      {/* <ImageGrid></ImageGrid> */}
      <ImageGridTwo/>

      <Grid container>
        <Grid item xs={6} sm={12}>
      <div className='nave'>
        <ul className='navul'>
          <li><a href='#'>Overview</a></li>
          <li><a href='#'>Projects</a></li>
          <li><a href='#'>Campaings</a></li>
          <li><a href='#'>Documents</a></li>
          <li><a href='#'>Followers</a></li>
          <li><a href='#'>Activity</a></li>
        </ul>
      </div>
      </Grid>
      </Grid>

     
     <ProjectTwo/>

      <ResponsiveGrid
        arr={arr}
      />

     {/* <ImageGridTwo/> */}
    </div>
  );
}

export default App;

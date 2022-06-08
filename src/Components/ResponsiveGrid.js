import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import pgrid from '../Components/Images/pgrid.svg';
import './ResponsiveGrid.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(12),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid(props) {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                props?.arr?.map(item => {
                    return <Grid item xs={4} sm={4} md={4} key={item.header}>
                        <Item>{item?.image ?? ""}<img className='pgrid' src={item?.logoUrl} alt="pgrid"></img>
                        <div className='process'style={{color:item.process==="In Progress" ? "#64ed64" : item.process==="Pending" ? "#6d7482" : "#6dc2b7"}}><p>{item?.process ?? "process"}</p></div>
                            <h1 className='h1'>{item?.header ?? "header"}</h1>
                            <p className='p'>{item?.title ?? "title"}</p>

                            <div className='datedoler'>
                                <div className='date'>
                                    <h4 className='h2'>{item?.date ?? "date"}</h4>
                                    <h4 className='h3'><spam>{item?.dueDate ?? "dueDate"}</spam></h4>
                                </div>

                                <div className='doler'>
                                    <h4 className='h2'>{item?.amount ?? "amount"}</h4>
                                    <h4 className='h3'><spam>{item?.budget ?? "budget"}</spam></h4>
                                    <div className='percline'>{item?.percline ?? ""}</div>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                })
            }
        </Grid>
    );
}

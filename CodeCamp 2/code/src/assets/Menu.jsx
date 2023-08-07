

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function Menu({ props }) {
  return (

    <>

<Grid container spacing={2} className='ms-2' >
      {
        props.map((el) => {
          return (
            <>
            <Grid item xs={12} md={6} >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={el.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" >
                    {el.desc}
                  </Typography>

                  <div className='container my-3'>
                    <div className='row' >
                      <div className='col-lg-10 col-md-10 col-10' >
                        <Typography variant="body2" color="text.secondary" >
                          {el.category}
                        </Typography>
                      </div>

                    <div className='col-lg-2  col-md-2 col-2' >
                      <Typography variant="body2" color="text.secondary" >
                        {el.price}
                      </Typography>
                      </div>
                    </div>
                  </div>

                </CardContent>

              </Card>
</Grid>
            </>


          )
        })
        
      }
      </Grid>


    </>

  );
}
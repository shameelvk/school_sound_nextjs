import React from "react";
import { Grid, Typography, Card, CardContent, CardMedia, Divider, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Packages() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: 2,
        height: {md:"100vh"},
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      
      <Grid item xs={12} md={6}>
        <Grid container gap={2} sx={{padding:{sm:5,md:15}}} 
        >
          <Grid item xs={12}>
            <Divider sx={{ width: "50px", height: "4px", backgroundColor: "#E74040", mb: 2 }} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ color: "#000000" }}>
              Affordable Packages
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Problems trying to resolve the conflict between
              the two major realms of Classical physics:
              Newtonian mechanics.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="text"
              endIcon={<ArrowForwardIcon />}
              sx={{ color: "#96BB7C" }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Grid>

     
      <Grid item xs={12} md={6}>
        <Grid container spacing={2} >
         
          <Grid item xs={12} sm={6} >
          <Card sx={{ borderRadius: 2, boxShadow: 3 ,height:"290px"}}>
              <CardContent sx={{ display: "flex",alignItems: "flex-start",justifyContent:"center", flexDirection: "column",height:"100%",gap:1,paddingX:5 }}>
                <CardMedia
                  component="img"
                  image="/images/light.png"
                  alt="Certified Teacher"
                  sx={{ width: "auto", height: "50px", mb: 2 }}
                />
                <Typography variant="h5">Expert instruction</Typography>
                <Divider sx={{ width: "50px", height: "4px", backgroundColor: "#E74040", my: 1 }} />
                <Typography variant="body2">
                  The gradual accumulation of information about.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

         
          <Grid item xs={12} sm={6}>
          <Card sx={{ borderRadius: 2, boxShadow: 3 ,height:"290px"}}>
              <CardContent sx={{ display: "flex",alignItems: "flex-start",justifyContent:"center", flexDirection: "column",height:"100%",gap:1,paddingX:5 }}>
                <CardMedia
                  component="img"
                  image="/images/scope.png"
                  alt="Certified Teacher"
                  sx={{ width: "auto", height: "50px", mb: 2 }}
                />
                <Typography variant="h5">Certified Teacher</Typography>
                <Divider sx={{ width: "50px", height: "4px", backgroundColor: "#E74040", my: 1 }} />
                <Typography variant="body2">
                  The gradual accumulation of information about.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

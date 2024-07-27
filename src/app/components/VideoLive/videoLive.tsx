import React from "react";
import { Box, Typography, Grid, Divider, IconButton } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function VideoLive() {

  return (
    <Box
    
      sx={{
        height: "100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding:2
        
      }}
    >
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/images/livestudent.png" alt="Live Video" style={{ maxHeight: '100%', maxWidth: '60%' }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', px: { xs: 4, md: 20 } }}>
          <Divider sx={{ bgcolor: '#E74040', height: 4, width: '20%', alignSelf: 'start' }} />
          <Typography variant="h2" sx={{ mt: 2, fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' } }}>Video in Live Action</Typography>
          <Typography variant="body1" sx={{ color: '#737373', mt: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
            Problems trying to resolve the conflict between
            the two major realms of Classical physics:
            Newtonian mechanics
          </Typography>
          <Typography color={"#96BB7C"} variant="h6" sx={{ mt: 2, display: 'flex', alignItems: 'center', fontSize: { xs: '0.875rem', md: '1rem' } }}>
            Learn More
            <IconButton sx={{ color: '#96BB7C', ml: 1 }}>
              <ArrowRightAltIcon />
            </IconButton>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

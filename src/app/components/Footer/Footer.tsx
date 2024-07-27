import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const iconColor = '#96BB7C';

  return (
    <Box
      sx={{
        backgroundColor: '#f0f0f0',
        textAlign: 'center'
      }}
    >
      <Grid container spacing={4} paddingX={5}>
        <Grid item xs={12} md={2.4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Company Info</Typography>
            <Typography sx={{ mt: 2, color: '#737373', fontWeight: 700 }}>About Us</Typography>
            <Typography sx={{ mt: 2, color: '#737373', fontWeight: 700 }}>Careers</Typography>
            <Typography sx={{ mt: 2, color: '#737373', fontWeight: 700 }}>We're Hiring</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={2.4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Legal</Typography>
            <Typography sx={{ mt: 2, color: '#737373', fontWeight: 700 }}>About Us</Typography>
            <Typography sx={{ mt: 2, color: '#737373', fontWeight: 700 }}>Careers</Typography>
            <Typography sx={{ mt: 2, color: '#737373', fontWeight: 700 }}>We're Hiring</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={2.4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Features</Typography>
            <Typography sx={{ mt: 2, color: '#737373', fontWeight: 700 }}>About Us</Typography>
            <Typography sx={{ mt: 2, color: '#737373', fontWeight: 700 }}>Careers</Typography>
            <Typography sx={{ mt: 2, color: '#737373', fontWeight: 700 }}>We're Hiring</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={2.4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Resources</Typography>
            <Typography sx={{ mt: 2, color: '#737373', fontWeight: 700 }}>About Us</Typography>
            <Typography sx={{ mt: 2, color: '#737373', fontWeight: 700 }}>Careers</Typography>
            <Typography sx={{ mt: 2, color: '#737373', fontWeight: 700 }}>We're Hiring</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={2.4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Get in Touch</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <PhoneIcon sx={{ color: iconColor }} />
              <Typography sx={{ ml: 1, color: '#737373', fontWeight: 700 }}>+123 456 7890</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <LocationOnIcon sx={{ color: iconColor }} />
              <Typography sx={{ ml: 1, color: '#737373', fontWeight: 700 }}>1234 Main St, City, Country</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <EmailIcon sx={{ color: iconColor }} />
              <Typography sx={{ ml: 1, color: '#737373', fontWeight: 700 }}>email@example.com</Typography>
            </Box>
          </Box>
        </Grid>
        
      </Grid>
      <Grid container alignItems={"center"} sx={{ mt: 2, backgroundColor: '#FAFAFA', padding: 2, width: '100%' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">Made With Love By Figmaland. All Rights Reserved</Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <IconButton href="https://www.instagram.com" sx={{ color: iconColor }}>
            <InstagramIcon />
          </IconButton>
          <IconButton href="https://www.twitter.com" sx={{ color: iconColor }}>
            <TwitterIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com" sx={{ color: iconColor }}>
            <LinkedInIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

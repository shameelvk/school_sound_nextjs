import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function Newsletter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100vh',
        backgroundColor: 'rgba(254, 188, 148, 0.2)',
        padding: 2
      }}
    >
      <Typography variant="h6" sx={{ color: "#96BB7C" }}>
        Newsletter
      </Typography>

      <Typography variant="h3" sx={{ color: "#252B42" }}>
        Watch our Courses
      </Typography>

      <Typography variant="body1" sx={{ color: "#737373", mt: 2 }}>
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
      </Typography>

      <Box
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: 10,
          width: '100%',
          maxWidth: 600
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Your email"
          fullWidth
          sx={{
            backgroundColor: "#fff",
           
            height: "56px",
            
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#96BB7C",
            color: "#fff",
            height: "56px",
            borderRadius: "0 4px 4px 0",
            paddingX: 2,
           
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
}

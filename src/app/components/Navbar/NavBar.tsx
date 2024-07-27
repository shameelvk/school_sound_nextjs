import React from "react";
import { AppBar, Toolbar, Button, Typography, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Navbar() {
  return (
    <AppBar
    position="static"
     
      elevation={0}
      sx={{ backgroundColor: "rgba(254, 188, 148, 0.2)" }}
    >
      <Toolbar>
        <Grid
          container
          alignItems="center"
          justifyContent={"space-between"}
          height={"100%"}
          width={"100%"}
        >
          <Grid item  md={8}>
            <Grid container alignItems="center" justifyContent={"space-around"}>
              <Grid item>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bolder", fontSize: 25, color: "#000" }}
                >
                  BrandName
                </Typography>
              </Grid>
              <Grid item sx={{ display: { xs: "none", md: "block" } }}>
                <Typography
                  variant="body1"
                  sx={{ display: { md: "flex" }, gap: "30px", color: "#000" }}
                >
                  <span>Home</span>
                  <span>Product</span>
                  <span>Pricing</span>
                  <span>Contact</span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item  md={4} sx={{ display: { xs: "none", md: "block" } }} >
            <Button variant="text" sx={{ color: "#96BB7C" }}>
              Login
            </Button>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{ backgroundColor: "#96BB7C", color: "#ffffff" }}
            >
              JOIN US
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import studentImg from "@/../assets/images/student.png";

export default function Home() {
  return (
    <Grid
      container
   
      sx={{
        height: "100vh",
        width:"100%",
        backgroundColor: "rgba(254, 188, 148, 0.2)",
        
        alignItems:"center"

      }}
      alignItems="center"
    >
      <Grid item xs={12} md={6}>
        <Grid container spacing={2} padding={5}>
          <Grid item xs={12}>
            <Typography variant={"h5"}
            color={"#96BB7C"} 
            sx={{ fontSize: { xs: "15px", md: "20px" } }}>Welcome</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ fontSize: { xs: "35px",md:"50px"  } }}>
              Best Learning<br />Opportunities
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ fontSize: { xs: "20px",md:"30px"  } }}>
              Our goal is to make online education work for everyone
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#96BB7C",
                color: "#ffffff",
              }}
            >
              Join Us
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#96BB7C",
                color: "#96BB7C",
              }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ display: { xs: 'none', md: 'block' } }} md={6} alignSelf="end">
  <img
    src="https://s3-alpha-sig.figma.com/img/66a7/055e/20f48fbd3eb37d06c1502bec13378492?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BPHoVmBE1ITT1jilCVMVXdiwQ-H46o~ZI1dxKAUg605R-R6T6eqIdNZ0ncwSloiB2c99WOs89404oXvsM61bKwi9mS-IcmeK2HDoCWeqikwsjoWISuFM6njbB~Vn-3mbe99vhsu~phTWPo7e~1iZ2e3ArifhkZSQJNwLxXoPga8sTKQsoo31qEet9Lebr7jhdX~DtW3vr95AvtpBl3tsxJF~DcH60be0wR5xlEtq~84a1HtS~P6-vcIe36aELAuBhzURWfinsA84Q8nRoIosjEOQ-PYLnCo8NunkKMeby3qxEZi7FWLPzJQBnMrZtKePS8mCL-GLB2UB5ruF-fxN1A__"
    alt="Learning"
    style={{ height: "80vh" }}
  />
</Grid>
    </Grid>
  );
}

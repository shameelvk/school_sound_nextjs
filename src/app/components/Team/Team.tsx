'use client'
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
} from "@mui/material";

import { RootState } from "@/Redux/store/store";
import { useSelector } from "react-redux";
import TeamCard from "../TeamCard/TeamCard";

export default function Team() {
    
    const iconColor = "#96BB7C";
 
  const teams = useSelector((state: RootState) => state.teams.teamMember);


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Typography variant="h6" sx={{ color: iconColor }}>
        Team
      </Typography>
      <Typography variant="h3" sx={{ color: "#252B42", mt: 2 }}>
        Get Quality Education
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#737373", mt: 2, textAlign: "center" }}
      >
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          width: "100%",
          mt: 4,
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        {teams.map((member, index) => (
          <TeamCard member={member} key={index}/>
        ))}
      </Box>
    </Box>
  );
}

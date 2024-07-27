'use client'
import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";

import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store/store";
import CourseCard from "../CourseCard/CourseCard";

export default function ApprodablePackage() {

  const courses = useSelector((state: RootState) => state.courses.courses);
  const iconColor = '#96BB7C';  

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        p: 4,
      }}
    >
      <Typography variant="h6" sx={{ color: iconColor }}>Practice Advice</Typography>
      <Typography variant="h3" sx={{ color: '#252B42', mt: 2 }}>Approdable Packages</Typography>
      <Typography variant="body1" sx={{ color: '#737373', mt: 2, textAlign: 'center' }}>
        Problems trying to resolve the conflict between
        the two major realms of Classical physics: Newtonian mechanics
      </Typography>
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          width: '100%',
          mt: 4,
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        }}
      >
        {courses.map((course, index) => (
          <CourseCard course={course} key={index}/>
        ))}
      </Box>
    </Box>
  );
}

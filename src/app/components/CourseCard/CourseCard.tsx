import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { course } from '@/modal/modal';

interface CourseCardProps {
    course:course ;
  }


function CourseCard({course}:CourseCardProps) {

    const iconColor = '#96BB7C';    
  return (
    <Card  sx={{ display: 'flex', minWidth: 500,  m: 2, borderRadius: 2, position: 'relative' }}>
    <CardMedia
      component="img"
      sx={{ width: 200, position: 'relative' ,}}
      image={course.image}
      alt="course image"
      
    />
    <Box sx={{ position: 'absolute', top: 10, left: 10, bgcolor: '#E74040', color: 'white', px: 1, borderRadius: 1 }}>Sale</Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <CardContent>
        <Box sx={{display:"flex",gap:1}}>
        <Typography variant="h6" sx={{ color: iconColor }}>{course.onlineCourses}</Typography>
        
        <Box sx={{ display: 'flex',gap:1, alignItems: 'center', borderRadius: 3, bgcolor: '#2D4059',width:"25%"}}>
          <StarIcon sx={{ color: '#FFD700', }} />
          <Typography sx={{ color: 'white',  }}>{course.rating}</Typography>

        </Box>
        </Box>
        
        <Typography variant="h5" sx={{ mt: 2 }}>{course.courseTitle}</Typography>
        <Typography variant="body1" sx={{ color: '#737373', mt: 2 }}>{course.description}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <DownloadIcon sx={{ color: iconColor }} />
          <Typography variant="h6" sx={{ ml: 1 }}>{course.sales}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2,gap:2 }}>
          <Typography variant="h5" sx={{ color: '#BDBDBD' }}>{course.oldPrice}</Typography>
          <Typography variant="h5" sx={{ color: '#FFAB71' }}>{course.newPrice}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTimeIcon sx={{ color: '#737373' }} />
            <Typography sx={{ ml: 1, color: '#737373' }}>{course.duration}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ color: '#E77C40' }}>~</Typography>
            <Typography sx={{ ml: 1, color: '#737373' }}>{course.lessons}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ color: '#E77C40' }}>📈</Typography>
            <Typography sx={{ color: '#FFAB71' }}>{course.progress}</Typography>
          </Box>
        </Box>
        <Button variant="outlined" sx={{ mt: 2, borderRadius: 2, borderColor: iconColor, color: iconColor, '&:hover': { borderColor: iconColor } }}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
            Learn More
            <ArrowRightAltIcon sx={{ ml: 1 }} />
          </Typography>
        </Button>
      </CardContent>
    </Box>
  </Card>
  )
}

export default CourseCard
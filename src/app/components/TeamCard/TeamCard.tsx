import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { TeamMember } from '@/modal/modal';
interface TeamCardProps {
    member: TeamMember;
  }

function TeamCard({member}:TeamCardProps) {
    const iconColor = "#96BB7C";
  return (
    <Card
           
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: 300,
              maxWidth: 500,
              m: 2,
              borderRadius: 2,
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "100%", height: 280, objectFit: "cover" }}
              image={member.image}
              alt="team member"
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h5" sx={{ mt: 2 }}>
                {member.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#737373", mt: 1 }}>
                {member.profession}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 2,
                  gap: 1,
                }}
              >
                <InstagramIcon sx={{ color: iconColor }} />
                <TwitterIcon sx={{ color: iconColor }} />
                <FacebookIcon sx={{ color: iconColor }} />
              </Box>
            </CardContent>
          </Card>
  )
}

export default TeamCard
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Divider,
  Avatar,
} from "@mui/material";
import { IconCertificate, IconUsers, IconLeaf } from "@tabler/icons-react";

const About = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "primary.light",
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: "md", mx: "auto", textAlign: "center" }}>
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                fontWeight: "bold",
                color: "primary.dark",
              }}
            >
              About FindVaidya
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: "text.secondary",
                fontWeight: "normal",
              }}
            >
              Our mission is to make authentic Ayurvedic healthcare accessible
              to everyone
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ mb: 4, textAlign: "center" }}>
            Our Story
          </Typography>
          <Typography variant="body1" paragraph>
            FindVaidya was born from a simple observation: while Ayurveda is one
            of the world's oldest holistic healing systems, finding qualified
            practitioners remains challenging in the digital age.
          </Typography>
          <Typography variant="body1" paragraph>
            Founded in 2023, our platform bridges this gap by connecting
            patients seeking authentic Ayurvedic care with verified
            practitioners across India. We believe in the power of traditional
            medicine combined with modern accessibility.
          </Typography>
          <Typography variant="body1" paragraph>
            Our team consists of healthcare professionals, technology experts,
            and Ayurveda enthusiasts committed to elevating the standards of
            Ayurvedic practice while making it accessible to all.
          </Typography>
        </Container>
      </Box>

      {/* Our Values */}
      <Box sx={{ py: 8, backgroundColor: "grey.50" }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 4, textAlign: "center" }}>
            Our Values
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: "Authenticity",
                description:
                  "We verify all practitioners to ensure they have proper credentials and experience in Ayurvedic medicine.",
                icon: <IconCertificate size={40} color="#069bf1" />,
              },
              {
                title: "Accessibility",
                description:
                  "We believe quality healthcare should be accessible to everyone, regardless of location or background.",
                icon: <IconUsers size={40} color="#069bf1" />,
              },
              {
                title: "Holistic Approach",
                description:
                  "We embrace the comprehensive nature of Ayurveda, focusing on prevention and whole-person wellness.",
                icon: <IconLeaf size={40} color="#069bf1" />,
              },
            ].map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box sx={{ mb: 2 }}>{value.icon}</Box>
                  <Typography variant="h4" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body1">{value.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 4, textAlign: "center" }}>
            Our Team
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                name: "Dr. Anand Sharma",
                role: "Founder & Medical Director",
                bio: "Ayurvedic physician with 20+ years of experience",
              },
              {
                name: "Priya Mehta",
                role: "Chief Technology Officer",
                bio: "Tech leader passionate about healthcare innovation",
              },
              {
                name: "Vikram Patel",
                role: "Head of Practitioner Relations",
                bio: "Connecting quality practitioners with patients in need",
              },
            ].map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box sx={{ textAlign: "center" }}>
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      mx: "auto",
                      mb: 2,
                      bgcolor: "primary.main",
                    }}
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </Avatar>
                  <Typography variant="h5" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary.main"
                    gutterBottom
                  >
                    {member.role}
                  </Typography>
                  <Typography variant="body2">{member.bio}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;

import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  InputAdornment,
  Paper,
  Rating,
  Avatar,
  Divider,
} from "@mui/material";
import {
  IconSearch,
  IconMapPin,
  IconStethoscope,
  IconUsers,
  IconCertificate,
  IconDeviceMobile,
} from "@tabler/icons-react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "primary.light",
          py: { xs: 6, md: 10 },
          position: "relative",
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
              Find Your Ayurvedic Doctor
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: "text.secondary",
                fontWeight: "normal",
              }}
            >
              Connect with certified Ayurvedic practitioners for personalized
              holistic healthcare
            </Typography>

            {/* Search Bar */}
            <Paper
              elevation={3}
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                borderRadius: 2,
                mb: 4,
              }}
            >
              <TextField
                fullWidth
                placeholder="Search by ailment, treatment or doctor name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconSearch color="#069bf1" />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                sx={{ mr: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<IconMapPin />}
              >
                Search
              </Button>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* Specialties Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 1, textAlign: "center" }}>
            Explore Ayurvedic Specialties
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 6, textAlign: "center", maxWidth: "md", mx: "auto" }}
          >
            Find practitioners specialized in various Ayurvedic disciplines to
            address your specific health concerns
          </Typography>

          <Grid container spacing={3}>
            {[
              {
                title: "Panchakarma",
                description: "Detoxification and rejuvenation therapies",
                icon: <IconStethoscope size={40} />,
              },
              {
                title: "Rasayana",
                description: "Rejuvenation and longevity treatments",
                icon: <IconUsers size={40} />,
              },
              {
                title: "Kayachikitsa",
                description: "Internal medicine and general treatments",
                icon: <IconCertificate size={40} />,
              },
              {
                title: "Shalya Tantra",
                description: "Surgical procedures and wound management",
                icon: <IconDeviceMobile size={40} />,
              },
            ].map((specialty, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                  }}
                >
                  <CardContent>
                    <Box sx={{ color: "primary.main", mb: 2 }}>
                      {specialty.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom>
                      {specialty.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {specialty.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ py: 8, backgroundColor: "grey.50" }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 1, textAlign: "center" }}>
            How FindVaidya Works
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 6, textAlign: "center", maxWidth: "md", mx: "auto" }}
          >
            Simple steps to connect with the right Ayurvedic doctor for your
            needs
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: "Search",
                description:
                  "Find doctors based on your health concerns, location, or specific Ayurvedic treatments",
                number: "1",
              },
              {
                title: "Compare",
                description:
                  "Review doctor profiles, qualifications, patient reviews, and available appointment slots",
                number: "2",
              },
              {
                title: "Connect",
                description:
                  "Book an appointment with your chosen practitioner and start your healing journey",
                number: "3",
              },
            ].map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      color: "white",
                      fontSize: 24,
                      fontWeight: "bold",
                    }}
                  >
                    {step.number}
                  </Box>
                  <Typography variant="h4" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body1">{step.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Doctors */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 1, textAlign: "center" }}>
            Featured Practitioners
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 6, textAlign: "center", maxWidth: "md", mx: "auto" }}
          >
            Meet some of our highly rated Ayurvedic doctors
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                name: "Dr. Arjun Sharma",
                specialty: "Panchakarma Specialist",
                experience: "15+ years experience",
                rating: 4.9,
              },
              {
                name: "Dr. Meera Patel",
                specialty: "Rasayana & Rejuvenation",
                experience: "12+ years experience",
                rating: 4.8,
              },
              {
                name: "Dr. Vikram Singh",
                specialty: "Kayachikitsa Expert",
                experience: "20+ years experience",
                rating: 5.0,
              },
            ].map((doctor, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 100,
                          height: 100,
                          mb: 2,
                          bgcolor: "primary.main",
                        }}
                      >
                        {doctor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </Avatar>
                      <Typography variant="h5" gutterBottom>
                        {doctor.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        {doctor.specialty}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {doctor.experience}
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <Rating
                          value={doctor.rating}
                          precision={0.1}
                          readOnly
                        />
                        <Typography variant="body2" sx={{ ml: 1 }}>
                          {doctor.rating}
                        </Typography>
                      </Box>
                      <Button variant="outlined" color="primary">
                        View Profile
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: 8, backgroundColor: "primary.light" }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 1, textAlign: "center" }}>
            What Our Users Say
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 6, textAlign: "center", maxWidth: "md", mx: "auto" }}
          >
            Hear from patients who found the right Ayurvedic care through
            FindVaidya
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                name: "Rahul M.",
                testimonial:
                  "FindVaidya helped me connect with a specialist for my chronic digestive issues. After years of trying different treatments, I finally found relief through Ayurveda.",
                location: "Mumbai",
              },
              {
                name: "Priya K.",
                testimonial:
                  "The platform made it so easy to find an Ayurvedic doctor near me. I was able to read reviews, check qualifications, and book an appointment all in one place.",
                location: "Bangalore",
              },
              {
                name: "Amit S.",
                testimonial:
                  "As someone new to Ayurvedic treatments, I appreciated how FindVaidya helped me understand different specializations and find the right doctor for my specific needs.",
                location: "Delhi",
              },
            ].map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: "100%", p: 3 }}>
                  <CardContent>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{ fontStyle: "italic" }}
                    >
                      "{testimonial.testimonial}"
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar sx={{ mr: 2, bgcolor: "primary.main" }}>
                        {testimonial.name[0]}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.location}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 10, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom>
            Ready to Find Your Vaidya?
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 4 }}>
            Join thousands of patients who have discovered the benefits of
            personalized Ayurvedic care through our platform.
          </Typography>
          <Box>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mr: 2 }}
            >
              Search Doctors
            </Button>
            <Button variant="outlined" color="primary" size="large">
              List Your Practice
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setOpen(true);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              Contact Us
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: "text.secondary",
                fontWeight: "normal",
              }}
            >
              We're here to help with any questions about FindVaidya
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Information */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, height: "100%", textAlign: "center" }}>
                <IconMail
                  size={40}
                  color="#069bf1"
                  style={{ marginBottom: "16px" }}
                />
                <Typography variant="h5" gutterBottom>
                  Email Us
                </Typography>
                <Typography variant="body1">info@findvaidya.com</Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  We'll respond within 24 hours
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, height: "100%", textAlign: "center" }}>
                <IconPhone
                  size={40}
                  color="#069bf1"
                  style={{ marginBottom: "16px" }}
                />
                <Typography variant="h5" gutterBottom>
                  Call Us
                </Typography>
                <Typography variant="body1">+91 123 456 7890</Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Monday-Friday, 9AM-6PM IST
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, height: "100%", textAlign: "center" }}>
                <IconMapPin
                  size={40}
                  color="#069bf1"
                  style={{ marginBottom: "16px" }}
                />
                <Typography variant="h5" gutterBottom>
                  Office Location
                </Typography>
                <Typography variant="body1">123 Wellness Street</Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Bangalore, Karnataka, India
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Form */}
      <Box sx={{ py: 8, backgroundColor: "grey.50" }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ mb: 4, textAlign: "center" }}>
            Send Us a Message
          </Typography>

          <Paper sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Subject"
                    name="subject"
                    select
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                    <MenuItem value="Doctor Registration">
                      Doctor Registration
                    </MenuItem>
                    <MenuItem value="Technical Support">
                      Technical Support
                    </MenuItem>
                    <MenuItem value="Feedback">Feedback</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Your Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Box>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Your message has been sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;

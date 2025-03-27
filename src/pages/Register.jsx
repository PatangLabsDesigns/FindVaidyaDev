import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  MenuItem,
  Divider,
} from "@mui/material";
import { IconArrowRight, IconArrowLeft, IconCheck } from "@tabler/icons-react";

const steps = [
  "Basic Information",
  "Professional Details",
  "Practice Information",
  "Verification",
];

const ListYourPractice = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    specialization: "",
    experience: "",
    qualification: "",
    clinicName: "",
    clinicAddress: "",
    city: "",
    state: "",
    pincode: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleNext();
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
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
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                select
                label="Specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
              >
                <MenuItem value="Panchakarma">Panchakarma</MenuItem>
                <MenuItem value="Rasayana">Rasayana</MenuItem>
                <MenuItem value="Kayachikitsa">Kayachikitsa</MenuItem>
                <MenuItem value="Shalya Tantra">Shalya Tantra</MenuItem>
                <MenuItem value="General Ayurveda">General Ayurveda</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Years of Experience"
                name="experience"
                type="number"
                value={formData.experience}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Qualifications"
                name="qualification"
                multiline
                rows={2}
                placeholder="e.g., BAMS, MD in Ayurveda, etc."
                value={formData.qualification}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Clinic/Practice Name"
                name="clinicName"
                value={formData.clinicName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Clinic Address"
                name="clinicAddress"
                multiline
                rows={2}
                value={formData.clinicAddress}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        );
      case 3:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Review Your Information
              </Typography>
              <Paper sx={{ p: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">Name:</Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                    >{`${formData.firstName} ${formData.lastName}`}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">Contact:</Typography>
                    <Typography variant="body1" gutterBottom>
                      {formData.email}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {formData.phone}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">
                      Professional Details:
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {formData.specialization}
                    </Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                    >{`${formData.experience} years experience`}</Typography>
                    <Typography variant="body1" gutterBottom>
                      {formData.qualification}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">
                      Practice Location:
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {formData.clinicName}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {formData.clinicAddress}
                    </Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                    >{`${formData.city}, ${formData.state} - ${formData.pincode}`}</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2">
                    I agree to the Terms of Service and Privacy Policy. I
                    confirm that all information provided is accurate.
                  </Typography>
                }
              />
            </Grid>
          </Grid>
        );
      default:
        return "Unknown step";
    }
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
              List Your Practice
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: "text.secondary",
                fontWeight: "normal",
              }}
            >
              Join our network of trusted Ayurvedic practitioners and connect
              with patients seeking your expertise
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Registration Form */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Paper sx={{ p: 4 }}>
            <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {activeStep === steps.length ? (
              <Box sx={{ textAlign: "center" }}>
                <IconCheck
                  size={60}
                  color="#069bf1"
                  style={{ marginBottom: "16px" }}
                />
                <Typography variant="h4" gutterBottom>
                  Registration Complete!
                </Typography>
                <Typography variant="body1" paragraph>
                  Thank you for registering with FindVaidya. We'll review your
                  information and get back to you shortly.
                </Typography>
                <Button variant="contained" color="primary" href="/">
                  Return to Home
                </Button>
              </Box>
            ) : (
              <form onSubmit={handleSubmit}>
                {getStepContent(activeStep)}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 4,
                  }}
                >
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    startIcon={<IconArrowLeft />}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    type={activeStep === steps.length - 1 ? "submit" : "button"}
                    onClick={
                      activeStep === steps.length - 1 ? undefined : handleNext
                    }
                    endIcon={<IconArrowRight />}
                    disabled={
                      activeStep === steps.length - 1 && !formData.acceptTerms
                    }
                  >
                    {activeStep === steps.length - 1 ? "Submit" : "Next"}
                  </Button>
                </Box>
              </form>
            )}
          </Paper>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: 8, backgroundColor: "grey.50" }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 4, textAlign: "center" }}>
            Benefits of Joining FindVaidya
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: "Increased Visibility",
                description:
                  "Get discovered by patients actively seeking Ayurvedic treatments in your area",
              },
              {
                title: "Professional Profile",
                description:
                  "Showcase your qualifications, specializations, and patient reviews",
              },
              {
                title: "Free to Join",
                description:
                  "No subscription fees - list your practice completely free of charge",
              },
              {
                title: "Patient Connections",
                description:
                  "Connect with patients who are specifically looking for your expertise",
              },
            ].map((benefit, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper sx={{ p: 3, height: "100%", textAlign: "center" }}>
                  <Typography variant="h5" gutterBottom>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1">{benefit.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ListYourPractice;

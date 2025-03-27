import React from "react";
import { Box, Typography, Container, Paper, Divider } from "@mui/material";

const Privacy = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "primary.light",
          py: { xs: 4, md: 6 },
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
              Privacy Policy
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: "text.secondary",
              }}
            >
              Last updated: March 15, 2025
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Privacy Content */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md">
          <Paper sx={{ p: 4 }}>
            <Typography variant="body1" paragraph>
              At FindVaidya, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              1. Information We Collect
            </Typography>
            <Typography variant="body1" paragraph>
              1.1. Personal Information: When you register an account, we may
              collect your name, email address, phone number, and other contact
              details.
            </Typography>
            <Typography variant="body1" paragraph>
              1.2. Doctor Information: For practitioners, we collect
              professional information including qualifications,
              specializations, practice details, and verification documents.
            </Typography>
            <Typography variant="body1" paragraph>
              1.3. Usage Data: We automatically collect information on how you
              interact with our Service, including pages visited, time spent,
              and actions taken.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              2. How We Use Your Information
            </Typography>
            <Typography variant="body1" paragraph>
              2.1. To provide and maintain our Service, including to monitor the
              usage of our Service.
            </Typography>
            <Typography variant="body1" paragraph>
              2.2. To manage your account and provide you with customer support.
            </Typography>
            <Typography variant="body1" paragraph>
              2.3. To enable doctor-patient connections and facilitate
              appointment bookings.
            </Typography>
            <Typography variant="body1" paragraph>
              2.4. To improve our Service and develop new features.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              3. Disclosure of Your Information
            </Typography>
            <Typography variant="body1" paragraph>
              3.1. We may share your information with service providers to
              monitor and analyze the use of our Service.
            </Typography>
            <Typography variant="body1" paragraph>
              3.2. For doctors, your professional information will be displayed
              publicly on our platform to enable patients to find and contact
              you.
            </Typography>
            <Typography variant="body1" paragraph>
              3.3. We may disclose your information if required by law or in
              response to valid requests by public authorities.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              4. Data Security
            </Typography>
            <Typography variant="body1" paragraph>
              The security of your data is important to us, but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              5. Your Data Protection Rights
            </Typography>
            <Typography variant="body1" paragraph>
              You have the right to access, update, or delete your personal
              information. You can do this by contacting us directly.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="body1">
              If you have any questions about this Privacy Policy, please
              contact us at privacy@findvaidya.com.
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Privacy;

import React from "react";
import { Box, Typography, Container, Paper, Divider } from "@mui/material";

const Terms = () => {
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
              Terms of Service
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

      {/* Terms Content */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md">
          <Paper sx={{ p: 4 }}>
            <Typography variant="body1" paragraph>
              Welcome to FindVaidya. These Terms of Service govern your use of
              our website, services, and applications (collectively, the
              "Service"). By accessing or using our Service, you agree to be
              bound by these Terms.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              1. Acceptance of Terms
            </Typography>
            <Typography variant="body1" paragraph>
              By accessing or using FindVaidya, you agree to be bound by these
              Terms of Service and all applicable laws and regulations. If you
              do not agree with any of these terms, you are prohibited from
              using or accessing this site.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              2. User Accounts
            </Typography>
            <Typography variant="body1" paragraph>
              When you create an account with us, you must provide accurate,
              complete, and current information. You are responsible for
              safeguarding the password and for all activities that occur under
              your account.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              3. Doctor Listings and Verification
            </Typography>
            <Typography variant="body1" paragraph>
              3.1. Doctors who list their practice on FindVaidya must provide
              accurate and truthful information about their qualifications,
              experience, and practice.
            </Typography>
            <Typography variant="body1" paragraph>
              3.2. FindVaidya makes reasonable efforts to verify the credentials
              of practitioners but does not guarantee the accuracy of all
              information provided by practitioners.
            </Typography>
            <Typography variant="body1" paragraph>
              3.3. Users should independently verify the credentials and
              suitability of any practitioner before seeking treatment.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              4. Intellectual Property
            </Typography>
            <Typography variant="body1" paragraph>
              The Service and its original content, features, and functionality
              are and will remain the exclusive property of FindVaidya and its
              licensors.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              5. Limitation of Liability
            </Typography>
            <Typography variant="body1" paragraph>
              FindVaidya shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              access to or use of, or inability to access or use, the Service.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              6. Changes to Terms
            </Typography>
            <Typography variant="body1" paragraph>
              We reserve the right to modify or replace these Terms at any time.
              It is your responsibility to review these Terms periodically for
              changes.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="body1">
              If you have any questions about these Terms, please contact us at
              legal@findvaidya.com.
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Terms;

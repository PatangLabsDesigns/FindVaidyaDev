import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NoPage = () => {
  return (
    <Box
      sx={{
        py: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          color="primary.main"
          sx={{ fontSize: "6rem", fontWeight: "bold", mb: 2 }}
        >
          404
        </Typography>
        <Typography variant="h4" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          The page you are looking for doesn't exist or has been moved.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/"
          size="large"
        >
          Return to Home
        </Button>
      </Container>
    </Box>
  );
};

export default NoPage;

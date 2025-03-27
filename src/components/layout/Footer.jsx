import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  Stack,
  IconButton,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import logo from "../../assets/logo-dark.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Box component={RouterLink} to="/" sx={{ display: "block", mb: 2 }}>
              <img
                src={logo}
                alt="FindVaidya Logo"
                style={{ height: "40px" }}
              />
            </Box>
            <Typography variant="body2">
              Connecting patients with the best Ayurvedic doctors across India.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton color="inherit" size="small">
                <IconBrandTwitter size={20} />
              </IconButton>
              <IconButton color="inherit" size="small">
                <IconBrandFacebook size={20} />
              </IconButton>
              <IconButton color="inherit" size="small">
                <IconBrandInstagram size={20} />
              </IconButton>
              <IconButton color="inherit" size="small">
                <IconBrandLinkedin size={20} />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  component={RouterLink}
                  to="/"
                  color="inherit"
                  underline="hover"
                >
                  Home
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  component={RouterLink}
                  to="/about"
                  color="inherit"
                  underline="hover"
                >
                  About
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  component={RouterLink}
                  to="/contact"
                  color="inherit"
                  underline="hover"
                >
                  Contact
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  component={RouterLink}
                  to="/register"
                  color="inherit"
                  underline="hover"
                >
                  List your practice for free
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Account
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  component={RouterLink}
                  to="/login"
                  color="inherit"
                  underline="hover"
                >
                  Login
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  component={RouterLink}
                  to="/signup"
                  color="inherit"
                  underline="hover"
                >
                  Sign up
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" paragraph>
              Email: info@findvaidya.com
            </Typography>
            <Typography variant="body2" paragraph>
              Phone: +91 123 456 7890
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, bgcolor: "rgba(255,255,255,0.2)" }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ mb: { xs: 2, md: 0 } }}>
            © {new Date().getFullYear()} FindVaidya. All rights reserved.
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            Made with ✨ by
            <Link
              href="https://www.patanglabs.design/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              underline="hover"
              sx={{ ml: 0.5 }}
            >
              Patang Labs
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

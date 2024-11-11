import { Typography, Container, Button, Box } from "@mui/material";
import banner from "../../src/assets/banner.jpg";

function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Box sx={{ textAlign: "center" }}>
        {/* About Title */}
        <Typography variant="h3" sx={{ mb: 3 }}>
          About Us
        </Typography>

        {/* Description */}
        <Typography variant="h6" sx={{ mb: 4 }}>
          Welcome to our platform! We are passionate about delivering quality
          content and providing valuable knowledge to our users. Our mission is
          to empower learners with the skills and tools they need to succeed in
          the modern world.
        </Typography>

        {/* Image (Optional) */}
        <Box sx={{ mb: 4 }}>
          <img
            src={banner}
            alt="About Us"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Box>

        {/* Another Section (Optional) */}
        <Typography variant="body1" sx={{ mb: 3 }}>
          Our platform offers a variety of courses, articles, and resources
          aimed at fostering self-improvement and career growth. Whether you're
          learning a new language, diving into coding, or exploring personal
          development, we are here to guide you every step of the way.
        </Typography>

        {/* Call to Action Button */}
        <Button
          variant="contained"
          color="primary"
          href="/contact"
          sx={{ mt: 3 }}
        >
          Contact Us
        </Button>
      </Box>
    </Container>
  );
}

export default AboutPage;

import { Box, Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          About CozyStay
        </Typography>

        <Box mb={2}>
          <Typography variant="body1">
            At CozyStay, our mission is to help you find the perfect apartment — quickly, easily, and with confidence.
            We specialize in connecting renters with high-quality, verified listings in major cities across the country.
          </Typography>
        </Box>

        <Box mb={2}>
          <Typography variant="body1">
            Our platform provides a seamless experience from search to booking, with powerful filters, detailed listings,
            and responsive support. Whether you’re looking for a cozy studio or a spacious multi-bedroom apartment,
            CozyStay has something for everyone.
          </Typography>
        </Box>

        <Box>
          <Typography variant="body1">
            Founded by a team of real estate and technology experts, we’re passionate about making apartment hunting
            a stress-free and enjoyable experience.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;

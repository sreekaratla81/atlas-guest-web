import { Box, Button, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

const IntroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ backgroundColor: '#1e1e1e', color: '#fff', py: { xs: 8, md: 12 } }}>
      <Container>
        <Stack
          direction={isMobile ? 'column' : 'row'}
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Images Section */}
          <Box sx={{ position: 'relative', width: isMobile ? '100%' : '50%' }}>
            <Box
              component="img"
              src="images/intro-main.jpg"
              alt="Main room"
              sx={{
                width: '100%',
                borderRadius: 2,
              }}
            />
            <Box
              component="img"
              src="images/intro-overlay.jpg"
              alt="Overlay decor"
              sx={{
                width: '60%',
                position: 'absolute',
                bottom: -40,
                left: 40,
                borderRadius: 2,
                boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
                display: isMobile ? 'none' : 'block',
              }}
            />
          </Box>

          {/* Text Content */}
          <Box sx={{ width: isMobile ? '100%' : '50%' }}>
            <Typography
              variant="subtitle2"
              sx={{ color: '#d1b06b', letterSpacing: 1, mb: 2 }}
            >
              STAY IN THE HEART OF NEW YORK
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontFamily: 'serif',
                fontSize: { xs: 28, md: 40 },
                mb: 3,
              }}
            >
              Luxury furnished serviced apartments in Times Square
            </Typography>

            <Typography variant="body1" sx={{ color: '#aaa', mb: 4 }}>
              Located in Times Square, CozyStay apartment hotel provides a peaceful, private retreat in the heart of one of the world’s most iconic cities. Experience a sophisticated blend of professional services and home comforts. We proudly offer a full range of complimentary amenities and services that provide you with everything you need for an inspiring stay.
            </Typography>

            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                borderColor: '#d1b06b',
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#d1b06b',
                  color: '#000',
                },
              }}
            >
              Start Exploring
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default IntroSection;

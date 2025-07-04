import { Box, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const HospitalitySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ position: 'relative', backgroundColor: '#1e1e1e', color: '#fff' }}>
      {/* Background image & title */}
      <Box
        sx={{
          backgroundImage: `url('images/hospitality-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: 400, md: 500 },
          display: 'flex',
          alignItems: 'center',
          px: 4,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="subtitle2"
            sx={{ color: '#d1b06b', mb: 2, letterSpacing: 1 }}
          >
            HIGH STANDARDS OF HOSPITALITY
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'serif',
              fontSize: { xs: 28, md: 42 },
              maxWidth: '600px',
              lineHeight: 1.3,
            }}
          >
            We strive to provide our guests with luxury, comfort & tailor-made service.
          </Typography>
        </Container>
      </Box>

      {/* Lower content area */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#2f3a2e' }}>
        <Container maxWidth="lg">
          <Stack
            direction={isMobile ? 'column' : 'row'}
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Left image overlapping */}
            <Box
              component="img"
              src="images/hospitality-chair.jpg"
              alt="Hospitality decor"
              sx={{
                width: isMobile ? '100%' : '45%',
                borderRadius: 2,
                boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
              }}
            />

            {/* Right testimonial box */}
            <Box sx={{ width: isMobile ? '100%' : '50%', color: '#fff' }}>
              <Box sx={{ display: 'flex', gap: 0.5, mb: 2 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} sx={{ color: '#d1b06b', fontSize: 20 }} />
                ))}
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 400, mb: 3 }}>
                “The rooms are all renovated and modern. And the staff are very willing to help you
                plan your day. Thanks for all the staff and this pleased trip!”
              </Typography>

              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Erin Pierce
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                TRIPADVISOR
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default HospitalitySection;

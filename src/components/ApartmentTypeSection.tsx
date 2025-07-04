import { Box, Container, Typography, Stack, useMediaQuery, useTheme } from '@mui/material';

const apartmentTypes = [
  {
    label: 'Luxury Penthouses',
    image: 'images/type-penthouse.jpg',
  },
  {
    label: 'Art Apartments',
    image: 'images/type-art.jpg',
  },
  {
    label: 'Modern Studios',
    image: 'images/type-studio.jpg',
  },
];

const ApartmentTypeSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ backgroundColor: '#1e1e1e', color: '#fff', py: { xs: 8, md: 12 } }}>
      <Container>
        {/* Heading */}
        <Typography
          variant="subtitle2"
          align="center"
          sx={{ color: '#d1b06b', letterSpacing: 1, mb: 1 }}
        >
          EXTRAORDINARY ACCOMMODATIONS
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontFamily: 'serif',
            fontSize: { xs: 28, md: 40 },
            mb: 6,
          }}
        >
          Choose Your Apartment Type
        </Typography>

        {/* Cards */}
        <Stack
          direction={isMobile ? 'column' : 'row'}
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          {apartmentTypes.map(({ label, image }) => (
            <Box
              key={label}
              sx={{
                position: 'relative',
                width: isMobile ? '100%' : '30%',
                overflow: 'hidden',
                borderRadius: 1,
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.02)' },
              }}
            >
              <Box
                component="img"
                src={image}
                alt={label}
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  textAlign: 'center',
                  backgroundColor: 'rgba(0,0,0,0.9)',
                  py: 1,
                }}
              >
                <Typography variant="subtitle1" sx={{ fontSize: '1.2rem' }}>
                  {label}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default ApartmentTypeSection;

import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
} from '@mui/material';

const VisitInfoSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        minHeight: '500px',
      }}
    >
      {/* Left Side */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url('images/visit-left.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
          textAlign: 'center',
        }}
      >
        <Box maxWidth="400px">
          <Typography
            variant="overline"
            sx={{ color: '#d1b06b', letterSpacing: 1, mb: 1 }}
          >
            OUR LOCATION
          </Typography>
          <Typography variant="h4" sx={{ fontFamily: 'serif', mb: 2 }}>
            Getting Here
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            CozyStay Aparthotel Times Square
          </Typography>
          <Typography variant="body2">
            415 6th Avenue, New York, New York, USA, 10018
          </Typography>
          <Typography variant="body2">Tel: +1 212-555-6699</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Email: information@cozystay.com
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: '#fff',
              borderColor: '#d1b06b',
              '&:hover': {
                backgroundColor: '#d1b06b',
                color: '#000',
              },
            }}
          >
            Get Directions
          </Button>
        </Box>
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url('images/visit-right.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
          textAlign: 'center',
        }}
      >
        <Box maxWidth="400px">
          <Typography
            variant="overline"
            sx={{ color: '#d1b06b', letterSpacing: 1, mb: 1 }}
          >
            BOOK A ROOM
          </Typography>
          <Typography variant="h4" sx={{ fontFamily: 'serif', mb: 2 }}>
            Spend Your Time With Us
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Everything at CozyStay, in its restaurants, bar and spa is designed to make your stay, lunch or dinner unforgettable.
          </Typography>
          <Typography variant="body2">Tel: +1 212-555-6688</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Email: reservation@cozystay.com
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: '#fff',
              borderColor: '#d1b06b',
              '&:hover': {
                backgroundColor: '#d1b06b',
                color: '#000',
              },
            }}
          >
            Reserve Your Stay
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default VisitInfoSection;

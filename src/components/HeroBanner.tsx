import {
  Box,
  Typography,
  Stack,
  Button,
  MenuItem,
  Select,
  TextField,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useState } from 'react';

const HeroBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [checkIn, setCheckIn] = useState('2025-06-29');
  const [checkOut, setCheckOut] = useState('2025-06-30');
  const [guests, setGuests] = useState('1 Adult, 0 Children');

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('images/hero-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        py: { xs: 10, md: 16 },
        textAlign: 'center'
      }}
    >
      {/* Headings */}
      <Typography variant="subtitle1" sx={{ color: '#d1b06b', fontSize: 14 }}>
        WELCOME TO COZYSTAY, A LUXURY APARTMENT HOTEL IN TIMES SQUARE
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'serif',
          fontSize: { xs: 32, md: 56 },
          mt: 2,
          lineHeight: 1.2
        }}
      >
        YOUR NEXT BOUTIQUE <br />
        APARTMENTS
      </Typography>

      {/* Search Box */}
      <Box
        sx={{
          backgroundColor: 'rgba(0,0,0,0.4)',
          border: '1px solid #d1b06b',
          mt: 6,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
          py: 2,
          gap: 1,
          maxWidth: 1000,
          mx: 'auto'
        }}
      >
        {/* Check-In */}
        <Stack spacing={0.5} alignItems="flex-start" px={1}>
          <Typography variant="caption" color="#fff">
            Check In
          </Typography>
          <TextField
            type="date"
            variant="standard"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            InputProps={{ disableUnderline: true, style: { color: '#fff' } }}
            sx={{ input: { color: '#fff' } }}
          />
        </Stack>

        {/* Check-Out */}
        <Stack spacing={0.5} alignItems="flex-start" px={1}>
          <Typography variant="caption" color="#fff">
            Check Out
          </Typography>
          <TextField
            type="date"
            variant="standard"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            InputProps={{ disableUnderline: true, style: { color: '#fff' } }}
            sx={{ input: { color: '#fff' } }}
          />
        </Stack>

        {/* Guests */}
        <Stack spacing={0.5} alignItems="flex-start" px={1}>
          <Typography variant="caption" color="#fff">
            Guests
          </Typography>
          <Select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            variant="standard"
            disableUnderline
            sx={{
              color: '#fff',
              minWidth: 160,
              '.MuiSvgIcon-root': { color: '#fff' }
            }}
          >
            <MenuItem value="1 Adult, 0 Children">1 Adult, 0 Children</MenuItem>
            <MenuItem value="2 Adults, 0 Children">2 Adults, 0 Children</MenuItem>
            <MenuItem value="2 Adults, 2 Children">2 Adults, 2 Children</MenuItem>
          </Select>
        </Stack>

        {/* Button */}
        <Box px={1}>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#d1b06b',
              color: '#fff',
              px: 3,
              py: 1.5,
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#d1b06b',
                color: '#000'
              }
            }}
          >
            Check Availability
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroBanner;

import { Box, Stack, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const paymentLogos = [
  '/images/paypal.png',
  '/images/mastercard.png',
  '/images/visa.png',
  '/images/stripe.png',
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0e0e0e',
        color: '#fff',
        py: 3,
        px: { xs: 2, md: 8 },
        borderTop: '1px solid #222',
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        textAlign={{ xs: 'center', md: 'left' }}
      >
        {/* Left Text */}
        <Typography variant="body2" sx={{ fontSize: 14 }}>
          © Copyright CozyStay WordPress Theme for Hotel Booking.
        </Typography>

        {/* Payment Icons */}
        <Stack direction="row" spacing={1}>
          {paymentLogos.map((src, index) => (
            <Box
              key={index}
              component="img"
              src={src}
              alt="payment"
              sx={{ height: 24, width: 'auto', objectFit: 'contain' }}
            />
          ))}
        </Stack>

        {/* Social Icons */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body2" sx={{ fontSize: 14 }}>
            Stay Connected:
          </Typography>
          <IconButton size="small" sx={{ color: '#fff' }}>
            <FacebookIcon fontSize="inherit" />
          </IconButton>
          <IconButton size="small" sx={{ color: '#fff' }}>
            <TwitterIcon fontSize="inherit" />
          </IconButton>
          <IconButton size="small" sx={{ color: '#fff' }}>
            <PinterestIcon fontSize="inherit" />
          </IconButton>
          <IconButton size="small" sx={{ color: '#fff' }}>
            <YouTubeIcon fontSize="inherit" />
          </IconButton>
          <IconButton size="small" sx={{ color: '#fff' }}>
            <InstagramIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const NewsletterSection = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#0e0e0e',
        color: '#fff',
        py: 8,
        px: { xs: 3, md: 10 },
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        spacing={6}
      >
        {/* Left Text */}
        <Box flex={1}>
          <Typography
            variant="overline"
            sx={{ color: '#d1b06b', letterSpacing: 1 }}
          >
            STAY TUNED WITH COZYSTAY
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'serif',
              fontWeight: 500,
              mt: 2,
              lineHeight: 1.5,
            }}
          >
            Sign up for our newsletter to <br />
            receive our news, deals and <br />
            special offers.
          </Typography>
        </Box>

        {/* Right Form */}
        <Box flex={1} width="100%">
          <Stack spacing={2}>
            <Box
              sx={{
                display: 'flex',
                borderBottom: '1px solid #fff',
                alignItems: 'center',
              }}
            >
              <TextField
                variant="standard"
                placeholder="Your Email Address"
                InputProps={{
                  disableUnderline: true,
                  style: {
                    color: '#fff',
                    fontSize: '16px',
                    flex: 1,
                  },
                }}
                sx={{ flex: 1 }}
              />
              <Button
                variant="text"
                endIcon={<SendIcon />}
                sx={{
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: 500,
                  textTransform: 'none',
                  ml: 2,
                  '&:hover': {
                    color: '#d1b06b',
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>

            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': { color: '#d1b06b' },
                  }}
                />
              }
              label={
                <Typography variant="body2" sx={{ fontSize: '13px' }}>
                  I agree to the Privacy Policy
                </Typography>
              }
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default NewsletterSection;

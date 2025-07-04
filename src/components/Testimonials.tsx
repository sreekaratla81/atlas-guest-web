import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
  Stack
} from '@mui/material';
import testimonials from '../data/testimonials.json';

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', py: 6, mt: 8 }}>
      <Container>
        <Typography variant="h4" textAlign="center" gutterBottom>
          What Our Renters Say
        </Typography>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          mt={4}
          justifyContent="center"
          alignItems="stretch"
          flexWrap="wrap"
        >
          {testimonials.map(({ id, name, message, location }) => (
            <Box
              key={id}
              sx={{
                width: { xs: '100%', sm: '80%', md: '30%' },
                flexGrow: 1
              }}
            >
              <Card elevation={3} sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    “{message}”
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    — {name}, {location}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Testimonials;

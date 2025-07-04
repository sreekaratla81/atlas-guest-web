import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';

const activities = [
  {
    tag: 'RECOMMENDED',
    category: 'ARTS & CULTURE',
    title: 'Exhibitions & Museum',
    description:
      'Don’t miss the excellent art exhibitions coming up. You will always find something you like: traditional paintings, transformative sculptures, interactive art exhibits, and etc.',
    image: 'images/discover-museum.jpg',
  },
  {
    category: 'NATURE',
    title: 'Nearby Parks',
    description:
      'Numerous beautiful parks allow you to roam freely in nature even in the city. Each park has its own characteristics, come and check out what surprises it can bring you.',
    image: 'images/discover-park.jpg',
  },
  {
    category: 'DINING EXPERIENCES',
    title: 'Local Food Tour',
    description:
      'How can we not mention all kinds of seasonal delicacies and major food festivals? Highlights: Tarot readings and cocktails nights at CozyStay’s bar every Thursday this month.',
    image: 'images/discover-food.jpg',
  },
];

const DiscoverCitySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ backgroundColor: '#1e1e1e', color: '#fff', py: { xs: 8, md: 12 } }}>
      <Container>
        {/* Header */}
        <Typography
          variant="subtitle2"
          align="center"
          sx={{ color: '#d1b06b', letterSpacing: 1, mb: 1 }}
        >
          LOCAL TOURS & ACTIVITIES
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontFamily: 'serif',
            fontSize: { xs: 28, md: 40 },
            mb: 2,
          }}
        >
          Discover The City
        </Typography>
        <Typography align="center" sx={{ opacity: 0.8, maxWidth: 600, mx: 'auto', mb: 6 }}>
          You are in a city where people are never bored. Immerse yourself in local art exhibitions,
          neighbourhood events, seasonal activities and numerous parks.
        </Typography>

        {/* Activity Cards */}
        <Stack
          direction={isMobile ? 'column' : 'row'}
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {activities.map(({ tag, category, title, description, image }) => (
            <Card
              key={title}
              sx={{
                backgroundColor: '#121212',
                border: '1px solid #444',
                color: '#fff',
                width: isMobile ? '100%' : '30%',
                borderRadius: 2,
              }}
              elevation={0}
            >
              {/* Media */}
              <Box sx={{ position: 'relative' }}>
                {tag && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      backgroundColor: '#fff',
                      color: '#000',
                      fontSize: '0.7rem',
                      fontWeight: 'bold',
                      px: 1,
                      py: 0.5,
                      borderRadius: '2px',
                    }}
                  >
                    {tag}
                  </Box>
                )}
                <CardMedia
                  component="img"
                  height="200"
                  image={image}
                  alt={title}
                  sx={{ objectFit: 'cover' }}
                />
              </Box>

              {/* Content */}
              <CardContent>
                <Typography
                  variant="caption"
                  sx={{ textTransform: 'uppercase', color: '#d1b06b' }}
                >
                  {category}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontFamily: 'serif', fontSize: '1.25rem', mt: 1, mb: 1 }}
                >
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                  {description}
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    color: '#fff',
                    textTransform: 'uppercase',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  DISCOVER MORE &nbsp;▸
                </Button>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default DiscoverCitySection;

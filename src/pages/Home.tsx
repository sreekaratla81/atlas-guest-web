import { Box, Container, Typography, Divider, Stack } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchBar from '../components/SearchBar';
import apartments from '../data/apartments.json';
import ApartmentCard from '../components/ApartmentCard';
import Testimonials from '../components/Testimonials';
import IntroSection from '../components/IntroSection';
import VideoSection from '../components/VideoSection';
import ApartmentTypeSection from '../components/ApartmentTypeSection';
import HospitalitySection from '../components/HospitalitySection';
import DiscoverCitySection from '../components/DiscoverCitySection';
import VisitInfoSection from '../components/VisitInfoSection';
import NewsletterSection from '../components/NewsletterSection';

const Home = () => {
  const featured = apartments.filter((apt) => apt.featured);

  return (
    <Box>
      <HeroBanner />
      <IntroSection />
      <VideoSection />
      <ApartmentTypeSection />
      <HospitalitySection />
      <DiscoverCitySection />
      <VisitInfoSection />
      <NewsletterSection />


      {/* <Container sx={{ py: 6 }}>
        <SearchBar />

        <Typography variant="h4" mt={6} mb={2}>
          Featured Apartments
        </Typography>
        <Divider sx={{ mb: 4 }} />

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            justifyContent: 'flex-start'
          }}
        >
          {featured.map((apt) => (
            <Box
              key={apt.id}
              sx={{
                width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' }
              }}
            >
              <ApartmentCard {...apt} />
            </Box>
          ))}
        </Box>
      </Container> */}

      {/* <Testimonials /> */}
    </Box>
  );
};

export default Home;

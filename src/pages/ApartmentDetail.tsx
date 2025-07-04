import { useParams } from 'react-router-dom';
import apartments from '../data/apartments.json';
import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  Button
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';


const ApartmentDetail = () => {
  const { id } = useParams();
  const apartment = apartments.find((a) => a.id === id);

  if (!apartment) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography variant="h5">Apartment not found.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        {apartment.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {apartment.location}
      </Typography>
      <Typography variant="h6" color="primary">
        ${apartment.price}/month
      </Typography>

      {/* Swiper Image Carousel */}
      <Box mt={4}>
        <Swiper spaceBetween={10} slidesPerView={1}>
          {apartment.images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <Box
                component="img"
                src={src}
                alt={`Apartment image ${idx + 1}`}
                sx={{
                  width: '100%',
                  height: 400,
                  objectFit: 'cover',
                  borderRadius: 1
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Description */}
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Description
        </Typography>
        <Typography variant="body1">{apartment.description}</Typography>
      </Box>

      {/* Amenities */}
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Amenities
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {apartment.amenities.map((amenity, idx) => (
            <Chip key={idx} label={amenity} color="primary" />
          ))}
        </Stack>
      </Box>

      {/* Map Placeholder */}
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Location Map
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: 300,
            borderRadius: 1,
            backgroundColor: '#e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#888'
          }}
        >
          Map Placeholder
        </Box>
      </Box>

      {/* Booking Button */}
      <Box mt={4} textAlign="right">
        <Button variant="contained" size="large" color="primary">
          Book Now
        </Button>
      </Box>
    </Container>
  );
};

export default ApartmentDetail;

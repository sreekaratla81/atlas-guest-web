import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Divider,
  Stack
} from '@mui/material';
import apartmentsData from '../data/apartments.json';
import ApartmentCard from '../components/ApartmentCard';
import SidebarFilter from '../components/SidebarFilter';

interface Apartment {
  id: string;
  title: string;
  location: string;
  price: number;
  images: string[];
  amenities: string[];
}

const Apartments = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [filtered, setFiltered] = useState<Apartment[]>([]);

  useEffect(() => {
    setApartments(apartmentsData);
    setFiltered(apartmentsData);
  }, []);

  const handleFilterChange = ({
    price,
    location,
    amenities
  }: {
    price: number[];
    location: string;
    amenities: string[];
  }) => {
    const [min, max] = price;
    const query = location.toLowerCase();

    const results = apartments.filter((apt) => {
      const matchPrice = apt.price >= min && apt.price <= max;
      const matchLocation = apt.location.toLowerCase().includes(query);
      const matchAmenities = amenities.every((a) => apt.amenities.includes(a));
      return matchPrice && matchLocation && matchAmenities;
    });

    setFiltered(results);
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Browse Apartments
        </Typography>
        <Divider sx={{ mb: 4 }} />

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="flex-start"
        >
          {/* Sidebar */}
          <Box sx={{ minWidth: { xs: '100%', md: 250 } }}>
            <SidebarFilter onFilterChange={handleFilterChange} />
          </Box>

          {/* Listings */}
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              flex: 1,
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                lg: '1fr 1fr 1fr'
              }
            }}
          >
            {filtered.map((apt) => (
              <ApartmentCard key={apt.id} {...apt} />
            ))}
            {filtered.length === 0 && (
              <Typography variant="body1" sx={{ gridColumn: '1/-1' }}>
                No apartments match your filters.
              </Typography>
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Apartments;

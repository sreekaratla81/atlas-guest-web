import {
  Box,
  Typography,
  Slider,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { useState, useEffect } from 'react';

interface FilterProps {
  onFilterChange: (filters: {
    price: number[];
    location: string;
    amenities: string[];
  }) => void;
}

const amenitiesList = [
  'WiFi',
  'Air Conditioning',
  'Kitchen',
  'Parking',
  'Washer'
];

const SidebarFilter = ({ onFilterChange }: FilterProps) => {
  const [price, setPrice] = useState<number[]>([0, 5000]);
  const [location, setLocation] = useState('');
  const [amenities, setAmenities] = useState<string[]>([]);

  // Notify parent when filters change
  useEffect(() => {
    onFilterChange({ price, location, amenities });
  }, [price, location, amenities]);

  const handleAmenityToggle = (amenity: string) => {
    setAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Filter Apartments
      </Typography>

      {/* Price Range */}
      <Box mt={3}>
        <Typography gutterBottom>Price Range ($)</Typography>
          <Slider
            value={price}
            onChange={(_, newVal) => setPrice(newVal as number[])}
            valueLabelDisplay="auto"
            min={0}
            max={10000}
          />
      </Box>

      {/* Location Input */}
      <Box mt={3}>
        <TextField
          fullWidth
          label="Location"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Box>

      {/* Amenities */}
      <Box mt={3}>
        <Typography gutterBottom>Amenities</Typography>
        <FormGroup>
          {amenitiesList.map((amenity) => (
            <FormControlLabel
              key={amenity}
              control={
                <Checkbox
                  checked={amenities.includes(amenity)}
                  onChange={() => handleAmenityToggle(amenity)}
                />
              }
              label={amenity}
            />
          ))}
        </FormGroup>
      </Box>
    </Box>
  );
};

export default SidebarFilter;

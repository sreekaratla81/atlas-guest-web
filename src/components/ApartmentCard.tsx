import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActionArea
} from '@mui/material';
import { Link } from 'react-router-dom';

interface Apartment {
  id: string;
  title: string;
  location: string;
  price: number;
  images: string[];
}

const ApartmentCard = ({ id, title, location, price, images }: Apartment) => {
  return (
    <Card sx={{ maxWidth: 400, mx: 'auto' }}>
      <CardActionArea component={Link} to={`/apartments/${id}`}>
        <CardMedia
          component="img"
          height="200"
          image={images[0]}
          alt={title}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
          <Box mt={1}>
            <Typography variant="subtitle1" color="primary" fontWeight={500}>
              ${price}/month
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ApartmentCard;

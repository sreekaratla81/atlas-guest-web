import { Box, TextField, Button, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Box component="form" sx={{ mt: 4 }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="center"
        alignItems="stretch"
      >
        <TextField
          fullWidth
          label="Location"
          variant="outlined"
          sx={{ flex: 1 }}
        />
        <TextField
          fullWidth
          label="Max Price"
          type="number"
          variant="outlined"
          sx={{ flex: 1 }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ minWidth: { xs: '100%', sm: '150px' } }}
        >
          Search
        </Button>
      </Stack>
    </Box>
  );
};

export default SearchBar;

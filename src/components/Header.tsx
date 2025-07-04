import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Rooms', path: '/apartments' },
  { label: 'Pages', path: '/about' },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Box
        sx={{
          backgroundImage: `url('images/header-bg.jpg')`, // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
        }}
      >
        {/* Top Contact Info */}
        <Box sx={{ backgroundColor: 'rgba(0,0,0,0.6)', py: 1 }}>
          <Container>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              alignItems="center"
              spacing={1}
            >
              <Typography variant="caption">
                1250 West 6th Ave, New York, NY 10036, United States
              </Typography>
              <Typography variant="caption">
                TEL: +1 212 555 6688 &nbsp;&nbsp;|&nbsp;&nbsp;
                FAX: +1 212 555 6699 &nbsp;&nbsp;|&nbsp;&nbsp;
                booking@cozystay.com
              </Typography>
            </Stack>
          </Container>
        </Box>

        {/* Main Navigation */}
        <Toolbar disableGutters sx={{ py: 2 }}>
          <Container
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              flexWrap: 'wrap',
            }}
          >
            {/* Left Nav or Menu */}
            {isMobile ? (
              <>
                <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                  PaperProps={{
                    sx: { backgroundColor: '#222', color: '#fff' }
                  }}
                >
                  <Box sx={{ width: 250 }}>
                    <List>
                      {navLinks.map(({ label, path }) => (
                        <ListItem key={label} disablePadding>
                          <ListItemButton
                            component={RouterLink}
                            to={path}
                            onClick={() => setDrawerOpen(false)}
                          >
                            <ListItemText primary={label} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Drawer>
              </>
            ) : (
              <Stack direction="row" spacing={4} alignItems="center">
                {navLinks.map(({ label, path }) => (
                  <Button
                    key={label}
                    component={RouterLink}
                    to={path}
                    sx={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      borderBottom: '2px solid transparent',
                      '&:hover': {
                        borderBottomColor: '#fff'
                      }
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </Stack>
            )}

            {/* Logo */}
            <Typography
              variant="h4"
              sx={{
                flexGrow: 1,
                textAlign: 'center',
                fontFamily: 'serif',
                letterSpacing: 1
              }}
            >
              COZYSTAY
            </Typography>

            {/* Right Section */}
            {!isMobile && (
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="body2">EN / FR</Typography>
                <Button
                  variant="outlined"
                  sx={{
                    color: '#fff',
                    borderColor: '#fff',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  Check Availability
                </Button>
              </Stack>
            )}
          </Container>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;

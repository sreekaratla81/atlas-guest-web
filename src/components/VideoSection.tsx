import { Box, IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const VideoSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 300, md: 500 },
        backgroundImage: `url('images/video-cover.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <IconButton
        aria-label="Play video"
        sx={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          border: '2px solid white',
          borderRadius: '50%',
          p: 2,
          color: '#fff',
          transition: 'all 0.3s',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.4)',
            transform: 'scale(1.05)',
          },
        }}
        onClick={() => window.open('https://www.youtube.com/watch?v=YOUR_VIDEO_ID', '_blank')}
      >
        <PlayCircleOutlineIcon sx={{ fontSize: 64 }} />
      </IconButton>
    </Box>
  );
};

export default VideoSection;

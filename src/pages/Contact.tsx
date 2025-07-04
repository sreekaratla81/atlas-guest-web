import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Thanks for your message!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>

        <Typography variant="body1" mb={4}>
          Have questions or feedback? Fill out the form below and we’ll get back to you shortly.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              value={form.message}
              onChange={handleChange}
              fullWidth
              required
            />
            <Button variant="contained" type="submit" size="large">
              Send Message
            </Button>
          </Stack>
        </form>

        <Box mt={6}>
          <Typography variant="subtitle1" gutterBottom>
            📍 CozyStay Headquarters
          </Typography>
          <Typography variant="body2">123 Main Street, New York, NY 10001</Typography>
          <Typography variant="body2">📧 support@cozystay.com</Typography>
          <Typography variant="body2">📞 (123) 456-7890</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;

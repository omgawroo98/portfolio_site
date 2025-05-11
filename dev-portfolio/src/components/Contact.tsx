import { Box, Typography, TextField, Button, Stack } from '@mui/material';

const Contact = () => {
    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                Contact
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
                I'd love to hear from you! Feel free to reach out with any questions or collaboration ideas.
            </Typography>
            <Stack spacing={2} maxWidth={500}>
                <TextField label="Name" fullWidth />
                <TextField label="Email" type="email" fullWidth />
                <TextField label="Message" multiline rows={4} fullWidth />
                <Button variant="contained" color="primary">Send</Button>
            </Stack>
        </Box>
    );
};

export default Contact;

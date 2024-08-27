import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const App: React.FC = () => {
  const envVars = JSON.stringify(import.meta.env, null, 2);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Environment Variables Display
        </Typography>
        <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            import.meta.env content:
          </Typography>
          <Typography component="pre" sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', maxHeight: '400px', overflow: 'auto' }}>
            {envVars}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default App;
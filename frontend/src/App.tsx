import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const App: React.FC = () => {
  const currentEnvironment = import.meta.env.MODE;

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Environment Display
        </Typography>
        <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Current Environment:
          </Typography>
          <Typography component="pre" sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
            {currentEnvironment}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default App;
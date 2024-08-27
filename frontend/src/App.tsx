import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const App: React.FC = () => {
  const hardcodedPEM = '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC7XKdWkOT8SLlk\n...\n-----END PRIVATE KEY-----';

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Identity PEM Display
        </Typography>
        <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Hardcoded PEM Content:
          </Typography>
          <Typography component="pre" sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', maxHeight: '200px', overflow: 'auto' }}>
            {hardcodedPEM}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default App;
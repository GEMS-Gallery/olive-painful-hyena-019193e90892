import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

declare global {
  interface Window {
    PEM_CONTENT: string;
  }
}

const App: React.FC = () => {
  const pemContent = window.PEM_CONTENT || 'PEM content not available';

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Identity PEM Display
        </Typography>
        <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            PEM Content:
          </Typography>
          <Typography component="pre" sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
            {pemContent}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default App;
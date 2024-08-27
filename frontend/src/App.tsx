import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box, TextField, CircularProgress } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useForm } from 'react-hook-form';
import { backend } from 'declarations/backend';

const App: React.FC = () => {
  const [fileContent, setFileContent] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { handleSubmit } = useForm();

  const fetchFileContent = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await backend.read_file();
      if ('ok' in result) {
        setFileContent(result.ok);
      } else {
        setError(result.err);
      }
    } catch (err) {
      setError('An error occurred while fetching the file content.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFileContent();
  }, []);

  const onSubmit = () => {
    fetchFileContent();
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Identity PEM File Reader
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={10}
          variant="outlined"
          value={fileContent}
          InputProps={{
            readOnly: true,
          }}
          sx={{ mb: 2 }}
        />
        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          startIcon={<RefreshIcon />}
          onClick={handleSubmit(onSubmit)}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Refresh'}
        </Button>
      </Box>
    </Container>
  );
};

export default App;
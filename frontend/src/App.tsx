import React, { useState } from 'react';
import { Container, Typography, Button, Box, TextField, CircularProgress } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useForm } from 'react-hook-form';

const App: React.FC = () => {
  const [fileContent, setFileContent] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { handleSubmit } = useForm();

  const readFile = async () => {
    setLoading(true);
    setError('');
    try {
      const fileHandle = await window.showOpenFilePicker({
        types: [
          {
            description: 'PEM Files',
            accept: {
              'application/x-pem-file': ['.pem'],
            },
          },
        ],
        multiple: false,
      });
      const file = await fileHandle[0].getFile();
      const content = await file.text();
      setFileContent(content);
    } catch (err) {
      setError('An error occurred while reading the file.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = () => {
    readFile();
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
          {loading ? <CircularProgress size={24} /> : 'Read File'}
        </Button>
      </Box>
    </Container>
  );
};

export default App;
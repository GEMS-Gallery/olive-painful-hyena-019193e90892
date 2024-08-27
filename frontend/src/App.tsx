import React, { useState } from 'react';
import { Container, Typography, Button, Box, TextField, CircularProgress, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useForm, Controller } from 'react-hook-form';
import { backend } from 'declarations/backend';

const App: React.FC = () => {
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data: { prompt: string }) => {
    setLoading(true);
    setError('');
    setResult('');
    try {
      const response = await backend.processPrompt(data.prompt);
      if ('ok' in response) {
        setResult(response.ok);
      } else {
        setError(response.err);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Prompt Processor
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="prompt"
            control={control}
            defaultValue=""
            rules={{ required: 'Prompt is required' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                label="Enter your prompt"
                error={!!error}
                helperText={error ? error.message : null}
                sx={{ mb: 2 }}
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={loading ? <CircularProgress size={24} color="inherit" /> : <SendIcon />}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Process Prompt'}
          </Button>
        </form>
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
        {result && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Result:</Typography>
            <Typography>{result}</Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default App;
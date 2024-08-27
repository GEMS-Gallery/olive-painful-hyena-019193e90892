import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const App: React.FC = () => {
  const hardcodedPEM = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7XKdWkOT8SLlk
QWNcR/aqJPl+3uFt8kcWoE6yfZ0Jjt4HVnXl3VZbGanVvPBJU2pLQ4h1rCx1rJz0
G0UAzXrpvT1u8RVGM7f1JXx8xUTrJDQKQCy1mFqJe5UAfq6CHNRNUWyNHx3QQjRz
BJLjJ5WYGtn9AERi+rl2oRzv3OlR1jLQeWP/WyyKN3LKjHzzGPKpyWMrNFh5pWpJ
BxfT7hUwPxxHm3gL9d5sFjMMxRxXZXHqXzGFcpuGxV5L+UjsXQ1n8SyeGbAn5Xzp
RKYd3mIX9nK9zWBXEh8l3UGqXPWlGxTD+wYTFVHZYD4vzuUCGWXtLVC0GR0rnPTr
Ny1A7t6lAgMBAAECggEABa0didGbQtLqop/TOB4NDFuaIJY++XWx/PsUMYP7tZvJ
Zi4JdCqLuqZrZuuQCmb3lOsS4g5u6hRw8e0pRSlUEW4UvFokfOABHAedfHUqPHZK
Znf0BoOTKOpNqYtxDIAmErenf6MO8+OXkPKQJZhwrLXrouOxlWAHtdeVzqHCjXZq
xJHF+Qx/RwAnzI+ZCPjHp9nJUg2gIalGtFXA8+4qqBkiNXd3EZktfQqtVxrkBckt
OZhLSK3w45Yw/uUZ4rAOfuuiKdID8kRXNijfeXYSxZ9F7Z7tZ0hMZrw1Jn4Ow8Ql
JZLXr+iqYFJDVgV5qXZGpGK8F7p8MgZlhDiNBGRgAQKBgQDxZnBTUZLHHLECfNSQ
Nj9QUmxzGJwVDP8uVNTcpkZI1pWKGj6D7Ie8Ks7cBUlR8k0ZwTU+1oejA3KC9DSL
X5nEUJdLhGhNyZvwsE1ggEZsGAL1NcUfNyRFLXF0d+bYM/dtzQlLKdHZZjX9zhN6
NsLKOXNqRjgJV5/Zt1/9Yt0UAQKBgQDGwABNm/3aBVReCK1lUHMtBBMo5sFxZGmz
qVZoJdwBGmHEZPBPxVDe37vJxm0qTQNGGN9TTqBHkuIjNvw1yqsoz4tGxZBLZEpq
OUMo04WO6vDI/J4yzgLjjAhUrcTHDzRDIdRUlQs6Bh6VWMM4coLvZsAhVn/ZwGsq
XdwLLXv+pQKBgQCsWMf8adUuGOqCKlbZJNry9uPEkPjBDzl/RzYIrKDAJWP7zXRJ
xGqIHZWuyTTTvLbOe2XgZxGz8UXfh/9jdcR1qEiKzz7zBFdTCaOXCKsrPYfCHJBF
X8sMxZZgzZECVfR6OZTlqL7nVZhq0RUJExUsfzgDGQWHhb3UUf7LwgkAAQKBgQCg
OsOZlqXAZGJVsV3YnRvKyQOSHxpF4yRhPXZYVYzLm1yCouJXDj8+njQEuA4lZs4v
WCiKoKrewZVIrGjAo4zDensGFj/wUmTJZtFOZPRNRKHUqTMoOyVJ4BwPLHZAYliR
xKVWw/hVZFEkJKWFHNcTkdozgVzjEPEEqfXZYxzZZQKBgCZGrbCpQo8EJVDdFbYS
VxdfTOAhzyYWDbihQN8hdg/9SMhA8WIoQlXY1Zy2yvtUe3fFqv1mTbYv1Sws1xKa
OWLjjSVOTCeG/g7Tzx0yE7wcIfv+u2CCZV9CwFbcMVbzJYtVNxgQHc1KqdHZDxKN
NZI7ZkaegFxNZOg/THt9UXkq
-----END PRIVATE KEY-----`;

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
          <Typography component="pre" sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
            {hardcodedPEM}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default App;
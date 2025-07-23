import { Box, Button, Container, TextField } from '@mui/material';
import { useState } from 'react';

export default function PageOne() {
  const [inputOne, setInputOne] = useState('');
  const handlePasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputOne(text);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
      // Optionally handle error
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      const processed = inputOne
        .split('')
        .filter((_, i) => i % 2 === 0)
        .join('');
      await navigator.clipboard.writeText(processed);
    } catch (err) {
      console.error('Failed to write to clipboard: ', err);
      // Optionally handle error
    }
  };
  return (
    <Container
      sx={{
        mt: 4,
        minWidth: 300,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button variant='contained' onClick={handlePasteFromClipboard}>
          Paste from Clipboard
        </Button>
        <Button variant='outlined' onClick={handleCopyToClipboard}>
          Copy Second Input to Clipboard
        </Button>
        <Button variant='text' color='error' onClick={() => setInputOne('')}>
          Clear First Input
        </Button>
      </Box>
      <TextField
        label='First Text Area'
        multiline
        minRows={8}
        fullWidth
        variant='outlined'
        value={inputOne}
        onChange={e => setInputOne(e.target.value)}
      />
      <TextField
        label='Second Text Area'
        multiline
        minRows={8}
        fullWidth
        variant='outlined'
        value={inputOne
          .split('')
          .filter((_, i) => i % 2 === 0)
          .join('')}
        slotProps={{ input: { 'aria-label': 'Second Text Area' } }}
      />
    </Container>
  );
}

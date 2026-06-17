import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { ActionButtons, PageHeader, TextCard } from '../components/PageOne';
import { useClipboard } from '../hooks/useClipboard';
import { useTextTransformer } from '../hooks/useTextTransformer';

const PAGE_CONFIG = {
  header: {
    title: 'Text Transformer',
    description:
      'Transform your text by filtering characters at even indices. Paste your content, see the transformed result, and copy it to your clipboard.',
  },
  infoMessage: 'This tool filters text keeping only characters at even indices (0, 2, 4, ...)',
} as const;

function InfoMessage({ message }: { message: string }) {
  return (
    <Box
      sx={{
        mt: 4,
        p: 2,
        bgcolor: 'info.main',
        borderRadius: 2,
        opacity: 0.1,
      }}
    >
      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
        {message}
      </Typography>
    </Box>
  );
}

export default function PageOne() {
  const { text, setText, pasteFromClipboard, copyToClipboard } = useClipboard();
  const {
    processedText,
    originalLength,
    processedLength,
    percentageOfOriginal,
    hasContent,
    hasProcessedContent,
  } = useTextTransformer(text);

  const handleCopy = async () => {
    await copyToClipboard(processedText);
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <Box
      sx={{
        minHeight: `calc(100vh - 64px)`,
        bgcolor: 'background.default',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <PageHeader title={PAGE_CONFIG.header.title} description={PAGE_CONFIG.header.description} />

        <ActionButtons
          onPaste={pasteFromClipboard}
          onCopy={handleCopy}
          onClear={handleClear}
          hasContent={hasContent}
        />

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextCard
              title="Input Text"
              value={text}
              onChange={setText}
              placeholder="Paste or type your text here..."
              characterCount={originalLength}
              hasContent={hasContent}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextCard
              title="Filtered Result"
              value={processedText}
              readOnly
              characterCount={processedLength}
              showPercentage
              percentageValue={percentageOfOriginal}
              badgeText="Even indices only"
              hasContent={hasProcessedContent}
            />
          </Grid>
        </Grid>

        {hasContent && <InfoMessage message={PAGE_CONFIG.infoMessage} />}
      </Container>
    </Box>
  );
}

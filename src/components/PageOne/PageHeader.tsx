import { Box, Typography } from '@mui/material';
import type { PageHeaderProps } from './types';

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 700, color: 'text.primary' }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'text.secondary', maxWidth: 600 }}
      >
        {description}
      </Typography>
    </Box>
  );
}

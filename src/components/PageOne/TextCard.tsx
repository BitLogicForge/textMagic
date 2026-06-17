import { Box, Card, CardContent, TextField, Typography, useTheme } from '@mui/material';
import type { TextCardProps } from './types';

export function TextCard({
  title,
  value,
  onChange,
  readOnly = false,
  placeholder,
  characterCount,
  showPercentage = false,
  percentageValue = 0,
  badgeText,
  hasContent,
}: TextCardProps) {
  const theme = useTheme();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <Card
      elevation={hasContent ? 2 : 0}
      sx={{
        height: '100%',
        bgcolor: hasContent ? 'background.paper' : 'action.hover',
        transition: 'all 0.2s ease-in-out',
        border: hasContent ? '1px solid' : '1px dashed',
        borderColor: hasContent ? 'divider' : 'divider',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {hasContent && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            bgcolor: 'primary.main',
          }}
        />
      )}
      <CardContent sx={{ height: '100%', p: 2 }}>
        <Typography
          variant="subtitle2"
          sx={{
            mb: 2,
            fontWeight: 600,
            color: 'text.secondary',
            textTransform: 'uppercase',
            letterSpacing: 0.5,
            fontSize: '0.75rem',
          }}
        >
          {title}
        </Typography>
        <TextField
          multiline
          minRows={12}
          fullWidth
          variant="outlined"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          slotProps={{
            input: {
              'aria-label': title.toLowerCase(),
              readOnly,
              sx: {
                fontSize: '0.95rem',
                lineHeight: 1.6,
                bgcolor: 'background.default',
                borderRadius: 1,
                '& fieldset': {
                  border: 'none',
                },
                color: hasContent ? 'text.primary' : 'text.disabled',
              },
            },
          }}
        />
        <Box
          sx={{
            mt: 1,
            display: 'flex',
            justifyContent: 'space-between',
            gap: 1,
          }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {characterCount} characters
            {showPercentage && hasContent && (
              <span
                style={{
                  marginLeft: 8,
                  color: theme.palette.primary.main,
                }}
              >
                ({percentageValue}% of original)
              </span>
            )}
          </Typography>
          {badgeText && hasContent && (
            <Typography
              variant="caption"
              sx={{ color: 'primary.main', fontWeight: 500 }}
            >
              {badgeText}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

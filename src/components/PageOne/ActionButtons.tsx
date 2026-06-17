import { Button, Stack } from '@mui/material';
import { ContentCopy, ContentPaste, DeleteOutlined } from '@mui/icons-material';
import type { ActionButton } from './types';

export interface ActionButtonsProps {
  onPaste: () => void;
  onCopy: () => void;
  onClear: () => void;
  hasContent: boolean;
}

export function ActionButtons({ onPaste, onCopy, onClear, hasContent }: ActionButtonsProps) {
  const buttons: ActionButton[] = [
    {
      type: 'paste',
      label: 'Paste',
      variant: 'contained',
      color: 'primary',
      disabled: false,
      onClick: onPaste,
    },
    {
      type: 'copy',
      label: 'Copy Result',
      variant: 'outlined',
      color: 'primary',
      disabled: !hasContent,
      onClick: onCopy,
    },
    {
      type: 'clear',
      label: 'Clear',
      variant: 'text',
      color: 'error',
      disabled: !hasContent,
      onClick: onClear,
    },
  ];

  const getIcon = (type: ActionButton['type']) => {
    switch (type) {
      case 'paste':
        return <ContentPaste />;
      case 'copy':
        return <ContentCopy />;
      case 'clear':
        return <DeleteOutlined />;
      default:
        return undefined;
    }
  };

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={2}
      sx={{ mb: 3 }}
      useFlexGap
    >
      {buttons.map(btn => (
        <Button
          key={btn.type}
          variant={btn.variant}
          color={btn.color}
          onClick={btn.onClick}
          startIcon={getIcon(btn.type)}
          disabled={btn.disabled}
          size="medium"
          sx={{ minWidth: { xs: '100%', sm: 180 } }}
        >
          {btn.label}
        </Button>
      ))}
    </Stack>
  );
}

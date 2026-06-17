export type ActionType = 'paste' | 'copy' | 'clear';

export interface ActionButton {
  type: ActionType;
  label: string;
  variant: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  disabled: boolean;
  onClick: () => void;
}

export interface TextCardProps {
  title: string;
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  placeholder?: string;
  characterCount: number;
  showPercentage?: boolean;
  percentageValue?: number;
  badgeText?: string;
  hasContent: boolean;
}

export interface PageHeaderProps {
  title: string;
  description: string;
}

export const SEVERITIES = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
} as const;
export type Severity = (typeof SEVERITIES)[keyof typeof SEVERITIES];

export const SIZES = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
} as const;
export type Size = (typeof SIZES)[keyof typeof SIZES];

type IconSizesItem = {
  icon: string;
  menuIcon: string;
};
export const ICON_SIZES: Record<Size, IconSizesItem> = {
  [SIZES.XS]: { icon: '20px', menuIcon: '14px' },
  [SIZES.SM]: { icon: '24px', menuIcon: '16px' },
  [SIZES.MD]: { icon: '32px', menuIcon: '20px' },
  [SIZES.LG]: { icon: '40px', menuIcon: '24px' },
  [SIZES.XL]: { icon: '48px', menuIcon: '32px' },
} as const;

export type IconSize = (typeof ICON_SIZES)[keyof typeof ICON_SIZES];

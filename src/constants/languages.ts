export type LanguageItem = {
  code: string;
  name: string;
  native: string;
  icon: string;
};

export const languages: LanguageItem[] = [
  {
    code: 'en',
    name: 'English',
    native: 'English',
    icon: 'GB',
  },
  {
    code: 'pl',
    name: 'Polish',
    native: 'Polski',
    icon: 'PL',
  },
] as const;

export type LanguageCodes = (typeof languages)[number]['code'];

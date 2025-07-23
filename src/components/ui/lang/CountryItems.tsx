import { Box, Typography } from '@mui/material';

import ReactCountryFlag from 'react-country-flag';
import type { LanguageItem } from '../../../constants/languages';

type Props = {
  language: LanguageItem;
};

export default function CountryItem({ language }: Props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <ReactCountryFlag countryCode={language.icon} svg />
      <Typography>{language.native}</Typography>
    </Box>
  );
}

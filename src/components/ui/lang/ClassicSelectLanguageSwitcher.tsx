import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { languages } from '../../../constants/languages';
import i18n from '../../../i18n';
import CountryItem from './CountryItems';

// Component 1: Classic Select Dropdown

export default function ClassicSelectLanguageSwitcher() {
  const currentLanguage = i18n.language;

  return (
    <FormControl sx={{ minWidth: 140 }}>
      <InputLabel id='language-select-label'>Language</InputLabel>
      <Select labelId='language-select-label' value={currentLanguage} label='Language'>
        {languages.map(lang => (
          <MenuItem
            key={lang.code}
            value={lang.code}
            onClick={() => {
              i18n.changeLanguage(lang.code);
            }}
          >
            <CountryItem key={lang.code} language={lang} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

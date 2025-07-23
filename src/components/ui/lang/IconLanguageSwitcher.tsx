import { FormControl, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useMemo, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { ICON_SIZES, type IconSize } from '../../../constants/general';
import { languages, type LanguageItem } from '../../../constants/languages';
import i18n from '../../../i18n';
import CountryItem from './CountryItems';

type Props = {
  showLabels?: boolean;
  size?: IconSize;
  tooltip?: string;
  onLanguageChange?: (langCode: string) => void;
};

export default function IconLanguageSwitcher({ size = ICON_SIZES.lg }: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();

  const currentLanguage = i18n.language;

  // Memoize current language lookup
  const currentLang = useMemo(
    () => languages.find((lang: LanguageItem) => lang.code === currentLanguage) || languages[0],
    [currentLanguage]
  );

  return (
    <>
      <FormControl>
        <IconButton
          onClick={event => setAnchorEl(event.currentTarget)}
          sx={{
            border: '1px solid',
            borderColor: theme.palette.grey[400], // MUI theme grey
            p: 0,
          }}
        >
          <ReactCountryFlag
            countryCode={currentLang.icon}
            svg
            style={{
              fontSize: size.icon,
              borderRadius: '50%',
              display: 'block',
              overflow: 'hidden',
              aspectRatio: '1/1',
              objectFit: 'cover',
            }}
            title={currentLang.name}
          />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
          {languages.map(lang => (
            <MenuItem
              key={lang.code}
              value={lang.code}
              selected={lang.code === currentLanguage}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setAnchorEl(null);
              }}
            >
              <CountryItem key={lang.code} language={lang} />
            </MenuItem>
          ))}
        </Menu>
      </FormControl>
    </>
  );
}

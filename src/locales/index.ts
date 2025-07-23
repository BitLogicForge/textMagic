import enAuth from './en/auth.json';
import enCommon from './en/common.json';
import plAuth from './pl/auth.json';
import plCommon from './pl/common.json';

export const resources = {
  en: {
    common: enCommon,
    auth: enAuth,
  },
  pl: {
    common: plCommon,
    auth: plAuth,
  },
} as const;

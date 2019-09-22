// @flow

import I18n from 'react-native-i18n';

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

// English language is the main language for fall back:
// I18n.defaultLocale = "en-US",

I18n.translations = {
  en: require('./languages/en.json'),
  vi: require('./languages/vi.json'),
};

// I18n.locale = "vi-VN";

export default I18n;

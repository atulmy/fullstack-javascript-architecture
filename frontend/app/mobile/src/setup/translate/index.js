// Imports
import RNLanguages from 'react-native-languages'
import i18n from 'i18n-js'

// Languages
import en from './en.js'

// Translate
i18n.locale = RNLanguages.language
i18n.fallbacks = en
i18n.translations = { en }

export default i18n

import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import km from './locales/km.json'

let saved = 'en'
try { saved = localStorage.getItem('hic-lang') || 'en' } catch (e) {}

export const i18n = createI18n({
  legacy: false,
  locale: saved,
  fallbackLocale: 'en',
  messages: { en, km }
})

export function setLocale(l) {
  i18n.global.locale.value = l
  document.documentElement.lang = l
  try { localStorage.setItem('hic-lang', l) } catch (e) {}
}

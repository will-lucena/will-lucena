import { enUS } from '@/localization/en-us'
import { ptBr } from '@/localization/pt-br'
import { createI18n } from 'vue-i18n'

const messages = {
  ptBR: ptBr,
  en: enUS
}

export const i18n = createI18n({
  locale: 'ptBR',
  fallbackLocale: 'en',
  messages
})

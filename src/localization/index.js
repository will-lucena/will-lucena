import { enUS } from '@/localization/en-us'
import { ptBR } from '@/localization/pt-br'
import { createI18n } from 'vue-i18n'

const messages = {
  Português: ptBR,
  English: enUS
}

export const i18n = createI18n({
  locale: 'Português',
  fallbackLocale: 'English',
  messages
})

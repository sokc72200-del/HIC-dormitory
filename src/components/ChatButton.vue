<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const telegramUrl = 'https://t.me/chann102006'
</script>

<template>
  <a
    class="chat-button"
    :href="telegramUrl"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="t('chat.label')"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m21 4-3.2 16-6.1-4.5-3.2 3 .5-5.2L18 7 7.2 12.3 3 10.8 21 4Z"/>
    </svg>
    <span>{{ t('chat.label') }}</span>
  </a>
</template>

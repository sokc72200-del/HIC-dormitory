<script setup>
import { useI18n } from 'vue-i18n'
import { setLocale } from '../i18n'
const { locale } = useI18n()
</script>

<template>
  <div class="lang" role="group" aria-label="Language">
    <button type="button" :class="{ on: locale === 'en' }" @click="setLocale('en')">EN</button>
    <button type="button" lang="km" :class="{ on: locale === 'km' }" @click="setLocale('km')">ខ្មែរ</button>
  </div>
</template>

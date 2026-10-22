<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const questions = ['who', 'facilities', 'schedule', 'prepare', 'contact']
</script>

<template>
  <section class="faq-section" id="faq">
    <div class="wrap faq-layout">
      <div>
        <p class="eyebrow">{{ t('faq.eyebrow') }}</p>
        <h2>{{ t('faq.title') }}</h2>
        <p class="lead">{{ t('faq.intro') }}</p>
      </div>
      <div class="faq-list">
        <details v-for="question in questions" :key="question" class="faq-item">
          <summary>{{ t(`faq.${question}Question`) }}</summary>
          <p>{{ t(`faq.${question}Answer`) }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

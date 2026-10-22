<script setup>
import { useI18n } from 'vue-i18n'
import { newsEvents } from '../data.js'

const { t } = useI18n()
</script>

<template>
  <section class="updates-section" id="news">
    <div class="wrap">
      <div class="section-heading">
        <p class="eyebrow">{{ t('news.eyebrow') }}</p>
        <h2>{{ t('news.title') }}</h2>
        <p class="lead">{{ t('news.intro') }}</p>
      </div>
      <div v-if="newsEvents.length" class="news-grid">
        <article v-for="event in newsEvents" :key="event.title" class="update-card">
          <time v-if="event.date" class="update-card__date">{{ event.date }}</time>
          <h3>{{ t(event.title) }}</h3>
          <p>{{ t(event.text) }}</p>
        </article>
      </div>
      <p v-else class="empty-state">{{ t('news.empty') }}</p>
    </div>
  </section>
</template>

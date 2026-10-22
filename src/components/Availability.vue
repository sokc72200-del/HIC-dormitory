<script setup>
import { useI18n } from 'vue-i18n'
import { roomAvailability } from '../data.js'

const { t } = useI18n()
</script>

<template>
  <section class="updates-section alt-bg" id="availability">
    <div class="wrap">
      <div class="section-heading">
        <p class="eyebrow">{{ t('availability.eyebrow') }}</p>
        <h2>{{ t('availability.title') }}</h2>
        <p class="lead">{{ t('availability.intro') }}</p>
      </div>
      <div v-if="roomAvailability.length" class="availability-grid">
        <article v-for="room in roomAvailability" :key="room.type" class="update-card availability-card">
          <h3>{{ t(room.type) }}</h3>
          <p class="availability-card__count">{{ t('availability.roomsLeft', { count: room.count }) }}</p>
        </article>
      </div>
      <p v-else class="empty-state">{{ t('availability.empty') }}</p>
    </div>
  </section>
</template>

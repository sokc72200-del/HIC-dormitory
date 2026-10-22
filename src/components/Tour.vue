<script setup>
import { useI18n } from 'vue-i18n'
import { tourVideoUrl } from '../data.js'

const { t } = useI18n()
</script>

<template>
  <section class="updates-section alt-bg" id="tour">
    <div class="wrap">
      <div class="section-heading">
        <p class="eyebrow">{{ t('tour.eyebrow') }}</p>
        <h2>{{ t('tour.title') }}</h2>
        <p class="lead">{{ t('tour.intro') }}</p>
      </div>
      <div v-if="tourVideoUrl" class="tour-video">
        <iframe
          :src="tourVideoUrl"
          :title="t('tour.title')"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div v-else class="empty-state">
        <p>{{ t('tour.empty') }}</p>
        <a class="text-link" href="#gallery">{{ t('tour.galleryLink') }} →</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const communityPhoto = Object.values(import.meta.glob('../image/studyroom/*.jpg', {
  eager: true,
  import: 'default'
}))[0]
const values = ['christCentered', 'holisticGrowth', 'safeHome', 'purpose']
</script>

<template>
  <section id="about" class="about-section">
    <div class="wrap">
      <div class="about-intro">
        <div class="about-copy">
          <p class="eyebrow">{{ t('about.eyebrow') }}</p>
          <h2>{{ t('about.title') }}</h2>
          <p class="about-description">{{ t('about.text') }}</p>
          <div class="about-pillars">
            <article class="about-pillar">
              <span class="about-pillar__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-4 13 2-5 6-3-2 6-6 2Z" /></svg>
              </span>
              <div>
                <h3>{{ t('about.missionTitle') }}</h3>
                <p>{{ t('about.missionText') }}</p>
              </div>
            </article>
            <article class="about-pillar">
              <span class="about-pillar__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Zm10-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg>
              </span>
              <div>
                <h3>{{ t('about.visionTitle') }}</h3>
                <p>{{ t('about.visionText') }}</p>
              </div>
            </article>
          </div>
          <a class="text-link" href="#gallery">{{ t('about.galleryLink') }} <span aria-hidden="true">→</span></a>
        </div>
        <img
          class="about-photo"
          :src="communityPhoto"
          :alt="t('about.imageAlt')"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div class="about-values">
        <div class="about-values__heading">
          <p class="eyebrow">{{ t('about.valuesEyebrow') }}</p>
          <h2>{{ t('about.valuesTitle') }}</h2>
        </div>
        <div class="about-values__grid">
          <article v-for="(value, index) in values" :key="value" class="about-value">
            <span class="about-value__icon" aria-hidden="true">
              <svg v-if="index === 0" viewBox="0 0 24 24"><path d="M12 4v16m-8-8h16" /></svg>
              <svg v-else-if="index === 1" viewBox="0 0 24 24"><path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7-1a2.5 2.5 0 1 0 0-5m-12 14v-2a5 5 0 0 1 10 0v2m2-5a4 4 0 0 1 5 4v1" /></svg>
              <svg v-else-if="index === 2" viewBox="0 0 24 24"><path d="m3 10 9-7 9 7v10H3V10Zm6 10v-6h6v6" /></svg>
              <svg v-else viewBox="0 0 24 24"><path d="M12 21s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.5-8 11-8 11Zm-5-7h3l2-4 2 6 1-2h2" /></svg>
            </span>
            <h3>{{ t(`about.values.${value}Title`) }}</h3>
            <p>{{ t(`about.values.${value}Text`) }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

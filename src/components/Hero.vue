<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="hero">
    <div class="wrap hero-layout">
      <div class="hero-copy">
        <p class="eyebrow">{{ t('hero.eyebrow') }}</p>
        <h1>{{ t('hero.title') }}</h1>
        <p class="hero-intro">{{ t('hero.text') }}</p>
        <div class="hero-actions">
          <a class="btn main" href="#apply">{{ t('hero.apply') }} <span aria-hidden="true">→</span></a>
          <a class="btn alt" href="#about">{{ t('hero.discover') }}</a>
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <span class="hero-art__orbit"></span>
        <span class="hero-art__sun"></span>
        <span class="hero-art__cross"></span>
        <span class="hero-art__caption">{{ t('hero.artCaption') }}</span>
      </div>
    </div>
  </div>
</template>

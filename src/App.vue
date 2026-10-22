<script setup>
import { useI18n } from 'vue-i18n'
import LangSwitch from './components/LangSwitch.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import PhotoGallery from './components/PhotoGallery.vue'
import Schedule from './components/Schedule.vue'
import Apply from './components/Apply.vue'
import Rules from './components/Rules.vue'
import Contact from './components/Contact.vue'
import Faq from './components/Faq.vue'
import News from './components/News.vue'
import Availability from './components/Availability.vue'
import Tour from './components/Tour.vue'
import ChatButton from './components/ChatButton.vue'
const { t } = useI18n()
</script>

<template>
  <a class="skip-link" href="#main">{{ t('skipToContent') }}</a>
  <header class="top" id="top">
    <a class="brand" href="#top" :aria-label="t('brand')">
      <span class="brand-mark" aria-hidden="true">H</span>
      <span>{{ t('brand') }}</span>
    </a>
    <nav class="site-nav" :aria-label="t('navigation')">
      <a href="#about">{{ t('nav.about') }}</a>
      <a href="#gallery">{{ t('nav.gallery') }}</a>
      <a href="#news">{{ t('nav.news') }}</a>
      <a href="#week">{{ t('nav.schedule') }}</a>
      <a href="#life">{{ t('nav.living') }}</a>
      <a href="#availability">{{ t('nav.availability') }}</a>
      <a href="#faq">{{ t('nav.faq') }}</a>
      <a href="#apply">{{ t('nav.apply') }}</a>
      <a href="#tour">{{ t('nav.tour') }}</a>
      <a href="#location">{{ t('nav.location') }}</a>
      <a href="#contact">{{ t('nav.contact') }}</a>
    </nav>
    <LangSwitch />
  </header>
  <main id="main">
    <Hero />
    <About />
    <PhotoGallery />
    <Tour />
    <News />
    <Schedule />
    <Rules />
    <Availability />
    <Faq />
    <Apply />
    <Contact />
  </main>
  <ChatButton />
  <footer>
    <a class="footer-brand" href="#top">{{ t('brand') }}</a>
    <span>© HIC Transformed Life Church</span>
    <a class="back-to-top" href="#top">{{ t('backToTop') }} ↑</a>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const phoneNumber = '0968438380'
const emailAddress = 'sokc72200@gmail.com'
const telegramUrl = 'https://t.me/chann102006'
const locationUrl = 'https://www.google.com/maps/place/Transformed+Life+Church/@11.5942047,104.8231634,3249m/data=!3m1!1e3!4m15!1m8!3m7!1s0x31094e063767011d:0xdf247aac88dc64a0!2sSangkat+Krang+Thnong,+Phnom+Penh!3b1!8m2!3d11.5892498!4d104.8367063!16s%2Fg%2F12vsmzvsx!3m5!1s0x31094d0035a51cc3:0x50ca1d0516504f76!8m2!3d11.593741!4d104.839972!16s%2Fg%2F11zys0zxbb?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D'
</script>

<template>
  <section class="contact-section" id="contact">
    <div class="wrap">
      <div class="contact-card">
        <div class="contact-intro">
          <p class="eyebrow">{{ t('contact.eyebrow') }}</p>
          <h2>{{ t('contact.title') }}</h2>
          <p class="contact-copy">{{ t('contact.text') }}</p>
          <a class="btn main" href="#apply">{{ t('contact.inquiryLink') }}</a>
        </div>
        <ul class="contact-details">
          <li>
            <a class="contact-method" :href="`tel:${phoneNumber}`">
              <span class="contact-method__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm0 3v11h10V6H7Zm4 13h2"/></svg>
              </span>
              <span class="contact-method__text">
                <strong>{{ t('contact.phoneLabel') }}</strong>
                <span>{{ phoneNumber }}</span>
              </span>
              <span class="contact-method__arrow" aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <a class="contact-method" :href="`mailto:${emailAddress}`">
              <span class="contact-method__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M4 6h16v12H4zM4 7l8 6 8-6"/></svg>
              </span>
              <span class="contact-method__text">
                <strong>{{ t('contact.emailLabel') }}</strong>
                <span>{{ emailAddress }}</span>
              </span>
              <span class="contact-method__arrow" aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <a class="contact-method" :href="telegramUrl" target="_blank" rel="noopener noreferrer">
              <span class="contact-method__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="m21 4-3.2 16-6.1-4.5-3.2 3 .5-5.2L18 7 7.2 12.3 3 10.8 21 4Z"/></svg>
              </span>
              <span class="contact-method__text">
                <strong>{{ t('contact.telegramLabel') }}</strong>
                <span>Marb Sokchan</span>
              </span>
              <span class="contact-method__arrow" aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <a class="contact-method" :href="locationUrl" target="_blank" rel="noopener noreferrer">
              <span class="contact-method__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
              </span>
              <span class="contact-method__text">
                <strong>{{ t('contact.locationLabel') }}</strong>
                <span>HIC Transformed Life Church</span>
              </span>
              <span class="contact-method__arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

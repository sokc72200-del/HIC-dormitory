<script setup>
import { useI18n } from 'vue-i18n'
import { facilities, rules } from '../data'
const { t, tm, rt } = useI18n()

const photos = Object.fromEntries(Object.entries(import.meta.glob('../image/*/*.jpg', {
  eager: true,
  import: 'default'
})).map(([path, src]) => [path.split('/')[2], src]))
</script>

<template>
  <section class="alt-bg" id="life">
    <div class="wrap">
      <div class="facilities-heading">
        <div>
          <p class="eyebrow">{{ t('living.eyebrow') }}</p>
          <h2>{{ t('living.facilities') }}</h2>
        </div>
        <p class="lead">{{ t('living.facilitiesIntro') }}</p>
      </div>
      <div class="facility-grid">
        <article v-for="facility in facilities" :key="facility.key" class="facility-card">
          <div class="facility-card__image">
            <img
              :src="photos[facility.photoFolder]"
              :alt="t(`living.${facility.key}`)"
              loading="lazy"
              decoding="async"
            />
            <span class="facility-card__icon" aria-hidden="true">
              <svg v-if="facility.icon === 'study'" viewBox="0 0 24 24">
                <path d="M12 7c-2.4-2-5-2-8-1v12c3-1 5.6-1 8 1m0-12c2.4-2 5-2 8-1v12c-3-1-5.6-1-8 1m0-12v12" />
              </svg>
              <svg v-else-if="facility.icon === 'kitchen'" viewBox="0 0 24 24">
                <path d="M5 11h14l-1 9H6l-1-9Zm2-3h10l2 3H5l2-3Zm2-4v4m6-4v4M8 14v3m8-3v3M3 5v4m0-2h3m15-2v4m0-2h-3" />
              </svg>
              <svg v-else-if="facility.icon === 'prayer'" viewBox="0 0 24 24">
                <path d="M9 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-2 3 3-2 3 2 2 4-3 1-2-3-2 3-4 2-1-2 3-3 1-2Zm7 4 3 1 2 4m-10-6-1 5h6m-9 2h13" />
              </svg>
              <svg v-else-if="facility.icon === 'laundry'" viewBox="0 0 24 24">
                <path d="M5 3h14v18H5zM8 7h.01M11 7h5m-4 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
              <svg v-else-if="facility.icon === 'wifi'" viewBox="0 0 24 24">
                <path d="M3 9a14 14 0 0 1 18 0M6.5 12.5a9 9 0 0 1 11 0M10 16a4 4 0 0 1 4 0m-2 4h.01" />
              </svg>
              <svg v-else viewBox="0 0 24 24">
                <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 20v-2a5 5 0 0 1 10 0v2m0 0v-2a5 5 0 0 1 10 0v2M7 16h10" />
              </svg>
            </span>
          </div>
          <div class="facility-card__body">
            <h3>{{ t(`living.${facility.key}`) }}</h3>
            <p>{{ t(`living.facilityDetails.${facility.key}`) }}</p>
          </div>
        </article>
      </div>
      <div class="house-rules">
        <div class="rules-heading">
          <p class="eyebrow">{{ t('living.rulesEyebrow') }}</p>
          <h2>{{ t('living.rules') }}</h2>
          <p class="lead">{{ t('living.rulesIntro') }}</p>
        </div>
        <div class="rules-grid">
          <article v-for="rule in rules" :key="rule" class="rule-card" :class="`rule-card--${rule}`">
            <div class="rule-card__heading">
              <span class="rule-card__icon" aria-hidden="true">
                <svg v-if="rule === 'conduct'" viewBox="0 0 24 24">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9-3 2 2 4-4" />
                </svg>
                <svg v-else-if="rule === 'quiet'" viewBox="0 0 24 24">
                  <path d="M19 15.5A8.5 8.5 0 0 1 8.5 5 8.5 8.5 0 1 0 19 15.5ZM16 3v4m-2-2h4" />
                </svg>
                <svg v-else-if="rule === 'visitors'" viewBox="0 0 24 24">
                  <path d="M15 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7-7.5a4 4 0 0 1 0 7.7m5 10.3v-2a4 4 0 0 0-3-3.9" />
                </svg>
                <svg v-else-if="rule === 'kitchen'" viewBox="0 0 24 24">
                  <path d="M7 3v8m-3-8v4a3 3 0 0 0 6 0V3m-3 8v10m9-18v18m0-18c3 2 3 6 0 8" />
                </svg>
                <svg v-else viewBox="0 0 24 24">
                  <path d="M12 22V9m0 4c-5 0-8-3-8-8 5 0 8 3 8 8Zm0-3c0-5 3-8 8-8 0 5-3 8-8 8Zm-7 6c2 0 4 1 5 3m9-3c-2 0-4 1-5 3" />
                </svg>
              </span>
              <div>
                <h3>{{ t(`living.ruleTitles.${rule}`) }}</h3>
                <span class="rule-card__underline" aria-hidden="true"></span>
              </div>
            </div>
            <ul>
              <li v-for="(detail, index) in tm(`living.ruleDetails.${rule}`)" :key="index">{{ rt(detail) }}</li>
            </ul>
          </article>
        </div>
        <div class="rules-goal">
          <span class="rules-goal__heart" aria-hidden="true">♡</span>
          <div class="rules-goal__copy">
            <strong>{{ t('living.goalTitle') }}</strong>
            <p>{{ t('living.goalText') }}</p>
          </div>
          <div class="rules-goal__thanks">
            <span aria-hidden="true">♡</span>
            <p>{{ t('living.goalThanks') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

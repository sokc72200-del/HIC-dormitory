<script setup>
import { useI18n } from 'vue-i18n'
import { applySteps } from '../data'
const { t } = useI18n()

function prepareEmail(event) {
  const form = event.currentTarget
  const fields = new FormData(form)
  const subject = t('apply.emailSubject')
  const body = [
    `${t('apply.nameLabel')}: ${fields.get('name')}`,
    `${t('apply.schoolLabel')}: ${fields.get('school')}`,
    `${t('apply.contactLabel')}: ${fields.get('contact')}`,
    `${t('apply.messageLabel')}: ${fields.get('message') || t('apply.noMessage')}`
  ].join('\n')

  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <section id="apply">
    <div class="wrap">
      <p class="eyebrow">{{ t('apply.eyebrow') }}</p>
      <h2>{{ t('apply.title') }}</h2>
      <p class="lead">{{ t('apply.intro') }}</p>
      <div class="apply-layout">
        <ol class="steps">
          <li v-for="s in applySteps" :key="s">{{ t('apply.' + s) }}</li>
        </ol>
        <form class="application-form" @submit.prevent="prepareEmail">
          <h3>{{ t('apply.formTitle') }}</h3>
          <p class="form-note">{{ t('apply.formNote') }}</p>
          <label>
            {{ t('apply.nameLabel') }}
            <input name="name" type="text" autocomplete="name" required />
          </label>
          <label>
            {{ t('apply.schoolLabel') }}
            <input name="school" type="text" autocomplete="organization" required />
          </label>
          <label>
            {{ t('apply.contactLabel') }}
            <input name="contact" type="text" required />
          </label>
          <label>
            {{ t('apply.messageLabel') }}
            <textarea name="message" rows="3"></textarea>
          </label>
          <button class="btn main form-submit" type="submit">{{ t('apply.submit') }} <span aria-hidden="true">→</span></button>
        </form>
      </div>
    </div>
  </section>
</template>

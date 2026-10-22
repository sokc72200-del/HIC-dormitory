<script setup>
import { useI18n } from 'vue-i18n'
import { schedule } from '../data'
const { t } = useI18n()
</script>

<template>
  <section class="alt-bg" id="week">
    <div class="wrap">
      <h2>{{ t('schedule.title') }}</h2>
      <ul class="week">
        <li v-for="item in schedule" :key="item.when">
          <b>{{ t(item.when) }}</b>
          <span>{{ t(item.what) }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

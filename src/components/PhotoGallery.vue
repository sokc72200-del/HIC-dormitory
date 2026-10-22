<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const photos = Object.entries(import.meta.glob('../image/*.jpg', {
  eager: true,
  import: 'default'
}))
  .filter(([path]) => !path.includes('photo_9_'))
  .sort(([a], [b]) => {
    const photoNumber = path => Number(path.match(/photo_(\d+)_/)?.[1])
    return photoNumber(a) - photoNumber(b)
  })
  .map(([, src], index) => ({
    src,
    number: index + 1
  }))

const viewer = ref(null)
const selectedIndex = ref(-1)
const selectedPhoto = computed(() => photos[selectedIndex.value])

function openPhoto(index) {
  selectedIndex.value = index
  viewer.value?.showModal()
}

function closeViewer() {
  viewer.value?.close()
}

function movePhoto(direction) {
  selectedIndex.value = (selectedIndex.value + direction + photos.length) % photos.length
}

function closeOnBackdrop(event) {
  if (event.target === viewer.value) closeViewer()
}
</script>

<template>
  <section class="gallery-section" id="gallery">
    <div class="wrap">
      <div class="gallery-heading">
        <div>
          <p class="eyebrow">{{ t('gallery.eyebrow') }}</p>
          <h2>{{ t('gallery.title') }}</h2>
        </div>
        <p class="lead">{{ t('gallery.text') }}</p>
      </div>
      <div class="gallery-grid">
        <figure v-for="(photo, index) in photos" :key="photo.src" class="gallery-card">
          <button
            class="gallery-open"
            type="button"
            :aria-label="t('gallery.openImage', { number: photo.number })"
            @click="openPhoto(index)"
          >
            <img
              :src="photo.src"
              :alt="t('gallery.imageAlt', { number: photo.number })"
              loading="lazy"
              decoding="async"
            />
          </button>
          <figcaption>{{ t('gallery.photoLabel', { number: photo.number }) }}</figcaption>
        </figure>
      </div>
    </div>
    <dialog
      ref="viewer"
      class="photo-viewer"
      :aria-label="selectedPhoto ? t('gallery.viewerTitle', { number: selectedPhoto.number }) : t('gallery.title')"
      @click="closeOnBackdrop"
      @keydown.esc.prevent="closeViewer"
      @close="selectedIndex = -1"
    >
      <div v-if="selectedPhoto" class="photo-viewer__content">
        <div class="photo-viewer__toolbar">
          <span>{{ t('gallery.photoLabel', { number: selectedPhoto.number }) }} / {{ photos.length }}</span>
          <button class="photo-viewer__close" type="button" :aria-label="t('gallery.close')" @click="closeViewer">×</button>
        </div>
        <div class="photo-viewer__image-wrap">
          <button class="photo-viewer__arrow" type="button" :aria-label="t('gallery.previous')" @click="movePhoto(-1)">‹</button>
          <img :src="selectedPhoto.src" :alt="t('gallery.imageAlt', { number: selectedPhoto.number })" />
          <button class="photo-viewer__arrow" type="button" :aria-label="t('gallery.next')" @click="movePhoto(1)">›</button>
        </div>
      </div>
    </dialog>
  </section>
</template>

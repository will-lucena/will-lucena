<template>
  <main class="flex flex-col gap-2">
    <CustomHeading level="h2" class="text-center sm:text-left">
      {{ $t('projects.header') }}
    </CustomHeading>

    <section class="flex flex-row gap-8 flex-wrap">
      <div
        v-for="({ imageSource, key, url }, index) in projects"
        :key="index"
        class="flex flex-col gap-4 p-4 rounded-lg shadow-lg max-w-md sm:max-w-xxxs lg:max-w-xxs bg-zinc-100 dark:bg-zinc-800 cursor-pointer"
        @click="onClickNavigate(url)"
      >
        <img
          :src="imageSource"
          :alt="name"
          class="flex-1 rounded-lg shadow-2xl text-neutral-950 dark:text-neutral-50"
        />
        <h3 class="text-xl text-neutral-950 dark:text-neutral-50">
          {{ $t(`projects.projects.${key}.name`) }}
        </h3>
        <Paragraph class="text-sm text-neutral-950 dark:text-neutral-50">
          {{ $t(`projects.projects.${key}.description`) }}
        </Paragraph>
      </div>
    </section>
  </main>
</template>

<script setup>
import CasabellaContrutora from '@/assets/casabella-contrutora.png'
import WillLucena from '@/assets/will-lucena.png'
import CustomHeading from '@/components/CustomHeading.vue'
import Paragraph from '@/components/Paragraph.vue'
import { ref } from 'vue'

const projects = ref([
  {
    imageSource: CasabellaContrutora,
    key: 'casabella',
    url: 'https://casabellaconstrucao.com.br/'
  },
  {
    imageSource: WillLucena,
    key: 'willLucena',
    url: 'https://will-lucena.vercel.app'
  }
  // {
  //   imageSource: '',
  //   name: 'Alt',
  //   description: 'Temp lreoiahksdjahksczbn ,xcmhaksdjgajksdghjqwdghaksdhajsdg'
  // }
])

function onClickNavigate(url) {
  window.open(url, '_blank')
}
</script>

<style lang="scss" scoped></style>

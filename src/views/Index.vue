<template>
  <section class="m-auto lg:h-[90vh] flex flex-col justify-center gap-8">
    <div class="flex flex-col md:flex-row items-center flex-1 md:gap-8">
      <div class="flex flex-col gap-2">
        <CustomHeading level="h2" class="text-center mb-4">
          {{ $t('index.greetings') }}
        </CustomHeading>
        <Paragraph>
          {{ $t('index.introduction') }}
        </Paragraph>
        <Paragraph>
          <strong>{{ $t('index.question') }}</strong>
        </Paragraph>
        <Paragraph> {{ $t('index.comment') }} </Paragraph>
        <Paragraph>
          {{ $t('index.answer') }}
        </Paragraph>

        <div class="flex w-full flex-row justify-center gap-4 my-4">
          <a href="https://github.com/will-lucena" target="_blank">
            <CustomIcon icon="fab fa-github" size="2xl" />
          </a>
          <a href="https://www.linkedin.com/in/will-lucena/" target="_blank">
            <CustomIcon icon="fab fa-linkedin" size="2xl" />
          </a>
          <a href="https://www.instagram.com/will.lucenads/" target="_blank">
            <CustomIcon icon="fab fa-instagram" size="2xl" />
          </a>
        </div>
      </div>

      <img
        class="rounded-full object-cover max-w-[270px] sm:max-w-[400px]"
        src="https://avatars.githubusercontent.com/u/11667114?v=4"
        alt="Will Lucena"
      />
    </div>

    <CustomHeading level="h2" class="text-center my-4">
      {{ $t('index.cta.scroll') }}
    </CustomHeading>
  </section>

  <section class="m-auto flex flex-col md:flex-row justify-center items-center gap-8">
    <img
      class="rounded-lg object-cover max-w-[270px] sm:max-w-[400px]"
      src="@/assets/will-e-zeus.jpg"
      alt="Will Lucena"
    />

    <div class="flex flex-col gap-2">
      <Paragraph> {{ $t('index.presentation1') }} </Paragraph>
      <Paragraph> {{ $t('index.presentation2') }} </Paragraph>
      <Paragraph> {{ $t('index.presentation3') }} </Paragraph>
      <Paragraph> {{ $t('index.presentation4') }} </Paragraph>

      <button
        class="w-full lg:w-fit text-neutral-950 dark:text-neutral-50 p-4 border-solid border-2 rounded hover:bg-neutral-950 dark:hover:text-neutral-950 dark:hover:bg-neutral-50 hover:text-neutral-50 self-center"
        @click="onClickInvite"
      >
        {{ $t('index.cta.cv') }}
      </button>
    </div>
  </section>
</template>

<script setup>
import CustomHeading from '@/components/CustomHeading.vue'
import CustomIcon from '@/components/CustomIcon.vue'
import Paragraph from '@/components/Paragraph.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

function onClickInvite() {
  router.push('/cv')
}
</script>

<style lang="scss" scoped></style>

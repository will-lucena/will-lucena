<template>
  <div class="mt-12 flex flex-col gap-4">
    <header class="flex flex-col sm:flex-row gap-4 items-center sm:justify-between">
      <CustomHeading level="h2" class="text-2xl">William Lucena dos Santos</CustomHeading>
      <div class="flex flex-row gap-4 items-center">
        <a href="https://github.com/will-lucena" target="_blank" class="hover:underline">
          <CustomIcon icon="fab fa-github" size="xl"> Github</CustomIcon>
        </a>
        <a href="https://www.linkedin.com/in/will-lucena/" target="_blank" class="hover:underline">
          <CustomIcon icon="fab fa-linkedin" size="xl"> Linkedin</CustomIcon>
        </a>
        <a href="https://www.instagram.com/will.lucenads/" target="_blank" class="hover:underline">
          <CustomIcon icon="fab fa-instagram" size="xl"> Instagram</CustomIcon>
        </a>

        <a>
          <CustomIcon icon="fas fa-location-dot" size="lg"> {{ $t('cv.location') }}</CustomIcon>
        </a>
      </div>
    </header>

    <Paragraph>
      {{ $t('cv.presentation1') }}
    </Paragraph>
    <Paragraph>
      {{ $t('cv.presentation2') }}
    </Paragraph>

    <Paragraph>
      {{ $t('cv.presentation3') }}
    </Paragraph>

    <hr class="w-full bg-neutral-950 bg:text-neutral-50" />

    <CustomHeading level="h3">{{ $t('cv.contentHeader') }}</CustomHeading>
    <section class="flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-between items-baseline gap-4">
          <CustomHeading level="h4"
            ><strong>{{ $t('cv.alice.name') }}</strong></CustomHeading
          >
          <Paragraph class="sm:text-sm text-right">{{ $t('cv.alice.period') }}</Paragraph>
        </div>
        <Paragraph>
          {{ $t('cv.alice.description1') }} <strong>(VueJs)</strong>
          {{ $t('cv.alice.description2') }} <strong>(Nuxt)</strong>
          {{ $t('cv.alice.description3') }} <strong>(VueJs)</strong>.
          {{ $t('cv.alice.description4') }}
        </Paragraph>

        <ol class="list-disc px-8">
          <li class="text-neutral-950 dark:text-neutral-50">
            <Paragraph>
              {{ $t('cv.alice.description5') }}
            </Paragraph>
          </li>
          <li class="text-neutral-950 dark:text-neutral-50">
            <Paragraph>
              {{ $t('cv.alice.description6') }}
            </Paragraph>
          </li>
          <li class="text-neutral-950 dark:text-neutral-50">
            <Paragraph>
              {{ $t('cv.alice.description7') }}
            </Paragraph>
          </li>
        </ol>

        <Paragraph> {{ $t('cv.alice.description8') }} </Paragraph>
        <hr class="w-1/2 bg-neutral-950 bg:text-neutral-50" />
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-between items-baseline gap-4">
          <CustomHeading level="h4"><strong>Contabilizei</strong></CustomHeading>
          <Paragraph class="sm:text-sm text-right">{{ $t('cv.ctbz.period') }}</Paragraph>
        </div>
        <Paragraph>
          {{ $t('cv.ctbz.description1') }} <strong>(VueJs)</strong>,
          {{ $t('cv.ctbz.description2') }}
        </Paragraph>
        <ol class="list-disc px-8">
          <li class="text-neutral-950 dark:text-neutral-50">
            <Paragraph>
              {{ $t('cv.ctbz.description3') }}
            </Paragraph>
          </li>
          <li class="text-neutral-950 dark:text-neutral-50">
            <Paragraph>
              {{ $t('cv.ctbz.description4') }}
            </Paragraph>
          </li>
          <li class="text-neutral-950 dark:text-neutral-50">
            <Paragraph>
              {{ $t('cv.ctbz.description5') }}
            </Paragraph>
          </li>
        </ol>

        <Paragraph>
          {{ $t('cv.ctbz.description6') }} <strong>(Angular)</strong>
          {{ $t('cv.ctbz.description7') }}
        </Paragraph>

        <Paragraph>
          {{ $t('cv.ctbz.description8') }}
        </Paragraph>

        <hr class="w-1/2 bg-neutral-950 bg:text-neutral-50" />
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-between items-baseline gap-4">
          <CustomHeading level="h4"
            ><strong>{{ $t('cv.flourish.name') }}</strong></CustomHeading
          >
          <Paragraph class="sm:text-sm text-right">{{ $t('cv.flourish.period') }}</Paragraph>
        </div>
        <Paragraph>
          {{ $t('cv.flourish.description1') }} <strong>(NativeScript + Vue)</strong>
          {{ $t('cv.flourish.description2') }} <strong>(CocosJs)</strong>
          {{ $t('cv.flourish.description3') }} <strong>(Nuxt)</strong>
          {{ $t('cv.flourish.description4') }} <strong>(VueJs)</strong>.
          {{ $t('cv.flourish.description5') }}
        </Paragraph>

        <ol class="list-disc px-8">
          <li class="text-neutral-950 dark:text-neutral-50">
            <Paragraph>
              {{ $t('cv.flourish.description6') }}
            </Paragraph>
          </li>
          <li class="text-neutral-950 dark:text-neutral-50">
            <Paragraph>
              {{ $t('cv.flourish.description7') }}
            </Paragraph>
          </li>
        </ol>
      </div>
    </section>

    <hr class="w-full bg-neutral-950 bg:text-neutral-50" />

    <CustomHeading level="h3">{{ $t('cv.scollarship.header') }}</CustomHeading>
    <CustomHeading level="h4">
      <strong>{{ $t('cv.scollarship.university') }}</strong>
    </CustomHeading>
    <Paragraph> {{ $t('cv.scollarship.course') }}, {{ $t('cv.scollarship.period') }} </Paragraph>

    <hr class="w-full bg-neutral-950 bg:text-neutral-50" />

    <CustomHeading level="h3">{{ $t('cv.skills.header') }}</CustomHeading>
    <Paragraph class="text-center sm:text-left">
      <strong>{{ $t('cv.skills.languages.header') }}:</strong>
      {{ $t('cv.skills.languages.content') }}
    </Paragraph>

    <Paragraph class="text-center sm:text-left">
      <strong>{{ $t('cv.skills.frameworks.header') }}:</strong>
      {{ $t('cv.skills.frameworks.content') }}
    </Paragraph>

    <Paragraph class="text-center sm:text-left">
      <strong>{{ $t('cv.skills.tools.header') }}:</strong>
      {{ $t('cv.skills.tools.content') }}
    </Paragraph>

    <Paragraph class="text-center sm:text-left">
      <strong>{{ $t('cv.skills.testing.header') }}:</strong>
      {{ $t('cv.skills.testing.content') }}
    </Paragraph>

    <Paragraph class="text-center sm:text-left">
      <strong>{{ $t('cv.skills.methodologies.header') }}:</strong>
      {{ $t('cv.skills.methodologies.content') }}
    </Paragraph>
  </div>
</template>

<script setup>
import CustomHeading from '@/components/CustomHeading.vue'
import CustomIcon from '@/components/CustomIcon.vue'
import Paragraph from '@/components/Paragraph.vue'
</script>

<style lang="scss" scoped></style>

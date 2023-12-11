<template>
  <main class="flex flex-col gap-2">
    <CustomHeading level="h2" class="text-center sm:text-left">
      {{ $t('blog.header') }}
    </CustomHeading>
    <CustomHeading level="h3" class="text-center sm:text-left">
      {{ $t('blog.content') }}
    </CustomHeading>
  </main>
</template>

<script setup>
import CustomHeading from '@/components/CustomHeading.vue'
</script>

<style lang="scss" scoped></style>

<template>
  <h1 v-if="h1" v-bind="$attrs" class="text-4xl sm:text-3xl text-neutral-950 dark:text-neutral-50">
    <slot></slot>
  </h1>
  <h2 v-if="h2" v-bind="$attrs" class="text-3xl sm:text-2xl text-neutral-950 dark:text-neutral-50">
    <slot></slot>
  </h2>
  <h3 v-if="h3" v-bind="$attrs" class="text-2xl sm:text-xl text-neutral-950 dark:text-neutral-50">
    <slot></slot>
  </h3>
  <h4 v-if="h4" v-bind="$attrs" class="text-xl sm:text-lg text-neutral-950 dark:text-neutral-50">
    <slot></slot>
  </h4>
  <h5 v-if="h5" v-bind="$attrs" class="text-lg sm:text-base text-neutral-950 dark:text-neutral-50">
    <slot></slot>
  </h5>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['level'])

const h1 = computed(() => {
  return props.level === 'h1'
})

const h2 = computed(() => {
  return props.level === 'h2'
})

const h3 = computed(() => {
  return props.level === 'h3'
})

const h4 = computed(() => {
  return props.level === 'h4'
})

const h5 = computed(() => {
  return props.level === 'h5'
})
</script>

<style lang="scss" scoped></style>

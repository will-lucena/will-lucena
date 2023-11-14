<template>
  <ul class="hidden sm:flex flex-row gap-4 items-center">
    <li v-for="({ menuItem, pagePath }, index) in menuItems" :key="index">
      <router-link
        class="text-slate-950 dark:text-neutral-50 hover:underline focus:underline"
        :to="pagePath"
      >
        {{ $t(`header.menuItems.${menuItem}`) }}
      </router-link>
    </li>
    <li>
      <CustomIcon :icon="themeIcon" @click="toggleTheme" />
    </li>
  </ul>
</template>

<script setup>
import CustomIcon from '@/components/CustomIcon.vue'

const emit = defineEmits(['toggleTheme'])
defineProps({
  menuItems: {
    type: Array,
    required: true
  },
  themeIcon: {
    type: String,
    required: true
  }
})

function toggleTheme() {
  emit('toggleTheme')
}
</script>

<style lang="scss" scoped></style>

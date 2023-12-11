<template>
  <div class="w-full fixed flex justify-center">
    <header
      class="w-full max-w-5xl mx-auto flex flex-row justify-between items-center sm:items-end p-4 bg-neutral-50/75 dark:bg-neutral-800/75 backdrop-blur-sm"
    >
      <CustomHeading level="h1">
        <router-link class="hover:underline" to="/">Will Lucena</router-link>
      </CustomHeading>

      <nav class="flex flex-row gap-4">
        <NavBar :menu-items="menuItems" :theme-icon="themeIcon" @toggle-theme="toggleTheme" />
        <SideDrawer :menu-items="menuItems" :theme-icon="themeIcon" @toggle-theme="toggleTheme" />
        <LanguageSwitch />
      </nav>
    </header>
  </div>
</template>

<script setup>
import CustomHeading from '@/components/CustomHeading.vue'

import { computed, onMounted, ref } from 'vue'
import LanguageSwitch from './LanguageSwitch.vue'
import NavBar from './NavBar.vue'
import SideDrawer from './SideDrawer.vue'

const menuItems = ref([
  {
    menuItem: 'projects',
    pagePath: '/projetos'
  },
  {
    menuItem: 'cv',
    pagePath: '/cv'
  },
  {
    menuItem: 'blog',
    pagePath: `/blog`
  }
])

const currentTheme = ref('')

const themeIcon = computed(() => {
  return isLight.value ? 'fas fa-moon' : 'fas fa-sun'
})

const isLight = computed(() => {
  return currentTheme.value === 'light'
})

function toggleTheme() {
  if (isLight.value) {
    setDark()
  } else {
    setLight()
  }
}

function setDark() {
  document.documentElement.classList.add('dark')
  localStorage.setItem('theme', 'dark')
  currentTheme.value = 'dark'
}

function setLight() {
  document.documentElement.classList.remove('dark')
  localStorage.setItem('theme', 'light')
  currentTheme.value = 'light'
}

onMounted(() => {
  if (
    localStorage.getItem('theme') === 'light' ||
    !document.documentElement.classList.contains('dark')
  ) {
    currentTheme.value = 'light'
    setLight()
  } else {
    currentTheme.value = 'dark'
    setDark()
  }
})
</script>

<style lang="scss" scoped></style>

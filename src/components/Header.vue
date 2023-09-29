<template>
  <header
    class="flex flex-row justify-between items-center sm:items-end p-4 fixed w-full bg-neutral-50/75 dark:bg-neutral-800/75 backdrop-blur-sm border-b-2"
  >
    <CustomHeading level="h1">
      <router-link class="hover:underline" to="/">Will Lucena</router-link>
    </CustomHeading>
    <ul class="hidden sm:flex flex-row gap-4 items-center">
      <li v-for="({ menuItem, pagePath }, index) in menuItems" :key="index">
        <router-link
          class="text-slate-950 dark:text-neutral-50 hover:underline focus:underline"
          :to="pagePath"
        >
          {{ menuItem }}
        </router-link>
      </li>
      <li>
        <CustomIcon :icon="themeIcon" @click="toggleTheme" />
      </li>
    </ul>

    <div class="sm:hidden flex flex-row gap-4 justify-end items-end flex-1">
      <CustomIcon :icon="themeIcon" @click="toggleTheme" size="xl" />
      <CustomIcon
        class="text-slate-950 dark:text-neutral-50 hover:underline"
        icon="fas fa-bars"
        @click="toggleSideMenu"
        size="xl"
      />
    </div>

    <section
      v-if="showSideMenu"
      class="absolute top-0 right-0 w-2/3 min-h-screen bg-black/80 backdrop-blur-sm"
    >
      <div class="my-4 mr-4 flex flex-col items-end gap-12">
        <CustomIcon
          class="dark:text-slate-950 text-neutral-50"
          icon="fas fa-xmark"
          @click="toggleSideMenu"
          size="2xl"
        />

        <ul class="flex flex-col gap-4">
          <li
            v-for="({ menuItem, pagePath }, index) in menuItems"
            :key="index"
            class="text-right"
            @click="toggleSideMenu"
          >
            <router-link class="dark:text-slate-950 text-neutral-50" :to="pagePath">
              {{ menuItem }}
            </router-link>
          </li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script setup>
import CustomHeading from '@/components/CustomHeading.vue'
import CustomIcon from '@/components/CustomIcon.vue'

import { computed, onMounted, ref } from 'vue'

const menuItems = ref([
  {
    menuItem: 'Projetos',
    pagePath: '/projetos'
  },
  {
    menuItem: 'Curriculo',
    pagePath: '/cv'
  },
  {
    menuItem: 'Blog',
    pagePath: `/blog`
  }
])

const currentTheme = ref('')
const showSideMenu = ref(false)

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

function toggleSideMenu() {
  showSideMenu.value = !showSideMenu.value
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

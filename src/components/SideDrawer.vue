<template>
  <div class="sm:hidden flex flex-row gap-4 justify-end items-end flex-1">
    <CustomIcon :icon="themeIcon" @click="toggleTheme" size="xl" />
    <CustomIcon
      class="text-slate-950 dark:text-neutral-50 hover:underline"
      icon="fas fa-bars"
      @click="toggleSideMenu"
      size="xl"
    />
  </div>

  <Transition>
    <section
      v-if="showSideMenu"
      class="absolute top-0 right-0 w-5/12 min-h-screen bg-neutral-50 dark:bg-neutral-800"
    >
      <div class="my-4 mr-4 flex flex-col items-end gap-12">
        <CustomIcon
          class="dark:text-neutral-50 text-slate-950"
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
            <router-link class="dark:text-neutral-50 text-slate-950" :to="pagePath">
              {{ $t(`header.menuItems.${menuItem}`) }}
            </router-link>
          </li>
        </ul>
      </div>
    </section>
  </Transition>
</template>

<script setup>
import CustomIcon from '@/components/CustomIcon.vue'
import { ref } from 'vue'

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

const showSideMenu = ref(false)

function toggleSideMenu() {
  showSideMenu.value = !showSideMenu.value
}
</script>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(400px);
}
</style>

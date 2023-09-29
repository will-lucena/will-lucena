<template>
  <Header />
  <main
    class="w-full min-h-screen mx-auto flex flex-col gap-8 px-4 pt-20 bg-neutral-50 dark:bg-neutral-800"
  >
    <router-view></router-view>
    <Footer />
  </main>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
</script>

<style lang="scss" scoped></style>

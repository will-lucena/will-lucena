<template>
  <div
    class="text-center text-slate-950 dark:text-neutral-50 cursor-pointer flex flex-row gap-2 justify-center items-center flex-wrap"
  >
    <font-awesome-icon :icon="icon" @click="onClick" :size="size" />
    <slot></slot>
  </div>
</template>

<script setup>
defineProps(['icon', 'size'])
const emit = defineEmits(['click'])

function onClick() {
  emit('click')
}
</script>

<style lang="scss" scoped></style>

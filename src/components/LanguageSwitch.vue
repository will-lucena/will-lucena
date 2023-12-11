<template>
  <div>
    <select
      v-model="$i18n.locale"
      class="bg-neutral-200 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50 p-1 rounded"
    >
      <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
        class="text-neutral-950 dark:text-neutral-50"
      >
        {{ locale }}
      </option>
    </select>
  </div>
</template>

<script setup></script>

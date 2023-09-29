<template>
  <section class="m-auto flex flex-col justify-center items-center gap-2">
    <img
      class="rounded-full object-cover"
      src="https://avatars.githubusercontent.com/u/11667114?v=4"
      alt="Will Lucena"
    />
    <div>
      <CustomHeading level="h2" class="text-center mb-4">Me chamo Will</CustomHeading>
      <Paragraph>
        Sou desenvolvedor frontend, trabalho com VueJs a 5+ anos nos quais atuei em fintechs e
        healthtechs
      </Paragraph>
      <Paragraph> Antes disso estudei desenvolvimento de jogos com Unity </Paragraph>
      <Paragraph>
        Sempre tive interesse por desenvolvimento, gestão, ajudar meus pares e compartilhar
        conhecimento
      </Paragraph>
      <Paragraph> Atualmente moro em Natal/RN, Brasil </Paragraph>
    </div>
    <div class="flex flex-row gap-4">
      <a href="https://github.com/will-lucena">
        <CustomIcon icon="fab fa-github" size="2xl" />
      </a>
      <a href="https://www.linkedin.com/in/will-lucena/">
        <CustomIcon icon="fab fa-linkedin" size="2xl" />
      </a>
      <a href="https://www.instagram.com/will.lucenads/">
        <CustomIcon icon="fab fa-instagram" size="2xl" />
      </a>
    </div>
  </section>

  <!-- <section>
    <CustomHeading level="h2">
      Gostaria de me contratar pra um projeto ou pra sua empresa?
    </CustomHeading>

    <button
      class="text-neutral-950 dark:text-neutral-50 p-4 border-solid border-2 rounded hover:bg-neutral-950 dark:hover:text-neutral-950 dark:hover:bg-neutral-50 hover:text-neutral-50"
      @click="onClickInvite"
    >
      Bora conversar
    </button>
  </section> -->
</template>

<script setup>
import CustomHeading from '@/components/CustomHeading.vue'
import CustomIcon from '@/components/CustomIcon.vue'
import Paragraph from '@/components/Paragraph.vue'

// function onClickInvite() {
//   window.open('https://www.linkedin.com/in/will-lucena/', '_blank')
// }
</script>

<style lang="scss" scoped></style>

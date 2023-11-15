<template>
  <div class="mt-12 flex flex-col gap-4">
    <header class="flex flex-col sm:flex-row gap-4 items-center sm:justify-between">
      <CustomHeading level="h2" class="text-2xl">William Lucena dos Santos</CustomHeading>
      <div class="flex flex-row gap-4 items-center">
        <a href="https://github.com/will-lucena" target="_blank" class="hover:underline">
          <CustomIcon icon="fab fa-github" size="xl"> Github</CustomIcon>
        </a>
        <a href="https://www.linkedin.com/in/will-lucena/" target="_blank" class="hover:underline">
          <CustomIcon icon="fab fa-linkedin" size="xl"> Linkedin</CustomIcon>
        </a>
        <a href="https://www.instagram.com/will.lucenads/" target="_blank" class="hover:underline">
          <CustomIcon icon="fab fa-instagram" size="xl"> Instagram</CustomIcon>
        </a>

        <a>
          <CustomIcon icon="fas fa-location-dot" size="lg"> {{ $t('cv.location') }}</CustomIcon>
        </a>
      </div>
    </header>

    <Paragraph>
      {{ $t('cv.presentation1') }}
    </Paragraph>
    <Paragraph>
      {{ $t('cv.presentation2') }}
    </Paragraph>

    <Paragraph>
      {{ $t('cv.presentation3') }}
    </Paragraph>

    <hr class="w-full bg-neutral-950 bg:text-neutral-50" />

    <CustomHeading level="h3">{{ $t('cv.contentHeader') }}</CustomHeading>
    <section class="flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-between items-baseline gap-4">
          <CustomHeading level="h4"
            ><strong>{{ $t('cv.alice.name') }}</strong></CustomHeading
          >
          <Paragraph class="sm:text-sm text-right">{{ $t('cv.alice.period') }}</Paragraph>
        </div>
        <Paragraph>
          {{ $t('cv.alice.description1') }} <strong>(VueJs)</strong>
          {{ $t('cv.alice.description2') }} <strong>(Nuxt)</strong>
          {{ $t('cv.alice.description3') }} <strong>(VueJs)</strong>.
          {{ $t('cv.alice.description4') }}
        </Paragraph>

        <ol>
          <li>
            <Paragraph>
              {{ $t('cv.alice.description5') }}
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              {{ $t('cv.alice.description6') }}
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              {{ $t('cv.alice.description7') }}
            </Paragraph>
          </li>
        </ol>

        <Paragraph> {{ $t('cv.alice.description8') }} </Paragraph>
        <hr class="w-1/2 bg-neutral-950 bg:text-neutral-50" />
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-between items-baseline gap-4">
          <CustomHeading level="h4"><strong>Contabilizei</strong></CustomHeading>
          <Paragraph class="sm:text-sm text-right"></Paragraph>
        </div>
        <Paragraph>
          Como Desenvolvedor Frontend trabalhei nos módulos de fintech e pagamento
          <strong>(VueJs)</strong>, atuei como organizador do chapter e dentre minhas atividades
          como desenvolvedor mais antigo do time fiz onboardings e mentorias de novatos e construir
          uma boa cultura de trabalho.
        </Paragraph>

        <Paragraph>
          Além disso dei suporte e participei da migração de uma funcionalidade do sistema legado
          <strong>(Angular)</strong> para o novo <strong>(VueJs)</strong>
        </Paragraph>

        <ol>
          <li>
            <Paragraph>
              {{ $t('cv.ctbz.description3') }}
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              {{ $t('cv.ctbz.description4') }}
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              {{ $t('cv.ctbz.description5') }}
            </Paragraph>
          </li>
        </ol>

        <Paragraph>
          {{ $t('cv.ctbz.description6') }} <strong>(Angular)</strong>
          {{ $t('cv.ctbz.description7') }}
        </Paragraph>

        <Paragraph>
          {{ $t('cv.ctbz.description8') }}
        </Paragraph>

        <hr class="w-1/2 bg-neutral-950 bg:text-neutral-50" />
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-between items-baseline gap-4">
          <CustomHeading level="h4"><strong>Flourish</strong></CustomHeading>
          <Paragraph class="sm:text-sm text-right">Janeiro/2019 - Junho/2021</Paragraph>
        </div>
        <Paragraph>
          Fui o primeiro desenvolvedor da empresa, uma startup californiana, trabalhando em conjunto
          com devs de uma software house e atuei em todos os projetos client side:
        </Paragraph>

        <Paragraph>
          Aplicativo mobile <strong>(NativeScript + Vue)</strong>; minigame
          <strong>(Cocos 2D)</strong>; página institucional <strong>(Nuxt)</strong>; e sistema white
          label <strong>(VueJs)</strong>.
        </Paragraph>
      </div>
    </section>

    <hr class="w-full bg-neutral-950 bg:text-neutral-50" />

    <CustomHeading level="h3">Escolaridade</CustomHeading>
    <CustomHeading level="h4">
      <strong>Universidade Federal do Rio Grande do Norte, UFRN - Brasil </strong>
    </CustomHeading>
    <Paragraph>
      Bacharelado em Tecnologia da Informação/Engenharia de Software. Turma 2019.2
    </Paragraph>

    <hr class="w-full bg-neutral-950 bg:text-neutral-50" />

    <CustomHeading level="h3">Sopa de letrinhas</CustomHeading>
    <Paragraph class="text-center sm:text-left">
      <strong>Tive oportunidade de trabalhar com as tecnologias e ferramentas</strong>
    </Paragraph>
    <Paragraph class="sm:text-sm">
      VueJs (2 e 3), Nuxt, Javascript, Typescript, Angular, Ruby, AWS, GCP, Firebase, Github
      actions, Jenkins, CI/CD, Cypress, Jest, Testing Library, Unity, C#, Figma, Amplitude,
      MixPanel, Datadog, Cocos2d e provavelmente outras que esqueci
    </Paragraph>

    <Paragraph class="text-center sm:text-left"
      ><strong>Tive oportunidade de trabalhar com as metodologias</strong></Paragraph
    >
    <Paragraph class="sm:text-sm">
      Scrum, Kanban, Design Thinking, DDD, TDD, Mobile First e provavelmente outras que esqueci
    </Paragraph>

    <Paragraph class="text-center sm:text-left"
      ><strong>Tive oportunidade de estudar as tecnologias</strong></Paragraph
    >
    <Paragraph class="sm:text-sm">
      React, Java, Python, Bancos SQL e NoSQL, Godot, Unreal engine, Redis, Mongo, Node, Spring e
      provavelmente outras que esqueci
    </Paragraph>
  </div>
</template>

<script setup>
import CustomHeading from '@/components/CustomHeading.vue'
import CustomIcon from '@/components/CustomIcon.vue'
import Paragraph from '@/components/Paragraph.vue'
</script>

<style lang="scss" scoped></style>

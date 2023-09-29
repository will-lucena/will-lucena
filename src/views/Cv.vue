<template>
  <div class="mt-12 flex flex-col gap-4">
    <header class="flex flex-col sm:flex-row gap-4 items-center sm:justify-between">
      <CustomHeading level="h2" class="text-2xl">William Lucena dos Santos</CustomHeading>
      <div class="flex flex-row gap-4 items-center">
        <a href="https://github.com/will-lucena" class="hover:underline">
          <CustomIcon icon="fab fa-github" size="xl"> Github</CustomIcon>
        </a>
        <a href="https://www.linkedin.com/in/will-lucena/" class="hover:underline">
          <CustomIcon icon="fab fa-linkedin" size="xl"> Linkedin</CustomIcon>
        </a>
        <a href="https://www.instagram.com/will.lucenads/" class="hover:underline">
          <CustomIcon icon="fab fa-instagram" size="xl"> Instagram</CustomIcon>
        </a>

        <a> <CustomIcon icon="fas fa-location-dot" size="lg"> Natal, Brazil</CustomIcon> </a>
      </div>
    </header>

    <Paragraph>
      Sou Desenvolvedor frontend especializado em VueJs, escolhi Vue como minha stack primária
      devido a seu estilo de escrita, pouco opinativo (como react), porém fácil de organizar (sem
      JSX). Desde antes até da minha graduação em Tecnologia da Informação sempre tive interesse em
      boas práticas de programação, padrões de projeto (mesmo que não soubesse o nome disso ainda) e
      defensor da ideia de que um código sem comentários com bons nomes de variáveis, métodos e
      classes é suficiente e mais produtivo.
    </Paragraph>

    <Paragraph>
      Comecei minha tragetória como desenvolvedor com desenvolvimento de jogos com Unity + C# e
      backend com Java, depois de um bom tempo que despertei o interesse pelo lado frontend da força
      e não larguei mais. Graças a esse background de backend da faculdade consigo conversar bem com
      meus pares backenders e encontrar onde seria o melhor lugar pra determinada solução (front vs
      back) e com meu tempo de jogos tive oportunidade de trabalhar com profissionais diversos como
      artitas 2D, 3D, músicos, game designers o que me ajudou (e ajuda até hoje) a me comunicar com
      pessoas de produto e design.
    </Paragraph>

    <Paragraph>
      Sou bastante comunicativo, sempre participativo em reuniões e dando meu pitaco nas soluções
      propostas - topdown não é meu forte. Gosto de compartilhar conhecimento, desenvolver relações
      e contribuir pra que o ambiente de trabalho seja agradável e seguro pra todos.
    </Paragraph>

    <hr class="w-full bg-neutral-950 bg:text-neutral-50" />

    <CustomHeading level="h3">Experiência profissional</CustomHeading>
    <section class="flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-between items-baseline gap-4">
          <CustomHeading level="h4"><strong>Alice Tecnologia</strong></CustomHeading>
          <Paragraph class="sm:text-sm text-right">Maio/2022 - Agosto/2023</Paragraph>
        </div>
        <Paragraph>
          Como Engenheiro Frontend atuei em projetos de backoffice <strong>(VueJs)</strong>, no site
          público da alice <strong>(Nuxt)</strong> e no principal sistema da empresa, o sistema de
          controle de saúde <strong>(VueJs)</strong>.
        </Paragraph>

        <Paragraph>Além de participar em 2 migrações do vue2 para vue3. </Paragraph>
        <hr class="w-1/2 bg-neutral-950 bg:text-neutral-50" />
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-between items-baseline gap-4">
          <CustomHeading level="h4"><strong>Contabilizei</strong></CustomHeading>
          <Paragraph class="sm:text-sm text-right">Junho/2021 - Abril/2022</Paragraph>
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

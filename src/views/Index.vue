<template>
  <section class="m-auto lg:h-[90vh] flex flex-col justify-center gap-8">
    <div class="flex flex-col lg:flex-row items-center flex-1">
      <div class="flex flex-col gap-2">
        <CustomHeading level="h2" class="text-center mb-4">Opa, blz? Me chamo Will</CustomHeading>
        <Paragraph>
          Uns dias atrás enquanto desenvolvia esse site vi uma pergunta interessante em um processo
          seletivo que estava submetendo:
        </Paragraph>
        <Paragraph>
          <strong>O que é uma boa cultura de engenharia na sua opnião?</strong>
        </Paragraph>
        <Paragraph> Resolvi deixar minha resposta aqui </Paragraph>
        <Paragraph>
          Pra mim uma boa cultura de engenharia tem como centro os desenvolvedores e foco no
          resultado, o que quero dizer com isso é que os profissionais devem ter autonomia pra
          desenvolver as soluções de forma saudável, mantendo um bom equilibrio entre desafios e
          tarefas mais simples e manter qualidade na sua vida pessoal para poder focar no que
          realmente importa e entregar o valor desejado, nos prazos e com a qualidade combinada com
          os demais envolvidos.
        </Paragraph>

        <div class="flex w-full flex-row justify-center gap-4 my-4">
          <a href="https://github.com/will-lucena" target="_blank">
            <CustomIcon icon="fab fa-github" size="2xl" />
          </a>
          <a href="https://www.linkedin.com/in/will-lucena/" target="_blank">
            <CustomIcon icon="fab fa-linkedin" size="2xl" />
          </a>
          <a href="https://www.instagram.com/will.lucenads/" target="_blank">
            <CustomIcon icon="fab fa-instagram" size="2xl" />
          </a>
        </div>
      </div>

      <img
        class="rounded-full object-cover max-w-[400px]"
        src="https://avatars.githubusercontent.com/u/11667114?v=4"
        alt="Will Lucena"
      />
    </div>

    <CustomHeading level="h2" class="text-center my-4">
      Scrolla ai pra ver mais sobre mim
    </CustomHeading>
  </section>

  <section class="m-auto flex flex-col lg:flex-row justify-center items-center gap-8">
    <img
      class="rounded-full object-cover max-w-[400px]"
      src="@/assets/will-e-zeus.jpg"
      alt="Will Lucena"
    />

    <div class="flex flex-col gap-2">
      <Paragraph>
        Sou desenvolvedor frontend, trabalho com VueJs a mais de 5 anos nos quais atuei em fintechs
        e healthtechs, antes disso estudei desenvolvimento de jogos com Unity
      </Paragraph>
      <Paragraph>
        Durante minha graduação tive mais proximidade com o backend, o que me ajuda bastante hoje
        como dev front na comunicação com meus pares backenders, assim como ter atuado como gamedev,
        um ambiente bastante multidisciplinar me trouxe beneficios nas trocas com pessoas não
        tecnicas como designers e PMs
      </Paragraph>
      <Paragraph>
        Adoro compartilhar conhecimento e aprender coisas novas, relacionadas ou não sobre
        tecnologia, meus tópicos preferidos são: esportes, especialmente basquete; jogos, finanças,
        ficção e coisas aleatórias como a história do café ou porque pessoas agem como agem
      </Paragraph>
      <Paragraph> Atualmente moro em Natal/RN, Brasil </Paragraph>

      <button
        class="w-full lg:w-fit text-neutral-950 dark:text-neutral-50 p-4 border-solid border-2 rounded hover:bg-neutral-950 dark:hover:text-neutral-950 dark:hover:bg-neutral-50 hover:text-neutral-50 self-center"
        @click="onClickInvite"
      >
        Meu Curriculo
      </button>
    </div>
  </section>
</template>

<script setup>
import CustomHeading from '@/components/CustomHeading.vue'
import CustomIcon from '@/components/CustomIcon.vue'
import Paragraph from '@/components/Paragraph.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

function onClickInvite() {
  router.push('/cv')
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="container">
    <BaseHero image="/images/studios-hero-background.png"/>

    <SearchSection />

    <AdvantagesSection />

    <FaqSection />

    <div class="divider"></div>

    <ServicesSection />

    <section class="question" aria-labelledby="question-title">
      <h2 id="question-title">
        Ainda tem alguma dúvida<span class="musicalll">?</span>
      </h2>

      <div class="question-links">
        <div class="question-link">
          <NuxtLink to="/" >
            Acesse nosso <span class="musicalll">&nbsp;FAQ</span>
          </NuxtLink>
        </div>

        <div class="question-link">
          <NuxtLink class="link-wpp" to="/" >
            Mande uma mensagem para a gente
            <NuxtImg src="/svg/whatsapp.svg" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SearchSection from '~/components/studios/SearchSection.vue'
import AdvantagesSection from '~/components/studios/AdvantagesSection.vue'
import FaqSection from '~/components/studios/FaqSection.vue'
import ServicesSection from '~/components/studios/ServicesSection.vue'

export default {
  name: 'StudiosPage',
  components: { 
    SearchSection,
    AdvantagesSection,
    FaqSection,
    ServicesSection,
  }
}
</script>

<style lang="scss" scoped>
.divider {
  margin-block: 7.5rem;
}

.question {
  display: flex;
  flex-direction: column;
  margin-block: 10rem;
  font-family: $font-foral-pro;
  text-align: center;
  color: $text-light-clr-1;

  #question-title {
    font-size: 2.5rem;
  }

  .question-links {
    margin-top: 0.5rem;

    .question-link {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
      margin-inline: auto;
      font-size: 1.25rem;
      text-decoration: underline;
      color: $text-light-clr-3;

      a {
        display: flex;

        &.link-wpp {
          gap: 0.5rem;
        }
      }
    }
  }
}
</style>
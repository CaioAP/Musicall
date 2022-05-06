<template>
  <BaseSection labelledby="faq-title">
    <template #header>
      <header>
        <h2 id="faq-title">FAQ</h2>
      </header>
    </template>

    <template #content>
      <div class="faqs">
        <div v-for="(faq, idx) in faqs" :key="idx" class="faq">
          <div class="faq-header">
            <h3>{{ faq.title }}</h3>
            <nuxt-img src="/svg/angle-down.svg" />
          </div>

          <div class="faq-content">
            {{ faq.content }}
          </div>
        </div>
      </div>
    </template>
  </BaseSection>
</template>

<script>
export default {
  computed: {
    faqs() {
      return [
        { title: 'Como funciona a Ferramenta?', content: '' },
        { title: 'Eu pago alguma coisa para acessar?', content: '' },
        { title: 'Quanto custa a média de preço?', content: '' },
        { title: 'Tenho um estúdio para alugar, como faço?', content: '' },
        { title: 'A plataforma cuida do pagamento?', content: '' },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
#faq-title {
  font-size: 2.5rem;
}

.faqs {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;

  .faq {
    width: 100%;
    max-width: 60%;
    margin-inline: auto;
    border: solid 1px transparent;
    border-radius: 0.75rem;
    background-image: 
      linear-gradient($bg-clr, $bg-clr), 
      $gradient-bg;
    background-origin: border-box;
    background-clip: content-box, border-box;

    .faq-header {
      display: flex;
      gap: 1rem;
      margin: 1.5rem;

      img {
        margin-left: auto;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .faq {
      max-width: 90%;
    }
  }
}
</style>
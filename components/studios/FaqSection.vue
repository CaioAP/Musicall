<template>
  <BaseSection labelledby="faq-title">
    <template #header>
      <header>
        <h2 id="faq-title">FAQ</h2>
      </header>
    </template>

    <template #content>
      <div class="faqs">
        <div 
          v-for="(faq, idx) in faqs" 
          :key="idx" 
          class="faq" 
          :expanded="faq.expanded" 
          @click="expand(idx)"
        >
          <div class="faq-header">
            <h3>{{ faq.title }}</h3>
            <NuxtImg src="/svg/angle-down.svg" />
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
  data() {
    return {
      faqs: [
        { title: 'Como funciona a Ferramenta?', expanded: false, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, consequuntur? Incidunt voluptatum placeat, nemo velit culpa saepe cupiditate error minus molestias ratione eius nisi explicabo repudiandae et nihil veritatis tempora!' },
        { title: 'Eu pago alguma coisa para acessar?', expanded: false, content: '' },
        { title: 'Quanto custa a média de preço?', expanded: false, content: '' },
        { title: 'Tenho um estúdio para alugar, como faço?', expanded: false, content: '' },
        { title: 'A plataforma cuida do pagamento?', expanded: false, content: '' },
      ]
    }
  },
  methods: {
    expand(faqIdx) {
      const faq = this.faqs[faqIdx]
      faq.expanded = !faq.expanded
      this.faqs[faqIdx] = faq
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
    cursor: pointer;

    .faq-header {
      display: flex;
      gap: 1rem;
      margin: 1.5rem;

      img {
        margin-left: auto;
      }
    }

    .faq-content {
      height: 0;
      overflow: hidden;
    }

    &[expanded="true"] {

      .faq-header {
        img {
          transform: rotate(180deg)
        }
      }
      .faq-content {
        padding: 1.5rem;
        padding-top: 0.5rem;
        height: auto;
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
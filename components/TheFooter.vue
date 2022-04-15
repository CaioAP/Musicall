<template>
  <div class="container">
    <footer id="footer">
      <div class="social-media">
        <p>Acompanhe nas redes</p>

        <div>
          <nuxt-link to="">
            <nuxt-img src="/svg/youtube.svg"/>
          </nuxt-link>
          <nuxt-link to="">
            <nuxt-img src="/svg/linkedin.svg"/>
          </nuxt-link>
          <nuxt-link to="">
            <nuxt-img src="/svg/facebook.svg"/>
          </nuxt-link>
          <nuxt-link to="">
            <nuxt-img src="/svg/instagram.svg"/>
          </nuxt-link>
          <nuxt-link to="">
            <nuxt-img src="/svg/twitter.svg"/>
          </nuxt-link>
        </div>
      </div>

      <nav aria-label="footer navigation">
        <div class="footer-section logo">
          <ul>
            <li>
              <nuxt-link class="logo-vertical" to="">
                <nuxt-img src="/images/logo-vertical.png" />
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div 
          v-for="(nav, idx) in navs" 
          :key="idx" 
          class="footer-section"
        >
          <h2 class="title">{{ nav.title }}</h2>
          <ul>
            <li v-for="(link, i) in nav.links" :key="i">
              <nuxt-link :to="link.path">{{ link.name }}</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    navs() {
      return [
        { 
          title: 'A Musicalll', 
          links: [
            { name: 'Quem somos', path: '' },
            { name: 'Políticas de uso', path: '' },
            { name: 'Fale conosco', path: '' },
            { name: 'Confiança e Segurança', path: '' },
          ]
        },
        { 
          title: 'Cursos', 
          links: [
            { name: 'Msaterclass', path: '' },
            { name: 'Cursos na Musicalll', path: '' },
            { name: 'Musicalll Drops', path: '' },
          ]
        },
        { 
          title: 'Estúdios', 
          links: [
            { name: 'Alugar estúdios', path: '' },
            { name: 'Cadastrar meu estúdio', path: '' },
          ]
        },
        { 
          title: 'Conheça mais', 
          links: [
            { name: 'Fazer meu cadastro', path: '' },
            { name: 'Login', path: '' },
          ]
        },
      ] 
    }
  },
}
</script>

<style lang="scss" scoped>
footer {
  max-width: 90%;
  margin: auto;
  color: $text-light-clr-1;

  .social-media {
    display: flex;
    margin-block: 2rem;

    p {
      margin-left: auto;
      margin-right: 2rem;
    }

    div {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
  }

  nav {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    padding-block: 5rem;
    border-top: $border-divider;

    .footer-section {
      display: flex;
      flex-direction: column;
      text-align: center;

      &.logo {
        ul {
          margin: auto;

          .logo-vertical {
            img {
              width: 120px;
            }
          }
        }
      }

      ul {
        li {
          padding-block: 0.25rem;
          font-size: 1.25rem
        }
      }

      .title {
        font-family: $font-foral-pro;
        font-size: 2rem;
        color: $primary-clr;
      }
    }
  }
}
</style>
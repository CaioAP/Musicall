<template>
  <div class="container">
    <footer id="footer">
      <div class="social-media">
        <p>Acompanhe nas redes</p>

        <div>
          <NuxtLink to="">
            <img src="/svg/youtube.svg" />
          </NuxtLink>
          <NuxtLink to="">
            <img src="/svg/linkedin.svg" />
          </NuxtLink>
          <NuxtLink to="">
            <img src="/svg/facebook.svg" />
          </NuxtLink>
          <NuxtLink to="">
            <img src="/svg/instagram.svg" />
          </NuxtLink>
          <NuxtLink to="">
            <img src="/svg/twitter.svg" />
          </NuxtLink>
        </div>
      </div>

      <nav aria-label="footer navigation">
        <div class="footer-section logo">
          <ul>
            <li>
              <NuxtLink class="logo-vertical" to="">
                <img src="/images/logo-vertical.png" />
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div v-for="(nav, idx) in navs" :key="idx" class="footer-section">
          <h2 class="title">{{ nav.title }}</h2>
          <ul>
            <li v-for="(link, i) in nav.links" :key="i">
              <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
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
          title: "A Musicalll",
          links: [
            { name: "Quem somos", path: "" },
            { name: "Políticas de uso", path: "" },
            { name: "Fale conosco", path: "" },
          ],
        },
        {
          title: "Cursos",
          links: [
            { name: "Masterclass", path: "/masterclass" },
            { name: "Cursos na Musicalll", path: "/courses" },
            { name: "Musicalll Drops", path: "/drops" },
          ],
        },
        {
          title: "Estúdios",
          links: [
            { name: "Alugar estúdios", path: "/studios" },
            { name: "Cadastrar meu estúdio", path: "" },
          ],
        },
        {
          title: "Conheça mais",
          links: [
            { name: "Fazer meu cadastro", path: "" },
            { name: "Login", path: "" },
          ],
        },
      ]
    },
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
          font-size: 1.25rem;
        }
      }

      .title {
        font-family: $font-foral-pro;
        font-size: 2rem;
        color: $primary-clr;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    nav {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .footer-section {
        ul > li {
          padding-block: 0.75rem;
        }
      }
    }
  }
}
</style>

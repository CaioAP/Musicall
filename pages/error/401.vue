<template>
  <div class="container">
    <div class="wrapper">
      <h1>Acesso não autorizado</h1>
      <p>Você não possui autorização para acessar esta página!</p>
      <NuxtLink to="/" class="go-back">
        <NuxtImg src="/svg/arrow-point-left-primary.svg" />
        Voltar
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UnauthorizedPage',
  head: {
    title: '401 - Não autorizado',
  },
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100%;
  color: #fff;

  .wrapper {
    min-height: 100%;
    max-width: 90%;
    margin: auto;
    padding: 5rem 0;
  }

  h1 {
    margin-top: 4rem;
    font-size: 3rem;
    font-weight: 500;
    color: $primary-clr;
  }

  p {
    font-size: 1.5rem;
  }

  .go-back {
    display: flex;
    gap: 0.5rem;
    margin-top: 2rem;
    width: fit-content;
    color: $primary-clr;
    font-size: 1.5rem;
    text-decoration: underline;

    img {
      width: 1.25rem;
    }
  }
}
</style>

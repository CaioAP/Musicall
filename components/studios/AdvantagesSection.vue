<template>
  <section class="advantages" aria-labelledby="title">
    <header>
      <h2 id="title" class="title">
        <span>Vantagens</span> <br />
        de ser <span class="musicalll">Musicalll</span>
      </h2>
    </header>

    <div class="body">
      <img src="/images/studios-advantages.png" />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.advantages {
  margin-top: 6rem;

  header {
    .title {
      font-size: 2.5rem;
      text-align: center;
      color: $text-light-clr-1;

      span:first-of-type {
        font-family: $font-rampage-monoline;
        font-size: 8rem;
        line-height: 1;
      }
    }
  }

  .body {
    margin-top: 4rem;

    img {
      margin: auto;
      max-width: 90%;
    }
  }
}
</style>

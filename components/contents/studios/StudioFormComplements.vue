<template>
  <div class="form-inputs">
    <h3>Áudios e gravações</h3>

    <BaseInput
      id="input-soundcloud"
      v-model="soundcloud"
      label="Link da playlist no Soundcloud"
      placeholder="http://soundcloud.com/playlist/id_playlist"
      :light="true"
    />
    <BaseInput
      id="input-spotify"
      v-model="spotify"
      label="Link da playlist no Spotify"
      placeholder="http://open.spotify.com/playlist/id_playlist"
      :light="true"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      soundcloud: '',
      spotify: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.form-inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 33%;
  margin-top: 1.5rem;

  h3 {
    font-family: $font-foral-pro;
    font-size: 1.5rem;
    font-weight: 700;
  }
}
</style>

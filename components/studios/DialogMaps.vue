<template>
  <dialog v-show="open" ref="dialog">
    <BaseButton class="btn-outline" @click="closeDialog">
      x
    </BaseButton>

    <GMap
      ref="gMap"
      class="maps"
      :options="{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: true,
        gestureHandling: 'cooperative',
      }"
      :center="{ lat: locations[0].lat, lng: locations[0].lng }"
      :zoom="12"
      @bounds_changed="checkForMarkers"
    >
      <GMapMarker
        v-for="location in locations"
        :key="location.id"
        :position="{ lat: location.lat, lng: location.lng }"
        @click="currentLocation = location"
      >
        <GMapInfoWindow :options="{ maxWidth: 200 }">
          <b>{{ location.name }}</b>
          <br />
          <br />
          <code>
            Lat: {{ location.lat }},
            <br />
            Lng: {{ location.lng }}
          </code>
          <br />
          <a :href="`https://www.google.com.br/maps/search/?api=1&query=${location.lat},${location.lng}`" target="_blank">
            Abrir no mapa
          </a>
        </GMapInfoWindow>
      </GMapMarker>
    </GMap>
  </dialog>
</template>

<script>
export default {
  props: {
    locations: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      open: false,
      currentLocation: {},
      locationsVisibleOnMap: "",
    }
  },
  methods: {
    openDialog() {
      this.open = true
      this.$refs.dialog.showModal()
    },

    closeDialog() {
      this.open = false
      this.$refs.dialog.close()
    },

    checkForMarkers() {
      this.locations.forEach((location, i) => {
        location.visible = this.$refs.gMap.map
          .getBounds()
          .contains(this.$refs.gMap.markers[i].getPosition());
      });

      this.locationsVisibleOnMap = this.locations
        .filter((l) => l.visible)
        .map((l) => l.name)
        .join(", ");
    },
  },
}
</script>

<style lang="scss" scoped>
dialog {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
  background: $bg-light-clr;
  border: 2px solid $primary-clr;
  border-radius: 1rem;
  text-align: center;

  &::backdrop {
    background: rgb(0 0 0 / 0.5);
  }

  .btn-outline {
    margin-left: auto;
    padding: 0.5rem;
    background: transparent;
    color: $text-light-clr-1;
    line-height: 0.5;
  }

  .maps {
    min-width: 800px;
  }
}
</style>
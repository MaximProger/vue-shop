<template>
  <div id="app">
    <vMainWrapper />
  </div>
</template>

<script>
import vMainWrapper from '@/components/v-main-wrapper'
export default {
  name: 'app',
  components: {
    vMainWrapper
  }
}
</script>

<style lang="scss">
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.card-img-top {
  width: 150px;
}
</style>

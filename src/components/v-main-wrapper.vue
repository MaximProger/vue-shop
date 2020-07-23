<template>
  <div>
    <div class="v-main-wrapper pb-3">
      <Header />
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/v-header'

export default {
  name: 'v-main-wrapper',
  components: {
    Header
  },
  data: () => ({})
}
</script>

<style lang="scss" scoped></style>

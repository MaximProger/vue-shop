<template>
  <div>
    <h1 class="mb-3 text-center">Каталог</h1>
    <div class="row">
      <vCatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from '@/components/v-catalog-item'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'v-catalog',
  components: {
    vCatalogItem
  },
  data: () => ({}),
  computed: {
    ...mapGetters(['PRODUCTS', 'CART'])
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="col-lg-4 col-md-3 col-6 mb-2">
    <div class="card" style="width: 95%;">
      <img
        :src="require('../assets/images/' + product_data.image)"
        class="card-img-top"
        :alt="product_data.name"
      />
      <div class="card-body">
        <h5 class="card-title">{{ product_data.name }}</h5>
        <p class="card-text">Цена: {{ product_data.price }} P</p>
        <p class="card-text">Артикул: {{ product_data.article }}</p>
        <a href="#" class="btn btn-success" @click.prevent="addToCart"
          >Добавить в корзину</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
    product_data: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    }
  }
}
</script>

<style lang="scss" scoped></style>

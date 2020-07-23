<template>
  <div class="col-12 mb-2">
    <div class="card border-primary" style="width: 95%;">
      <div class="row">
        <img
          :src="require('../assets/images/' + cart__item__data.image)"
          class="card-img-top"
          :alt="cart__item__data.name"
        />
        <div class="card-body">
          <h5 class="card-title">{{ cart__item__data.name }}</h5>
          <p class="card-text">Цена: {{ cart__item__data.price }} P</p>
          <div class="card-text mb-2">
            <div class="d-flex align-items-center justify-content-center">
              <button @click="decrementItem" class="btn btn-light">-</button>
              <b class="mr-2 ml-2">{{ cart__item__data.quantity }}</b>
              <button @click="incrementItem" class="btn btn-light">+</button>
            </div>
          </div>
          <button class="btn btn-danger" @click="deliteCartItem">
            Удалить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-cart-item',
  props: {
    cart__item__data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    deliteCartItem() {
      this.$emit('deliteCartItem')
    },
    decrementItem() {
      this.$emit('decrement')
    },
    incrementItem() {
      this.$emit('increment')
    }
  },
  mounted() {
    this.$set(this.cart__item__data, 'quantity', 1)
  }
}
</script>

<style lang="scss" scoped>
.card-body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>

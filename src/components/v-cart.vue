<template>
  <div>
    <div v-if="!cart_data.length" class="v-cart-empty">
      <h1 class="text-center">Корзина пуста</h1>
    </div>
    <div v-else class="v-cart-success">
      <h1 class="mb-3 text-center">Корзина</h1>
      <div class="row">
        <vCartItem
          v-for="(cart, index) in cart_data"
          :key="cart.article"
          :cart__item__data="cart"
          @deliteCartItem="deliteCartItem(index)"
          @increment="increment(index)"
          @decrement="decrement(index)"
        />
      </div>
    </div>
    <div class="v-cart-total">
      <p>Общая стоимость:</p>
      <p>{{ cartTotalCost }} P.</p>
    </div>
  </div>
</template>

<script>
import vCartItem from '@/components/v-cart-item'
import { mapActions } from 'vuex'
export default {
  name: 'v-cart',
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    cartTotalCost() {
      let result = []
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity)
        }
        result = result.reduce(function(sum, el) {
          return sum + el
        })
        return result
      } else {
        return 0
      }
    }
  },
  methods: {
    ...mapActions([
      'DELITE_CART_ITEM',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index)
    },
    deliteCartItem(index) {
      this.DELITE_CART_ITEM(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-cart-success {
  padding-bottom: 100px;
}

.v-cart-total {
  height: 80px;
  width: 100%;
  background: rgb(40, 167, 69);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;

  p {
    margin: 0 5px;
  }
}
</style>

<template>
  <nav
    class="navbar navbar-expand-lg  navbar-dark mb-3"
    style="background-color: #28a745; color: #fff;"
  >
    <router-link class="navbar-brand" to="/">Интернет-магазин</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul
        class="navbar-nav d-flex justify-content-between align-items-center"
        style="width: 100%;"
      >
        <li class="nav-item">
          <router-link active-class="active" exact class="nav-link" to="/"
            >Каталог</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            active-class="active"
            class="nav-link"
            :to="{ name: 'Cart', params: { cart_data: CART } }"
            >Корзина {{ CART.length }}</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'v-navbar',
  computed: {
    ...mapGetters(['CART'])
  }
}
</script>

<style lang="scss" scoped></style>

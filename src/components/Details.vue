<template>
  <div class="container py-5">
    <router-link to="/">
      <h1 class="text-center">Restaurants</h1>
    </router-link>
    <div class="row mt-5">
      <div
        class="col-sm-6 col-md-4 col-lg-3"
        v-for="data in DataList[`${this.id - 1}`].products"
        :key="data"
      >
        <div class="card">
          <img :src="data.img" alt="" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ data.foodName }}</h5>
            <span class="card-text">Max quantity: {{ data.maxQuantity }}</span>
          </div>
          <div
            class="
              card-footer
              bg-transparent
              d-flex
              justify-content-between
              align-items-center
            "
          >
            <div class="quantity">
              <span @click="decrement">-</span>
              <input type="text" name=""  v-model="quantity" id="" />
              <span @click="increment">+</span>
            </div>
            <button class="btn btn-warning" @click.prevent="Checkout">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["productLength"],
  data() {
    return {
      quantity: 1,
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapGetters(["DataList"]),
  },
  methods: {
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity === 1) {
        alert("Negative Quantity not allowed");
      } else {
        this.quantity--;
      }
    },
  },
};
</script>
<style>
.card {
  overflow: hidden;
}
img {
  height: 200px;
  object-fit: cover;
  object-position: center;
}
</style>
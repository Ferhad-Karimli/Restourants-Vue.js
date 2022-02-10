<template>
  <div class="container py-5">
    <router-link to="/">
      <h1 class="text-center">Restaurants</h1>
    </router-link>
    <div class="row mt-5">
      <div
        class="col-sm-12 col-md-6 col-lg-4 col-xl-3"
        v-for="data in DataList"
        :key="data"
        :data="data"
      >
        <div class="card border-0">
          <router-link :to="{ name: 'Details', params: { id: data.id } }">
            <img :src="data.image" alt="" class="card-img-top" />
          </router-link>
          <div class="card-body">
            <router-link :to="{ name: 'Details', params: { id: data.id } }">
              <h4 class="card-title">{{ data.name }}</h4>
            </router-link>
            <span>Product quantity: {{ data.products.length }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["DataList"]),
  },
  created() {
    this.$store.dispatch("getDataList");
  },
};
</script>
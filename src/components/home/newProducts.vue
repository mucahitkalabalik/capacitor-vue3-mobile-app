<script setup></script>
<template>
  <div>
    <v-divider class="my-2" :thickness="3"></v-divider>
    <h2 class="mt-5 text-center text-warning">YENİ ÜRÜNLER</h2>
    <div class="d-flex">
      <v-row class="ma-0">
        <v-col cols="6" v-for="(i, index) in data" :key="i.id + index">
          <v-card class="pa-1">
            <v-img  @click="goDetail(i)" class="product-img" :src="i.image" height="350px" cover>
              <div
                class="inCart d-flex align-center justify-center"
                v-if="i.status"
              >
                ÜRÜN SEPETTE
              </div>
            </v-img>
            <v-card-subtitle
              class="d-flex align-center justify-center text-h8 g flex-column"
            >
              <div  @click="goDetail(i)">{{ i.name }}</div>
              <div>
                {{ i.price + " $" }}
              </div>
              <v-icon
                class="ml-2"
                color="warning"
                @click="add(i)"
                v-if="!i.status"
              >
                mdi-basket
              </v-icon>
            </v-card-subtitle>
          </v-card></v-col
        >
      </v-row>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useCounterStore } from "@/store/index";
import { useRouter } from "vue-router";

let router = useRouter();
let store = useCounterStore();

let data = computed(() => {
  return store.getterNewItems;
});

function add(i) {
  i.counter = 1;
  store.addCard(i);
}
function goDetail(i) {
  router.push(`/product/${i.name}`);
}
</script>
<style>
.product-img {
  border-radius: 15px;
}
</style>

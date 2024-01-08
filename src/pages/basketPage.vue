<script setup>
import { computed } from "vue";

import { useCounterStore } from "@/store/index";
let store = useCounterStore();

let list = computed(() => {
  return store.getterCart;
});
let totalAmount = computed(() => {
  return store.getterCartTotal;
});
let totalProduct = computed(() => {
  return store.getterTotalProduct;
});
function decrease(item) {
  store.decrease(item);
}
function increase(item) {
  store.increase(item);
}

function clear() {
  store.$state.total = 0;
  store.$state.myCart = [];
  store.$state.totalProduct = 0;
  store.clear() 
}
</script>

<template>
  <div class="h-100  ma-1">
    <v-card-title class="d-flex aling-center justify-space-between">
      SEPET
      <v-icon color="error" @click="clear()">mdi-delete-empty-outline</v-icon>
    </v-card-title>
    <v-divider class="mb-2" :thickness="3"></v-divider>
    <v-card
      class="mb-2"
      variant="tonal"
      v-for="(item, index) in list"
      :key="item + index"
    >
      <v-row>
        <v-col class="d-flex align-center justify-center">
          <v-img :src="item.image" height="70px"></v-img>
        </v-col>
        <v-col class="d-flex align-center justify-center">
          {{ item.name }}
        </v-col>
        <v-col class="d-flex align-center justify-center">
          {{ item.price }} $
        </v-col>
        <v-col class="d-flex align-center justify-center">
          <v-btn variant="tonal" size="x-small" @click="increase(item)">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <span class="mx-1">{{ item.counter }}</span>
          <v-btn
            class="mr-1"
            variant="tonal"
            size="x-small"
            @click="decrease(item)"
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="bottom px-2 py-3" variant="tonal" v-if="list.length > 0">
      <v-row>
        <v-col> Toplam Ürün Sayısı: {{ totalProduct }} </v-col>
        <v-col> Toplam Fiyat: {{ totalAmount }} $ </v-col>
        <v-col>
          <v-btn size="small" color="warning"  append-icon="mdi-cash-register"
            >Ödeme Yap</v-btn
          ></v-col
        >
      </v-row>
    </v-card>
    <v-card v-else class="px-2 py-4">
      SEPETTE ÜRÜNÜNÜZ BULUNMAMAKTADIR.
    </v-card>
  </div>
</template>
<style scoped>
.bottom {
  position: absolute;
  bottom: 11%;
  left: 0;
  z-index: 999;
  width: 100%;
}
</style>

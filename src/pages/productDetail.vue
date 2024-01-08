<template>
  <div class="pa-5">
    <v-img :src="detail.image" height="350px" cover :position="top"></v-img>
    <v-card class="mt-2 pa-2">
      <v-card-title> {{ detail.name }}</v-card-title>
      <v-card-title> {{ detail.price }} $ </v-card-title>
      <v-row>
        <v-col cols="9">
          <v-btn block color="warning" variant="tonal" @click="addCart">
            Sepete Ekle
          </v-btn>
        </v-col>
        <v-col>
          <v-select
            v-model="counter"
            variant="solo-inverted"
            :items="[1, 2, 3, 4, 5, 6, 7, 8, 9]"
            density="compact"
          ></v-select>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
let route = useRoute();

import { useCounterStore } from "@/store/index";
let store = useCounterStore();

let counter = ref(1);

let detail = computed(() => {
  store.getDetail(route.params.id);
  return store.getterDetail;
});

function addCart() {
  let data = detail.value;
  data.counter = 1;
  store.addCard(data);
}

</script>

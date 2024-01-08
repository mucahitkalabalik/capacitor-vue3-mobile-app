<template>
  <div class="h-100">
    <h2 class="text-center text-warning">POPULER ÜRÜNLER</h2>
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :initialSlide="1"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="false"
      :modules="modules"
      class="mySwiper"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
    >
      <SwiperSlide v-for="i in data" :key="i">
        <v-img :src="i.image" height="550px">
          <div
            class="inCart d-flex align-center justify-center"
            v-if="i.status"
          >
            ÜRÜN SEPETTE
          </div>
        </v-img>
        <div class="d-flex align-center justify-center mt-2 text-h7">
          {{ i.name }}
          {{ i.price + "$" }}
          <v-icon
            size="small"
            class="ml-2"
            color="warning"
            @click="add(i)"
            v-if="!i.status"
          >
            mdi-basket
          </v-icon>
        </div>
      </SwiperSlide>
    </swiper>
    <newProducts />
  </div>
</template>
<script>
import { computed } from "vue";
import { useCounterStore } from "@/store/index";

import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination } from "swiper/modules";


import newProducts from "@/components/home/newProducts.vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "@/assets/style.css";

let data = computed(() => {
  let store = useCounterStore();
  return store.getterItems;
});

function add(i) {
  let store = useCounterStore();
  i.counter = 1;
  store.addCard(i);
}

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
    newProducts,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
      data,
      add,
    };
  },
};
</script>
<style>
.inCart {
  position: absolute;
  font-size: 24px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  height: 100%;
  width: 100%;
  background-color: rgba(51, 51, 51, 0.635);
  border-radius: 15px;
  text-align: center;
}
</style>

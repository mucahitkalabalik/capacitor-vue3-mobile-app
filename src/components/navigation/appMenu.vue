<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useTheme } from "vuetify";
const theme = useTheme();
let router = useRouter();
// let route = useRoute();
let current = ref("home");

const themeType = computed({
  get() {
    return theme.current.value.dark;
  },
});

// let currentPage = computed(() => {
//   console.log(route);
//   return route.path
// });
let menuItems = ref([
  {
    title: "ANA SAYFA",
    icon: "mdi-home",
    value: "home",
    href: "/",
  },

  {
    title: "SEPET",
    icon: "mdi-basket",
    value: "basket",
    href: "basket",
  },

  {
    title: "HESABIM",
    icon: "mdi-account",
    value: "hesabım",
    href: "account",
  },
]);

function go(href) {
  router.push(href);
}
</script>

<template>
  <v-bottom-navigation class="navigation pb-5" mode="shift" v-model="current">
    <v-btn
      v-for="(item, index) in menuItems"
      :key="index + item"
      :value="item.value"
      @click="go(item.href)"
      :color="themeType ? 'amber-lighten-3' : 'amber-darken-4'"
    >
      <v-icon>{{ item.icon }}</v-icon>

      <span>{{ item.title }}</span>

    </v-btn>
  </v-bottom-navigation>
</template>
<style>
.navigation {
  height: 10% !important;
}
</style>

<script setup>
import { ref, computed } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();

const themeType = computed({
  get() {
    return theme.current.value.dark;
  },
});

let status = ref(false);
let listItems = ref([
  {
    title: "Siparişlerim",
    icon: "mdi-order-bool-ascending",
    value: "sipariş",
    href: "home",
  },

  {
    title: "İadeler",
    icon: "mdi-backup-restore",
    value: "iade",
    href: "basket",
  },

  {
    title: "Bildirim Kutusu",
    icon: "mdi-bell-ring",
    value: "bildirim",
    href: "bell-ring",
  },
  {
    title: "Bilgileriniz",
    icon: "mdi-information-variant",
    value: "bilgiler",
    href: "account",
  },
  {
    title: "Adreslerim",
    icon: "mdi-google-maps",
    value: "adresler",
    href: "account",
  },
  {
    title: "Tema Değiştir",
    icon: "mdi-compare",
    value: "compare",
    href: "compare",
  },
  {
    title: "Müşteri Hizmetleri",
    icon: "mdi-face-agent",
    value: "hizmet",
    href: "account",
  },
]);

function clickListItem(val) {
  if (val === "compare") {
    theme.global.name.value = theme.global.current.value.dark
      ? "light"
      : "dark";
  }
}
</script>

<template>
  <div class="h-100 ">
    <v-card-title class="text-center"> AYARLAR </v-card-title>
    <v-row class="ma-0">
      <v-col class="text-center">
        <v-btn :variant="status ? 'tonal' : ''" @click="status = true"
          >Giriş Yap
        </v-btn>
      </v-col>
      <v-col class="text-center">
        <v-btn :variant="status ? '' : 'tonal'" @click="status = false"
          >Hesabım</v-btn
        >
      </v-col>
    </v-row>
    <v-divider
      :color="themeType ? 'amber-lighten-3' : 'amber-darken-4'"
      class="my-5"
      :thickness="3"
    ></v-divider>
    <v-row class="mt-5 mx-0">
      <v-col v-if="status" class="text-center">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-btn
              prepend-icon="mdi-google"
              :append-icon="'mdi-arrow-right'"
              class="mb-10"
              v-bind="props"
              :color="isHovering ? 'blue-lighten-4' : ''"
            >
              Apple ile giriş yap
            </v-btn>
          </template>
        </v-hover>

        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-btn
              prepend-icon="mdi-google"
              :append-icon="'mdi-arrow-right'"
              class="mb-10"
              v-bind="props"
              :color="isHovering ? 'blue-lighten-4' : 'red-darken-3'"
            >
              Google ile giriş yap
            </v-btn>
          </template>
        </v-hover>

        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-btn
              prepend-icon="mdi-google"
              :append-icon="'mdi-arrow-right'"
              class="mb-10"
              v-bind="props"
              :color="isHovering ? 'blue-lighten-4' : 'primary'"
            >
              Facebook ile giriş yap
            </v-btn>
          </template>
        </v-hover>
      </v-col>
      <v-col v-else>
        <v-list lines="one">
          <v-list-item
            v-for="n in listItems"
            :key="n"
            :title="n.title"
            @click="clickListItem(n.value)"
          >
            <template v-slot:prepend>
              <v-icon :icon="n.icon"></v-icon>
            </template>
            <template v-slot:append>
              <v-icon icon="mdi-arrow-right"></v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

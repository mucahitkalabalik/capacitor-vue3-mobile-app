<script setup>
import appMenu from "@/components/navigation/appMenu.vue";
import headerAnimation from "@/components/home/headerAnimation.vue";

</script>

<template>
  <v-app>
    <header-animation/>
    <div class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <app-menu />
  </v-app>
</template>

<style>
.main {
  height: 90% !important;
  margin-bottom: 20%;
  margin-top: 10%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

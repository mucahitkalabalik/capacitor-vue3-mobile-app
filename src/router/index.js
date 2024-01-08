import { createRouter, createWebHistory } from "vue-router";

import homePage from "@/pages/homePage";
import basketPage from "@/pages/basketPage";
import accountPage from "@/pages/accountPage";
import productDetail from "@/pages/productDetail";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homePage",
      component: homePage,
    },
    {
      path: "/product/:id",
      name: "detail",
      component: productDetail,
    },
    {
      path: "/basket",
      name: "basketPage",
      component: basketPage,
    },
    {
      path: "/account",
      name: "accountPage",
      component: accountPage,
    },
  ],
});

export default router;

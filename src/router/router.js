import { createRouter, createWebHistory } from "vue-router";
import DetalleAnuncio from "../components/DetalleAnuncio.vue";
import card from "../components/card.vue";

// Array de objetos con las rutas
const routes = [
  { path: "/", component: card },
  { path: "/detalle/:id", component: DetalleAnuncio },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

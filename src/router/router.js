import { createRouter, createWebHistory } from "vue-router";
import DetalleAnuncio from "../components/DetalleAnuncio.vue";
import InputIdAnuncio from "../components/InputIdAnuncio.vue";

// Array de objetos con las rutas
const routes = [
  { path: "/", component: InputIdAnuncio },
  { path: "/detalle/:id", component: DetalleAnuncio },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
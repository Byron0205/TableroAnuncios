<template>
  <div>
    <div class="card-container">
      <div v-for="card in cards" :key="card.id" class="card">
        <div class="header">
          <h2>{{ card.nombre }}</h2>
        </div>
        <div class="content">
          <p>{{ card.detalle }}</p>
        </div>
        <div class="author">
          <div :style="{ backgroundColor: getRandomColor() }" class="initial">
            {{ card.autor[0] }}
          </div>
          <p>{{ card.autor }}</p>
        </div>
        <div class="price">
          <div class="circle">{{ card.precio }}$</div>
        </div>
        <p class="date">{{ card.fecha }}</p>
        <button  @click="verDetalleAnuncio(card.id)">Ver detalles</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponenteAnuncios",
  data() {
    return {
      cards: [],
    };
  },
  mounted() {
    this.getTodos();
    this.getPrueba();
  },
  methods: {
    getTodos() {
      fetch("https://anuncios-api.onrender.com/anuncios")
      .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      return response.json();
    })
    .then((data) => {
      this.cards = data;
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
    },
    getPrueba() {
  fetch("https://reqres.in/api/users?page=2")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
}
,
    getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    verDetalleAnuncio(IDAnuncio) {
      // Se envia el id con ayuda del metodo push del router-vue Pd: Cada ruta tiene un name asignado Ver router.js
      this.$router.push({ name: "detalleAnuncio", params: { id: IDAnuncio } });
    },
  },
};
</script>

<style scoped>
@import "../assets/card.css";
</style>

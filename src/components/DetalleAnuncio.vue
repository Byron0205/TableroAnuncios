/* Copiar el index.html por el CDN de FontAwesome */
<template>
  <div class="contenido">
    <div>
      <h1>{{ datosAnuncio.nombre }}</h1>
    </div>

    <div style="border-top: 1px solid #dcdcdc; margin: 3% 0 3%"></div>

    <div style="display: flex; align-items: center">
      <div class="circulo"></div>
      <h2 class="informacionPrimaria">{{ datosAnuncio.autor }}</h2>
      <p class="informacionPrimaria" style="color: #dcdcdc">|</p>
      <h2 class="informacionPrimaria">{{ datosAnuncio.fecha }}</h2>
      <p class="informacionPrimaria" style="color: #dcdcdc">|</p>
      <h2 class="informacionPrimaria">₡{{ datosAnuncio.precio }}</h2>
    </div>

    <div class="detalle">
      <p>{{ datosAnuncio.detalle }}</p>
    </div>

    <div>
      <router-link to="/">
        <button>Regresar</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datosAnuncio: {},
    };
  },
  mounted() {
    // Obtener el ID enviado en la URI
    const IDAnuncio = this.$route.params.id;

    fetch(`https://anuncios-api.onrender.com/anuncios/${IDAnuncio}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.datosAnuncio = data;
      });
  },
};
</script>

<style scoped>
@import "../assets/DetalleAnuncio.css";
</style>

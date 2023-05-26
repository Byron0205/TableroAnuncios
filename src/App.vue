<template>
    <div>
        <div class="sidebar">
            <agregar-anuncio/>
        </div>
            <div class="topbar">
                <img src="./assets/Anuncios.png" alt="Logo" class="img-logo" />
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
            
        </div>
</template>

<script>
import AgregarAnuncio from './components/AgregarAnuncio.vue';
    import ComponenteAnuncios from "./components/card.vue";

    export default {
        name: "App",
        components: {
            ComponenteAnuncios,
                AgregarAnuncio,
        },
    };
</script>

<style>
    @import "./assets/principal.css";
</style>
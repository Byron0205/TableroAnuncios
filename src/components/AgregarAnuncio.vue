<script>
import axios from 'axios';
export default {
    data: ()=>({
        anuncio: {
            nombre: "",
            detalle: "",
            fecha: "",
            autor: '',
            precio: 100
        },
        mensaje: "",
        mostrarMensaje:false

    }),
    methods: {
        async addAnuncio(){
            try{
                const url = "https://anuncios-api.onrender.com/anuncios/"

                const res = await axios.post(url,this.anuncio);
                console.log(res.data)
                this.mostrarMensaje = true
                this.mensaje = res.data.mensaje
                alert(this.mensaje)
                location.reload()
            } catch(err){
                console.log(err);
            }
        },
        recargarPagina(){
            location.reload()
        }
    }
}
</script>

<template>
    <div class="container">
        <form @submit.prevent="addAnuncio" action="post">
            <legend>Nuevo Anuncio</legend>
            <div class="field">
                <label for="nombre">Titulo</label>
                <input type="text" 
                        name="nombre" 
                        id="nombre"
                        placeholder="Titulo del anuncio"
                        v-model="anuncio.nombre">
            </div>
            <div class="field">
                <label for="fecha">Fecha</label>
                <input type="date" 
                        name="fecha" 
                        id="fecha"
                        v-model="anuncio.fecha">
            </div>
            <div class="field">
                <label for="autor">Publicado por:</label>
                <input type="text" 
                        name="autor" 
                        id="autor"
                        placeholder="Publicado por"
                        v-model="anuncio.autor">
            </div>
            <div class="field">
                <label for="precio">Precio</label>
                <input type="number" 
                        name="precio" 
                        id="precio"
                        placeholder="precio"
                        v-model="anuncio.precio">
            </div>
            <div class="field">
                <label for="detalle">Descripcion</label>
                <textarea name="detalle" 
                        id="detalle"
                        placeholder="Descripcion del producto"
                        v-model="anuncio.detalle"></textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>
    </div>
    
</template>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,600;0,700;1,400&display=swap");
    * {
        font-family: "Rubik", sans-serif;
    }
    .container{
        width: 90%;
        margin: 100px auto;
        background: #f5f6f7;
        color: black;
    }

    .container form{
        padding: 10px;
    }

    legend{
        font-size: 20px;
    }
    .field{
        display: flex;
        flex-direction: column;
    }

    input,
    textarea{
        padding: 5px;
        margin: 5px 0;
    }


    button {
        padding: 15px 25px;
        border: unset;
        border-radius: 15px;
        color: #233b73;
        z-index: 1;
        background: #f8f2ee;
        position: relative;
        font-weight: 1000;
        font-size: 17px;
        transition: all 250ms;
        overflow: hidden;
    }

    button::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 15px;
    background-color: #212121;
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
    box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
    transition: all 250ms
    }

    button:hover{
        color: #f2f2f7;
    }

    button:hover::before{
        width: 100%;
    }
</style>
<template>
  <div class="my-3">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="600"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
        <protDatos/>
        <prevencion/>
        <alimentos/>
        <alergenos/>
        <peligros/>
        <blanqueo/>
        <formacion/>
    </b-carousel>
  </div>
</template>

<script>
import protDatos from '../components/service-cards/ProtDatos';
import prevencion from '../components/service-cards/RiesgosLaborales';
import alimentos from '../components/service-cards/ManipAliment';
import alergenos from '../components/service-cards/Alergenos';
import peligros from '../components/service-cards/Peligros';
import blanqueo from '../components/service-cards/Blanqueo';
import formacion from '../components/service-cards/Formacion';

export default {
  components:{
    protDatos,
    prevencion,
    alimentos,
    alergenos,
    peligros,
    blanqueo,
    formacion
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style>
.carousel {
  font-size: 1.3rem;
  font-weight: 800;
  text-shadow: 2px 2px 2px #333;

}
.carousel-item p{
  color: rgb(255, 255, 255) !important;
}

</style>

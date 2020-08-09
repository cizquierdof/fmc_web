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
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
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

<style scoped>
.carousel-caption p,
ul {
  color: #ffffff;
  /* text-shadow: 1px 1px 2px black, 0 0 15px blue, 0 0 5px darkblue; */
  /* text-shadow: 3px 3px 10px hsl(0, 0%, 3%); */
  text-shadow: 1px 0 black, 0 1px black, 1px 0 black, 0 1px black;
}
</style>

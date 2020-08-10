<template>
  <div class="nosotros">
    <div class="fotos">
      <div class="alba">
        <img src="assets/alba.webp" alt="" />
      </div>
      <div class="alba">
        <img src="assets/pablo.webp" alt="" />
      </div>
    </div>
    <div class="texto">
      <h3>NOSOTROS</h3>
      <hr />
      <p>
        <strong>FMC EMPRESA CERTIFICADA,</strong> somos una pequeña empresa
        nacida en el 2012 con domicilio social en Valencia, con amplia
        experiencia en los sectores de la consultoría y la formación. Empezamos
        trabajando en un despachito en nuestra propia casa, y ahora ya tenemos
        local físico en Valencia capital, en Avenida Dr. Waksman, 10.
      </p>
      <p>
        Nuestro objetivo principal es conseguir la excelencia en todos tipo de
        servicios integrales que ofrecemos a nuestros clientes para poder crecer
        juntos y cumplir con todas las normativas que van saliendo
        constantemente.
      </p>
      <p>
        Nos implicamos y ofrecemos un servicio personalizado e integral para
        poder satisfacer todas las necesidades de nuestros clientes con la ayuda
        de expertos en el sector.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.nosotros {
  width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 1rem;;
}
.fotos {
  display: flex;
  justify-content: center;
}
.fotos div {
  margin: 0 1rem;
}
.texto {
  margin-top: 1rem;
  padding: 1rem;
  background-color: lightgrey;
}
</style>

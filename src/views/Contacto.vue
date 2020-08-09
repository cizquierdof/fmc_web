<template>
  <div class="container bg-light">
    <div class="left">
      <img class="rounded" src="../../public/assets/bg-01.jpg" alt="" />
    </div>
    <div class="row g-2 ">
      <input class="form-control" placeholder="Nombre" type="text" />
      <input class="form-control" placeholder="Teléfono" type="text" />
      <input class="form-control" placeholder="Email" type="email" />
      <input class="form-control" placeholder="Tipo de empresa" type="text" />
        <textarea class="form-control" placeholder="Mensaje" rows="3"></textarea>
      <button class="btn btn-primary">Enviar</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 50% 1fr;
  margin: 1em 0;
}
.left {
  height: 22em;
}
.left img {
  height: 100%;

  object-fit: contain;
}

.form-control{
  background-color: antiquewhite;

}
</style>

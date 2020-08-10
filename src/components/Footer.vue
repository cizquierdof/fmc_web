<template>
  <div class="container-fluid ">
    <div class="address py-3">
      <p>EMPRESA CERTIFICADA FMC C.B.</p>
      <p>AVDA. DR. WAKSMAN, 10 BAJO</p>
      <p>46006, VALENCIA</p>
      <p>TEL. 960 23 03 30</p>
      <p>empresacertificada@gmail.com</p>
    </div>
    <div class="social d-flex align-items-center">
      <ul class="list-unstyled list-inline">
        <li class="list-inline-item">
          <i class="fab fa-facebook"></i>
        </li>
        <li class="list-inline-item">
          <i class="fab fa-twitter"></i>
        </li>
        <li class="list-inline-item">
          <i class="fab fa-instagram"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid {
  background-color: #09196e;
  color: whitesmoke;
  display: grid;
  grid-template-columns: 15% 35% 1fr 35%;
}
.address {
  grid-column-start: 2;
  text-align: center;
}
.social{
    grid-column-start: 4;
}
.social li{
    margin-right: 2rem;
}
.address p {
  margin: 0;
}
</style>

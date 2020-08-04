<template>
  <div id="app" class="container">
    <div class="nav-container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="../public/assets/logoFMC.webp" alt="logo fmc" width="180"/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
              <li class="nav-item h3">
                <router-link to="/" class="nav-link active">INICIO</router-link>
              </li>
              <li class="nav-item h3">
                <router-link to="servicios" class="nav-link"
                  >SERVICIOS</router-link
                >
              </li>
              <li class="nav-item h3">
                <router-link to="/nosotros" class="nav-link"
                  >NOSOTROS</router-link
                >
              </li>
              <li class="nav-item h3">
                <router-link to="/contacto" class="nav-link"
                  >CONTACTO</router-link
                >
              </li>
              <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> -->
              <li class="nav-item h3">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                  >BLOG</a
                >
              </li>
            </ul>
            <!-- <form class="d-flex">
        <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
          </div>
        </div>
      </nav>
    </div>
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Footer from "./components/Footer";
export default {
  components: {
    Footer,
  },
};
</script>

<style scoped>
.nav-container{
  background-color: #09196e;
  padding: 49px 0;
}
</style>

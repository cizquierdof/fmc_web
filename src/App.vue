<template>
  <div id="app" class="container-fluid">
    <!-- <div class="nav-container">
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
          </div>
        </div>
      </nav>
    </div> -->
    <div>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#">
          <img src="../public/assets/logoFMC.webp" alt="logo fmc" width="180" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item class="h3" href="/">INICIO</b-nav-item>
            <b-nav-item-dropdown class="h3" style="margin-right:-0.8rem;">
              <b-dropdown-item href="">
                <i class="fa fa-database" aria-hidden="true"></i>
                PROTECCIÓN DE DATOS
              </b-dropdown-item>
              <b-dropdown-item href="">
                <i class="fa fa-search-dollar    "></i>
                PREVENCIÓN DE BLANQUEO DE CAPITALES
                </b-dropdown-item>
              <b-dropdown-item href=""><i class="fa fa-hard-hat" aria-hidden="true"></i> PREVENCIÓN DE RIESGOS LABORALES</b-dropdown-item
              >
              <b-dropdown-item href=""><i class="fa fa-viruses    "></i> ALÉRGENOS</b-dropdown-item>
              <b-dropdown-item href=""><i class="fas fa-diagnoses    "></i> APPCC</b-dropdown-item>
              <b-dropdown-item href=""><i class="fa fa-briefcase" aria-hidden="true"></i> ASESORAMIENTO LABORAL</b-dropdown-item>
              <b-dropdown-item href=""><i class="fas fa-coins    "></i> ASESORAMIENTO FISCAL</b-dropdown-item>
              <b-dropdown-item href=""><i class="fas fa-piggy-bank    "></i> JUBILACIONES Y PENSIONES</b-dropdown-item
              >
              <b-dropdown-item href=""><i class="fa fa-balance-scale-left" aria-hidden="true"></i> SERVICIOS JURÍDICOS</b-dropdown-item>
              <b-dropdown-item href=""><i class="fas fa-user-graduate    "></i> FORMACIÓN</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item class="h3" href="servicios"> SERVICIOS</b-nav-item>
            <b-nav-item class="h3" href="nosotros">NOSOTROS</b-nav-item>
            <b-nav-item class="h3" href="contacto">CONTACTO</b-nav-item>
            <b-nav-item class="h3" href="#" disabled>BLOG</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
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
  methods: {},
};
</script>

<style>
.container-fluid {
  width: 1024px;
}

.nav-container {
  background-color: #09196e;
  padding: 49px 0;
}
</style>

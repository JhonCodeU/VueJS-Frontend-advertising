<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <!-- Icono de NAVBAR -->
    <nav class="navbar navbar-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
        <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-top">        
        </a>
    </div>
    </nav>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">      
           <router-link to="/" class="nav-link active" aria-current="page">Inicio</router-link>
        </li>
        <li class="nav-item">          
          <router-link to="/portfolio" class="nav-link">Portfolio</router-link>           
        </li>
         <li class="nav-item">                
           <router-link to="/contacto" class="nav-link">Contacto</router-link>
        </li>
              
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  components: {
  }
}
</script>

    <style>
       .contenedor{
          height: 100%;
          width: 100%;
          display: flex;
          position: fixed;
          align-items: center;
          justify-content: center;
          color: antiquewhite;
        }
        .inicio{
           background-color: #6610f2 ;            
        }
        .portfolio{
           background-color: #304ffe ;            
        }
        .contacto{
            background-color: #474747 ;        
         }
    </style>
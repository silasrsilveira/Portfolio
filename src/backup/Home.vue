<template>

  
 <div>
    <div class="menu">
      <router-link to="/resumo" class="menu-item menu-text">Resumo</router-link>
      <router-link to="/sobre" class="menu-item menu-text">Sobre</router-link>
      <router-link to="/" class="menu-item menu-center">Silas Ribeiro</router-link>
      <router-link to="/github" class="menu-item menu-text">Github</router-link>
      <router-link to="/contato" class="menu-item menu-text">Contato</router-link>
     
                  <div class="toggle" id="MudarCor">
                  <input @click="MudarCor" type="checkbox" id="bar" checked>
                  <label for="bar"></label>
                  </div>
    </div>
    <section>
    <div class="banner-img">
    <img src="../assets/imagens/banner.png">
    </div>
     
    </section>

    <footer>

    </footer>
  


  </div>

</template>


<script>
  export default {
    data(){
      return{
        isPremium: false
      }
    },

    name: 'home',
    props: {
      msg: String
    },
      methods: {
        MudarCor: function(){
        }
      }

      
}
</script>

<style scoped>
  .banner-img{
    position: Center;
  }
  .banner-img img {
    width: 98%;
  }

.toggle

body {
    background: #eee;
}

.toggle {
    margin-bottom: 20px;
}

.toggle > input {
    display: none;
}

.toggle > label {
    position: relative;
    display: block;
    height: 28px;
    width: 52px;
    background-color: #f7f7f7;
    border: 1px #a2e3e6 solid;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.toggle > label:after {
    position: absolute;
    left: 1px;
    top: 1px;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 100px;
    background: #fff;
    box-shadow: 0px 3px 3px rgba(0,0,0,0.05);
    content: '';
    transition: all 0.3s ease;
}
.toggle > label:active:after {
    transform: scale(1.15, 0.85);
}
.toggle > input:checked ~ label {
    background-color: #4cda64;
    border-color: #4cda64;
}
.toggle > input:checked ~ label:after {
    left: 25px;
}
.toggle > input:disabled ~ label {
    background-color: #d5d5d5;
    pointer-events: none;
}
.toggle > input:disabled ~ label:after {
    background-color: rgba(255, 255, 255, 0.3);
}


</style>
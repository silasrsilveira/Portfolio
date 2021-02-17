<template>
  <div>
    <div class="menu">
      <router-link to="/resumo" class="menu-item menu-text">Resumo</router-link>
      <router-link to="/sobre" class="menu-item menu-text">Sobre</router-link>
      <router-link to="/" class="menu-item menu-center"
        >Silas Ribeiro</router-link
      >
      <router-link to="/github" class="menu-item menu-text">Github</router-link>
      <router-link to="/contato" class="menu-item menu-text"
        >Contato</router-link
      >
    </div>

    <section>
      <div class="banner-img">
        <img
          id="background"
          :src="require(`@/assets/imagens/${background}.png`)"
        />
        <div class="toggle">
          <input @click="MudarBackground" type="checkbox" id="bar" checked />
          <label for="bar"></label>
        </div>
      </div>
    </section>

    <footer></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPremium: false,
      background: "banner",
    };
  },
  name: "home",
  props: {
    msg: String,
  },
  methods: {
    MudarBackground() {
      if (this.background == "banner") {
        this.background = "fundoclaro";
      } else {
        this.background = "banner";
      }
    },
  },
};
</script>

<style scoped>
.banner-img {
  position: Center;
}
.banner-img img {
  width: 100vw;
  height: calc(100vh - 85px);
  object-fit: cover;
  object-position: top;
}

.toggle body {
  background: #eee;
}

.toggle {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.05);
  content: "";
  transition: all 0.3s ease;
}
.toggle > label:active:after {
  transform: scale(1.15, 0.85);
}
.toggle > input:checked ~ label {
  background-color: #e7eb0f;
  border-color: #e7eb0f;
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

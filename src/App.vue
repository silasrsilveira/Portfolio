<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Domine", serif;

  -webkit-font-smoothin: antialised;
  -moz-font-smoothin: graascale;
  /*  text-align: center;*/
  margin: 0 auto;
  overflow-x: hidden;

  color: white;

  /* margin-top: 60x */
}
body {
  margin: 0;
  padding: 0;
  background: black;
}

.name {
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: 100vw;
  height: 100vh;
}
.menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
}
.menu-item {
  flex: 1;
  text-align: center;
  text-transform: none;
  border-bottom: 2px solid transparent;
}

.menu-text {
  font-size: 20px;
  color: #818181;
  padding: 0px 10px;
  cursor: pointer;
  transition: 0.3s ease-in;
}

.menu-text:hover {
  color: #e5ff00;
  /* border-bottom: 2px solid #0080FF; */
}

.menu-center {
  font-size: 36px;
  color: #eaeaea;
}

a:-webkit-any-link {
  text-decoration: none;
}

@import url("https://fonts.googleapis.com/css2?family=Domine:wght@400;700&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap");
</style>

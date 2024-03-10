<script setup>
</script>

<template>
  <nav>
    <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
    <router-link class="nav-link" :to="{ name: 'About' }">About</router-link>
    <router-link class="nav-link" :to="{ name: 'Pays' }">Pays</router-link>
    <router-link class="nav-link" :to="{ name: 'Recherche' }">Recherche</router-link>
    <router-link to="/fournisseurs">Fournisseurs</router-link>
  </nav>
  <router-view />


</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.nav-link {
  color: #333;
  text-decoration: none;
  margin: 0 10px;
}

.nav-link:hover {
  text-decoration: underline;
}

nav {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

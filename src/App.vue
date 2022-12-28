<template>
  <div class="nav">
    <router-link to="/">Accueil</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/next">RegisterNext</router-link>
    <router-link to="/signup">Inscrire</router-link>

  </div> <br><br> <br>
  <router-view/>

</template>

<script>

export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: 'inter';
}

.nav{
  
  display: flex;
  padding: 30px;
  justify-content: space-between;
  background-color: #B9B308;

}
.nav a{
  color:#fff;
  display: flex;
  justify-content: center;
  padding: 30px;
}
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Alma-Amulek">Alma and Amulek</router-link> |
      <router-link to="/Teancum">Homework Help</router-link>
      <router-link to="/Gadianton">Homework Help</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #59bf8e;
  color: white;
  text-align: center;
}
</style>

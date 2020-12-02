<template>
  <div class="home">
    <div><h1>Click on a story to begin:</h1></div>
    <div class="story-container">
      <div class="stories">
        <router-link to="/Alma-Amulek">Alma and Amulek</router-link>
      </div>
      <div class="stories">
        <router-link to="/Teancum">Teancum</router-link>
      </div>
      <div class="stories">
        <router-link to="/Gadianton">Gadianton</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.story-container {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
}
.stories {
  margin: 10px 30px;
  height: 200px;
  width: 450px;
  margin-left: auto;
  margin-right: auto;
  border: solid 1px black;
  border-radius: 5px;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 5px 5px 5px;
}
a {
  text-decoration: none;
  font-size: 2.5vw;
}
</style>

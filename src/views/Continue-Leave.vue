<template>
  <div class="Alma-Amulek">
    <div>
      <h1>
        You continue searching for another city.
      </h1>
    </div>
    <div>
      <p>
        You manage to find another city and begin preaching there. Not long
        after the City of Ammonihah rises up and destroys the liberties of the
        Nephites. All are now slaves.
      </p>
    </div>
    <div class="choices-container">
      <router-link to="/Real-Alma" tag="button" class="choices">
        <p>Try a real-world example</p>
      </router-link>
      <router-link to="/Alma-Amulek" tag="button" class="choices">
        <p>Try this story again</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alma-Amulek.vue",
  components: {},
};
</script>

<style scoped>
.choices-container {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
}
.choices {
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
p {
  text-decoration: none;
  font-size: 2.5vw;
}
</style>


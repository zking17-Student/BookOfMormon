<template>
  <div class="Alma-Amulek">
    <div>
      <h1>
        You leave in search of another city
      </h1>
    </div>
    <div>
      <p>
        God commands you again to return to Ammonihah.
      </p>
    </div>
    <div class="choices-container">
      <router-link to="/Return" tag="button" class="choices">
        <p>Return to Ammonniha</p>
      </router-link>
      <router-link to="/Continue-Leave" tag="button" class="choices">
        <p>Continue in search of a better city</p>
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


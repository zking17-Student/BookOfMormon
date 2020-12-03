<template>
  <div class="Teancum">
    <div>
      <h1>
        You found what you need.
      </h1>
    </div>
    <div>
      <p>
        What do you do now?
      </p>
    </div>
    <div class="choices-container">
      <router-link to="Mean" tag="button" class="choices">
        <p>Post mean things about your bully</p>
      </router-link>
      <router-link to="Kneel2" tag="button" class="choices">
        <p>Kneel and pray</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dirt.vue",
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

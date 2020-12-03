<template>
  <div class="Elite">
    <div>
      <h1>
        You pick out your strongest men and attempt to attack the robbers
      </h1>
    </div>
    <div>
      <p>
        You are all killed. There are too many of them. All of the nephites are
        either killed or enslaved.
      </p>
    </div>
    <div class="choices-container">
      <router-link to="/Real-Gad" tag="button" class="choices">
        <p>Try a real-world example</p>
      </router-link>
      <router-link to="/Gadianton" tag="button" class="choices">
        <p>Try this story again</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Elite.vue",
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

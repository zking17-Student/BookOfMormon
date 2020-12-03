<template>
  <div class="Convince">
    <div>
      <h1>
        They begin to clean
      </h1>
    </div>
    <div>
      <p>
        What do you do?
      </p>
    </div>
    <div class="choices-container">
      <router-link to="/Leave2" tag="button" class="choices">
        <p>Leave them alone to clean while you go out with your friends</p>
      </router-link>
      <router-link to="/Help" tag="button" class="choices">
        <p>Help them clean</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Convince.vue",
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

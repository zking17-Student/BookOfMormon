<template>
  <div class="Gadianton">
    <div>
      <h1>
        Read the story and choose what you would do as a youth leader:
      </h1>
    </div>
    <div>
      <p>
        As a youth leader at your local church you begin to notice your youth struggling
        with bigger and bigger problems. It seems as if the world is attacking them every day
        in ways they can't handle alone.
        What do you do?
      </p>
    </div>
    <div class="choices-container">
      <router-link to="/Gather-Real" tag="button" class="choices">
        <p>Gather everyone together at an activity</p>
      </router-link>
      <router-link to="/Elite-Real" tag="button" class="choices">
        <p>Grab your strongest youth and visit those in need</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gadianton.vue",
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

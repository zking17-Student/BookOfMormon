<template>
  <div class="Gather">
    <div>
      <h1>
        You gather the people in one land
      </h1>
    </div>
    <div>
      <p>
        3 Nephi 3:24 24 And there were a great many thousand people who were called Nephites,
        who did gather themselves together in this land.
        What do you teach the people?
      </p>
    </div>
    <div class="choices-container">
      <router-link to="/Pray" tag="button" class="choices">
        <p>Teach the people to repent, pray, and trust God</p>
      </router-link>
      <router-link to="/Fight" tag="button" class="choices">
        <p>Teach the people to fight and wield all manner of weapons</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gather.vue",
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

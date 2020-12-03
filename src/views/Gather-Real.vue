<template>
  <div class="Elite-Real">
    <div>
      <h1>
        Everyone gathers for a youth activity
      </h1>
    </div>
    <div>
      <p>
        What do you teach them?
      </p>
    </div>
    <div class="choices-container">
      <router-link to="/Fight-Real" tag="button" class="choices">
        <p>You teach them to fight back against the attacks with quips and humor</p>
      </router-link>
      <router-link to="/Pray-Real" tag="button" class="choices">
        <p>You teach them to pray and trust God will tell you what to say</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Elite-Real.vue",
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

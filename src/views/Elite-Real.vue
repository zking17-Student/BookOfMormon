<template>
  <div class="Elite-Real">
    <div>
      <h1>
        You visit many youth and help protect them
      </h1>
    </div>
    <div>
      <p>
        But it wasn't enough. Some are still hurt by the attacks. They didn't
        learn to protect themselves and were put in harms way.
        Although what you chose wasn't bad there might be a better option.
      </p>
    </div>
    <div class="choices-container">
      <router-link to="/" tag="button" class="choices">
        <p>Go Home</p>
      </router-link>
      <router-link to="/Real-Gad" tag="button" class="choices">
        <p>Try this story again</p>
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

<template>
  <div class="Pray-Real">
    <div>
      <h1>
        You teach them to deal with their problems by praying and having Faith
      </h1>
    </div>
    <div>
      <p>
        It works! They gained the confidence and words they needed in the moment
        that they needed it. They were not scared and were not deceived by the
        words of the world. Well Done!
      </p>
    </div>
    <div class="choices-container">
      <router-link to="/" tag="button" class="choices">
        <p>
          Go Home
        </p>
      </router-link>
      <router-link to="/Real-Gad" tag="button" class="choices">
        <p>Try this story again</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pray-Real.vue",
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

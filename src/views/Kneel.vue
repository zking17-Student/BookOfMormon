<template>
  <div class="Teancum">
    <div>
      <h1>
        You kneel and ask God what to do.
      </h1>
    </div>
    <div>
      <p>
        He guides you to not succumb to your anger and to go back and wait with
        your armies. He says he shall deliver your enemy into your hands. Come
        the next day the enemy surrenders and the battle is won without
        bloodshed.
      </p>
    </div>
    <div class="choices-container">
      <router-link to="Real-Teancum" tag="button" class="choices">
        <p>Try a real-world example</p>
      </router-link>
      <router-link to="Teancum" tag="button" class="choices">
        <p>Try this story again!</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teancum.vue",
  Kill: false,
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

<template>
  <div class="Teancum">
    <div>
      <h1>
        You have killed the enemy captain with a javelin!
      </h1>
    </div>
    <div>
      <p>
        And it came to pass that Teancum in his anger did go forth into the camp
        of the Lamanites, and did let himself down over the walls of the city.
        And he went forth with a cord, from place to place, insomuch that he did
        find the king; and he did acast a javelin at him, which did pierce him
        near the heart. But behold, the king did awaken his servants before he
        died, insomuch that they did pursue Teancum, and slew him.

        Because of your anger, you have died.
      </p>
    </div>
    <div class="choices-container">
      <router-link to="Real-Teancum" tag="button" class="choices">
        <p>Try with a real-world example</p>
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

<template>
  <div class="Teancum">
    <div>
      <h1>
        You kneel and ask God what to do.
      </h1>
    </div>
    <div>
      <p>
        He guides you to not succumb to your anger and to go back and to talk
        with your parents. He says he will help you. You talk with your parents.
        The next day you are called into a meeting at school with your bully,
        their parents, you, and your parents. They say sorry and you do not get
        bullied again.
      </p>
    </div>
    <div class="choices-container">
      <router-link to="Home" tag="button" class="choices">
        <p>Home</p>
      </router-link>
      <router-link to="Real-Teancum" tag="button" class="choices">
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

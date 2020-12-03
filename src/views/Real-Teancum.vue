<template>
  <div class="Teancum">
    <div>
      <h1>
        Read the story and choose what you would do:
      </h1>
    </div>
    <div>
      <p>
        There is a person at school that has been making fun of you and your
        friends. You think they have fianlly gone too far.
      </p>
    </div>
    <div class="choices-container">
      <router-link to="Insta" tag="button" class="choices">
        <p>Make a fake instagram page to make fun of them on</p>
      </router-link>
      <router-link to="/Kneel2" tag="button" class="choices">
        <p>Kneel and pray</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Real-Teancum.vue",
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

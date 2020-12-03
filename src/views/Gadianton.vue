<template>
  <div class="Gadianton">
    <div>
      <h1>
        Read the story and choose what you would do, pretending you are
        Gidgiddoni, Chief of the Nephite Armies:
      </h1>
    </div>
    <div>
      <p>
        3 Nephi 3:21 21 But Gidgiddoni saith unto them: The Lord forbid; for if
        we should go up against them the Lord would bdeliver us into their
        hands; therefore we will prepare ourselves in the center of our lands,
        and we will gather all our armies together, and we will not go against
        them, but we will wait till they shall come against us; therefore as the
        Lord liveth, if we do this he will deliver them into our hands.
        What will you do?
      </p>
    </div>
    <div class="choices-container">
      <router-link to="/Gather" tag="button" class="choices">
        <p>Gather the people in one place</p>
      </router-link>
      <router-link to="/Elite" tag="button" class="choices">
        <p>Create an elite force to attack the Gadianton Robbers</p>
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

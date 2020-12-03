<template>
  <div class="Teancum">
    <div>
      <h1>
        Read the story and choose what you would do, pretending you are Teancum:
      </h1>
    </div>
    <div>
      <p>
        Alma 62:35 - And thus they did encamp for the night. For behold, the
        Nephites and the Lamanites also were weary because of the greatness of
        the march; therefore they did not resolve upon any stratagem in the
        night-time, save it were Teancum; for he was exceedingly angry with
        Ammoron, insomuch that he considered that Ammoron, and Amalickiah his
        brother, had been the acause of this great and lasting war between them
        and the Lamanites, which had been the cause of so much war and
        bloodshed, yea, and so much famine.
      </p>
    </div>
    <div class="choices-container">
      <router-link to="Sneak" tag="button" class="choices">
        <p>Sneak into the city</p>
      </router-link>
      <router-link to="/Kneel" tag="button" class="choices">
        <p>Kneel and pray</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teancum.vue",
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

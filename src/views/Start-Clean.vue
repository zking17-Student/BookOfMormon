<template>
  <div class="Start-Clean">
    <div>
      <h1>
        You go to your room and see your sibling on the ground playing with something
      </h1>
    </div>
    <div>
      <p>
        You talk to them and they say they don't want to clean either. What do you do?
      </p>
    </div>
    <div class="choices-container">
      <router-link to="/Convince" tag="button" class="choices">
        <p>Convince them to clean</p>
      </router-link>
      <router-link to="/Sneak3" tag="button" class="choices">
        <p>Try to sneak out</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Start-Clean.vue",
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

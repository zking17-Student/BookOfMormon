<template>
  <div class="Alma-Amulek">
    <div>
      <h1>
        You begin teaching alone in Ammonihah again.
      </h1>
    </div>
    <div>
      <p>
        It did not work. You are rejected and cast out. Not long after, the City
        of Ammonihah rises up and destroys the liberties of the Nephites. All
        are now slaves. Alma 8:17
      </p>
    </div>
    <div class="choices-container">
      <router-link to="/Invite" tag="button" class="choices">
        <p>Invite Amulek to preach with you</p>
      </router-link>
      <router-link to="/Alone" tag="button" class="choices">
        <p>
          Preach by yourself
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stay",
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

<template>
  <div class="Alma-Amulek">
    <div>
      <h1>
        You return to Ammonihah
      </h1>
    </div>
    <div>
      <p>
        Alma 8:19-21 19 And as ahe entered the city he was an hungered, and he
        said to a man: Will ye give to an humble servant of God something to
        eat? 20 And the man said unto him: I am a Nephite, and I know that thou
        art a holy prophet of God, for thou art the man whom an aangel said in a
        vision: Thou shalt receive. Therefore, go with me into my house and I
        will impart unto thee of my bfood; and I know that thou wilt be a
        blessing unto me and my house. 21 And it came to pass that the man
        received him into his house; and the man was called Amulek; and he
        brought forth bread and meat and set before Alma.
      </p>
    </div>
    <div class="choices-container">
      <router-link to="/Continue-Leave" tag="button" class="choices">
        <p>Convert Amulek and his house and Leave</p>
      </router-link>
      <router-link to="/Stay" tag="button" class="choices">
        <p>
          Stay with Amulek for a time and prepare to preach the Gospel here in
          Ammonihah
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Return.vue",
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

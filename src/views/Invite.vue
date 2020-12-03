<template>
  <div class="Invite">
    <div>
      <h1>
        You invite Amulek to teach with you
      </h1>
    </div>
    <div>
      <p>
        Alma 8:30-32 30 And Alma went forth, and also Amulek, among the people,
        to declare the words of God unto them; and they were filled with the
        Holy Ghost. 31 And they had apower given unto them, insomuch that they
        could not be confined in dungeons; neither was it possible that any man
        could slay them; nevertheless they did not exercise their bpower until
        they were bound in bands and cast into prison. Now, this was done that
        the Lord might show forth his power in them. 32 And it came to pass that
        they went forth and began to preach and to prophesy unto the people,
        according to the spirit and power which the Lord had given them.
      </p>
    </div>
    <div class="choices-container">
      <router-link to="/" tag="button" class="choices">
        <p>Go Home</p>
      </router-link>
      <router-link to="/Alma-Amulek" tag="button" class="choices">
        <p>
          Try this story again
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Invite",
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

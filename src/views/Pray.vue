<template>
  <div class="Gather">
    <div>
      <h1>
        You teach them to fight. The Robbers attack
      </h1>
    </div>
    <div>
      <p>
        3 Nephi 4:7,8,10 7 And it came to pass that they did come up to battle;
        and it was in the sixth month; and behold, great and terrible was the
        day that they did come up to battle; and they were girded about after
        the manner of robbers; and they had a lamb-skin about their loins, and
        they were dyed in blood, and their heads were shorn, and they had
        head-plates upon them; and great and terrible was the appearance of the
        armies of Giddianhi, because of their armor, and because of their being
        dyed in blood.8 And it came to pass that the armies of the Nephites,
        when they saw the appearance of the army of Giddianhi, had all fallen to
        the earth, and did lift their cries to the Lord their God, that he would
        spare them and deliver them out of the hands of their enemies.10 But in
        this thing they were disappointed, for the Nephites did not afear them;
        but they did fear their God and did supplicate him for bprotection;
        therefore, when the armies of Giddianhi did rush upon them they were
        prepared to meet them; yea, in the strength of the Lord they did receive
        them. Your men run away in fear.

        Your men are brave and strong because of their Faith in God. You protect your families.
      </p>
    </div>
    <div class="choices-container">
      <router-link to="/Real-Gad" tag="button" class="choices">
        <p>Try a real-world example</p>
      </router-link>
      <router-link to="/Gadianton" tag="button" class="choices">
        <p>Try this story again</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gather.vue",
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

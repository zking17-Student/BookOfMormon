<template>
  <div>
    <div class="pure-menu pure-menu-horizontal">
        <h2>Viewing {{whenTaught}} Semester Classes</h2>
        <p>Choose semester below</p>
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Fall')" href="#" class="pure-menu-link">Fall</a></li>
      <li class="pure-menu-item"><a @click="select('Winter')" href="#" class="pure-menu-link">Winter</a></li>
      <li class="pure-menu-item"><a @click="select('Spring')" href="#" class="pure-menu-link">Spring</a></li>
      <li class="pure-menu-item"><a @click="select('Summer')" href="#" class="pure-menu-link">Summer</a></li>
    </ul>
  </div>
    <ClassData :classes="filteredData" @course-add="courseAdded" />
  </div>
</template>

<script>
import ClassData from "@/components/ClassList.vue";
import data from '../assets/class-data';
export default {
  name: "Browse",
  components: {
    ClassData,
  },
  data() {
    return {
      whenTaught: 'Fall',
      data
    };
  },
  computed: {
    filteredData() {
        return this.data.filter(item => item.whenTaught.includes(this.whenTaught))
    }
  },
  methods: {
    select(whenTaught) {
      this.whenTaught = whenTaught;
    },
  },
};
</script>

<style scoped>
    li {
        list-style-type: none;
    }
</style>
<template>
  <div id="hello">
    <h1>Hello World</h1>
    <div v-for="item in items" :key="item">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: {
    
  },
  data() {
    return {
      items: [
      {name: "victor", age: 23},
      {name: "ann", age: 22},
      {name: "melissa", age: 19}
    ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

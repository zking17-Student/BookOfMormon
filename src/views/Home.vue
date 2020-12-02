<template>
  <div class="home">
    <div class="search-bar">
      <div>
        <form class="pure-form">
            Search: <i class="fas fa-search"></i><input v-model="searchText" />
        </form>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .search-bar {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-around;
  }
  #cart {
        margin: 10px 30px;
        text-align: left;
        width: 450px; 
        margin-left: auto; 
        margin-right: auto;
        border: solid 1px black;
        border-radius: 5px;
        -moz-box-shadow: 3px 3px 5px 6px #ccc;
        -webkit-box-shadow: 3px 3px 5px 6px #ccc;
        box-shadow: 3px 3px 5px 6px #ccc;
        display: flex;
        justify-content: space-between;
    }
    #cart p {
        padding: 0 10px;
    }
</style>

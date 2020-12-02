<template>
  <div class="home">
    <div class="search-bar">
      <div>
        <form class="pure-form">
            Search: <i class="fas fa-search"></i><input v-model="searchText" />
        </form>
        <ClassData :classes="filteredData" @course-add="courseAdded"/>
      </div>
      <div>
        <h1>Cart:</h1>
        <div id="cart" v-for="cart in cartList" :key="cart.name">
          <p>{{cart.name}}</p>
        </div>
      </div>
    </div>
    <cart/>
  </div>
</template>

<script>
// @ is an alias to /src
import ClassData from '@/components/ClassList.vue'
import data from '../assets/class-data';

export default {
  name: 'Home',
  components: {
    ClassData,
  },
  data() {
    return {
      cartList: [],
      searchText: '',
      data
    }
  },
  methods: {
    courseAdded(id){
      this.cartList.push(id);
    }
  },
  computed: {
    filteredData(){
      return this.data.filter(item => item.name.includes(this.searchText));
    }
  }
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

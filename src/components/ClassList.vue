<template>
    <div id="classList">
        <div id="classes" v-for="classData in classes" :key="classData.name">
            <p>{{classData.name}}</p>
            <p>Prerequisite(s): {{classData.prerequisite}}</p>
            <button class="btn" @click="addCourse(classData)">Add</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "classList",
    methods:{
      addCourse(courseId){
        // console.log(courseId);
        this.$emit('course-add', courseId);
      }
    },
    props: {
      classes: Array 
    }
}
</script>

<style scoped>
    #classList {
        margin: 0;
        padding: 0;
    }
    #classes {
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
    .btn {
        margin: 5px;
        padding: 10px;
    }
    #classes p {
        padding: 0 10px;
    }
</style>
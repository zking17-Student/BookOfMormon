<template>
    <div>
        <h1>Ask Questions Here:</h1>
        <div id="text-area">
            <textarea name="text" id="text" cols="70" rows="10" value=""></textarea>
            <button type="submit" id="submit-btn" @click="addResponse(value)">Submit</button>
        </div>
        <div v-for="response in responses" :key="response">
            <p>"{{response}}"</p>
        </div>
    </div>
</template>

<script>


export default {
    name: "help",
    data() {
        return {
            responses: [],
            value: "",
        }
    },
    methods: {
        addResponse() {
            let text = document.getElementById("text").value;
            this.responses.push(text);
            text = ' ';
            }
    }
}
</script>

<style scoped>
    #text-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 500px;
        margin-left: auto;
        margin-right: auto;
    }
    #submit-btn {
        width: 50%;
        margin-top: 5px;
    }
</style>
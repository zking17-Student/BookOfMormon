<template>
    <div id="cart">
        <h1>This is your cart:</h1>
        <div v-for="cart in cartItems" :key="cart.name">
            <p>{{cart.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"cart",
    prop: {
        cartItems: Array
    }
}
</script>

<style scoped>

</style>
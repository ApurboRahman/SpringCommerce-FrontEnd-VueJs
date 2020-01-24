<template>
    <li class="cart-price">${{totalPrice}}</li>
</template>

<script>
import {mapGetters}  from 'vuex'
export default {
    name:'Total_Cart_Price',
    computed: mapGetters({
        totalPrice:'getCartTotalPrice'
    })
    //{
    //    getCartTotalPrice(){
    //        return this.$store.getters.getCartTotalPrice
    //    }
    //}
}
</script>
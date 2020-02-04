<template>
    <div><!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text product-more">
                        <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
                        <router-link to="/shop">Shop</router-link>
                        <span>Shopping Cart</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Shopping Cart Section Begin -->
    <section class="shopping-cart spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="cart-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th class="p-name">Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th><i class="ti-close"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, i) in favoriteList" v-bind:key="i">
                                    <td class="cart-pic first-row"><img :src="getImgUrl(item.product.product_image)" alt></td>
                                    <td class="cart-title first-row">
                                        <h5>{{item.product.product_name}}</h5>
                                    </td>
                                    <td class="p-price first-row">{{item.product.product_price}}</td>
                                    <td class="p-price first-row">
                                        <input type="button"  value="Add to cart" @click.prevent="addItemToCart(item.product)" v-if="!addCart"/>
                                        <router-link to="checkOut"><input type="button"  value="Check out" v-if="addCart" /></router-link>
                                        <router-link to="/shop"><input type="button"  value="Continue shopping" v-if="addCart" /></router-link>
                                    </td>
                                
                                    <td class="close-td first-row"><i class="ti-close" @click.prevent="removeWish(item.product)"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- Shopping Cart Section End --></div>
</template>

<script>
import {mapGetters,mapState,mapActions} from 'vuex'

export default {
    name:'wishList_Details',
    data(){
        return{
            favorite:[],
            addCart: false,
        }
    },
    mounted(){
        this.getAllFavoriteProducts();
        
    },
    methods:{
        ...mapActions(['getAllFavoriteProducts','removeFromFavorite','addToCart']),
        removeWish(product){
            this.removeFromFavorite(product)
        },
        getImgUrl(pic) {
        return require('../assets/img/cart-page/'+pic)
        },
        addItemToCart(product) {
            this.addCart=true;
            this.addToCart(product);
    },
        continueShopping(){
            this.$router.push({name:'home'})
        },
        checkout(){
            this.$router.push({name:'checkout'})
        }
    },
    computed:{
        ...mapState({favoriteList:'favorite'}),
        ...mapGetters(["getCartTotalPrice"]),
        productWiseTotalPrice(quantity,price){
            return quantity*price
        }
    }
}
</script>
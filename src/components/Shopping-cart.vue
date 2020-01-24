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
                                    <th>Total</th>
                                    <th><i class="ti-close"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, i) in cartList" v-bind:key="i">
                                    <td class="cart-pic first-row"><img :src="getImgUrl(item.product.product_image)" alt></td>
                                    <td class="cart-title first-row">
                                        <h5>{{item.product.product_name}}</h5>
                                    </td>
                                    <td class="p-price first-row">{{item.product.product_price}}</td>
                                    <td class="qua-col first-row">
                                        <div class="quantity">
                                            <div class="pro-qty">
                                                <input type="text" value="1">
                                                <span>{{item.quantity}}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="total-price first-row">${{item.product.product_price*item.quantity}}</td>
                                    <td class="close-td first-row"><i class="ti-close" @click.prevent="removeFromCart(item)"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="cart-buttons">
                                <router-link to="/shop" class="primary-btn continue-shop">Continue shopping</router-link>
                                <a href="#" class="primary-btn up-cart">Update cart</a>
                            </div>
                            <div class="discount-coupon">
                                <h6>Discount Codes</h6>
                                <form action="#" class="coupon-form">
                                    <input type="text" placeholder="Enter your codes">
                                    <button type="submit" class="site-btn coupon-btn">Apply</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-4 offset-lg-4">
                            <div class="proceed-checkout">
                                <ul>
                                    <li class="subtotal">Subtotal <span>${{getCartTotalPrice}}</span></li>
                                    <li class="cart-total">Total <span>$240.00</span></li>
                                </ul>
                                 <router-link to="/checkout" class="proceed-btn">PROCEED TO CHECK OUT</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Shopping Cart Section End --></div>
</template>

<script>

export default {
    name:'shopping-cart',
    data(){
        return{
            cart:[]
        }
    },
    mounted(){
        return this.$store.dispatch("getAllCartProducts");
    },
    methods:{
        getImgUrl(pic) {
        return require('../assets/img/cart-page/'+pic)
        },
        continueShopping(){
            this.$router.push({name:'home'})
        },
        removeFromCart(item){
          this.$store.dispatch('removeFromCart',item)
        },
        checkout(){
            this.$router.push({name:'checkout'})
        }
    },
    computed:{
        cartList(){
            return this.$store.state.cart;
        },
        getCartTotalPrice(){
            return this.$store.getters.getCartTotalPrice
        },
        productWiseTotalPrice(quantity,price){
            return quantity*price
        }
    }
}
</script>
<template>
    <li class="cart-icon">
        <a href="#">
          <i class="icon_heart_alt"></i>
          <span>{{favoriteList.length}}</span>
        </a>
        <div class="cart-hover">
          <div class="select-items">
            <table>
              <tbody>
                <tr v-for="(item, i) in favoriteList" v-bind:key="i">
                  <td class="si-pic">
                   <img class="imgSize" :src="getImgUrl(item.product.product_image)" alt /> 
                  </td>
                  <td class="si-text">
                    <div class="product-selected">
                      <p>{{item.product.product_price}} x {{item.quantity}}</p>
                      <h6>{{item.product.product_name}}</h6>
                    </div>
                  </td>
                  <td class="si-close">
                    <i class="ti-close" @click.prevent="removeFavorite(item)"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="select-total">
            <span>total:</span>
            <h5>${{getCartTotalPrice}}</h5>
          </div>
          <div class="select-button">
            <router-link to="/shopping-cart" class="primary-btn view-card">VIEW CARD</router-link>
            <router-link to="/checkout" class="primary-btn checkout-btn">CHECK OUT</router-link>
          </div>
        </div>
      </li>
</template>

<script>
import {mapState,mapActions,mapGetters}  from 'vuex'
export default {
    name:'WishList',
    data(){
        return{
            cart:[]
        }
    },
    mounted(){
        this.getAllFavoriteProducts();
    },
    methods:{
        ...mapActions(['getAllFavoriteProducts','removeFromFavorite']),
        removeFavorite(item){
            this.removeFromFavorite(item)
        },
        getImgUrl(pic) {
        return require('../assets/img/cart-page/'+pic)
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
<template>
    <li class="cart-icon">
        <a href="#">
          <i class="icon_bag_alt"></i>
          <span>{{cartList.length}}</span>
        </a>
        <div class="cart-hover">
          <div class="select-items">
            <table>
              <tbody>
                <tr v-for="(item, i) in cartList" v-bind:key="i">
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
                    <i class="ti-close" @click.prevent="removeCart(item)"></i>
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
    name:'CartHover',
    data(){
        return{
            cart:[]
        }
    },
    mounted(){
        //return this.$store.dispatch("getAllCartProducts");
        this.getAllCartProducts()
    },
    methods:{
        getImgUrl(pic) {
        return require('../assets/img/cart-page/'+pic)
        },
        continueShopping(){
            this.$router.push({name:'home'})
        },
        
        checkout(){
            this.$router.push({name:'checkout'})
        },
        ...mapActions(['removeFromCart','getAllCartProducts']),
        //...mapActions(["getAllCartProducts"]),
        removeCart(item){
          this.removeFromCart(item)
          //this.$store.dispatch('removeFromCart',item)
        }
},
computed:{
  ...mapState({cartList:'cart'}),
 ...mapGetters(["getCartTotalPrice"])
     
}
}
</script>
<style lang="css">
.imgSize {
    width: 70px;
    height: 70px;
}
</style>
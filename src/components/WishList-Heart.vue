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
                    <i class="ti-close" @click.prevent="removeFavorite(item.product)"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="select-button" v-if="favoriteList.length!=0">
            <router-link to="/wishList_Details" class="primary-btn view-card">VIEW LIST</router-link>
          </div>
          <div class="select-button" v-else>
            <p>No favorite item</p>
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
        removeFavorite(product){
            this.removeFromFavorite(product)
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
        
    }
}
</script>
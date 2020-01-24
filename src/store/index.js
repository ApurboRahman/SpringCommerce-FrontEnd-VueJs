import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productLists:[],
    cart:[],
    addToCartProduct:''
  },
  mutations: {
    ADD_TO_CART(state,{pid,product,userTrack,amnt,quantity}){
      let cartProduct = state.cart.find(item=>{
        return item.product.product_no === pid;
      })
      if(cartProduct){
        cartProduct.quantity +=quantity;
        return
      }

      state.cart.push({pid,product,amnt,userTrack,quantity})
    },
    SET_ALL_PRODUCTS(state, products){
      state.productLists=products
    },
    SELECT_BY_GENDER(state, products){
      state.productLists=products
    },
    GET_ALL_CART_PRODUCTS(state,cartProducts){
      state.cart=cartProducts;
    },
    REMOVE_FROM_CART(state, product){
      console.log(product)
      state.cart = state.cart.filter(item=>{
        console.log(item)
        return item.id !== product.id
      })
    }
  },
  actions: {
    getAllProducts({commit}){
      let url = 'http://localhost:8080/productList';
      axios.get(url, {}, {
          headers: {"Access-Control-Allow-Origin": "*"}
        }
      ).then(
        response => {commit('SET_ALL_PRODUCTS',response.data)}
        );
    },
    addToCart({commit},product){
      let url = 'http://localhost:8080/';
      let pid = product.product_no;
      let userTrack ='track_id_23'
      let amnt = 24
      let quantity=1;
      commit('ADD_TO_CART',{pid,product,userTrack,amnt,quantity})
      axios.post(url+"addToCart",{
        product_id:pid,
        amount:amnt,
        userTrackId:userTrack,
        quantity:quantity
      })
      // .then( axios.get(url+"cart").then(response=>{
      //    commit('ADD_TO_CART',response.data)
      //  })
     // )
    },
    removeFromCart({commit},product){
      let url = "http://localhost:8080/delete/";
      let pid = product.id;
      commit('REMOVE_FROM_CART',product)
      axios.delete(url+pid)

    },
    selectByGender({commit},id){
      let url = "http://localhost:8080/productList/";
      let pid = id;
      axios.get(url+pid, {}, {
      headers: {"Access-Control-Allow-Origin": "*"}
    }).then(response => {
      commit('SELECT_BY_GENDER',response.data)});
    },
    getAllCartProducts({commit}){
      let url = 'http://localhost:8080/';
      axios.get(url+"cart").then(response=>{
          commit('GET_ALL_CART_PRODUCTS',response.data)
      })
    }
  },
  modules: {
  },
  getters:{
    getAllProductFromCart(state){
      let url="http://localhost:8080/";
      axios.get(url+"cart").then(response=>state.cart=response.data)
    },
    
    getCartTotalPrice(state){
     let totalPrice =0;
     state.cart.forEach(item=>{
       totalPrice += item.quantity*item.product.product_price;
     })
     return totalPrice; 
    }

    
  }
})
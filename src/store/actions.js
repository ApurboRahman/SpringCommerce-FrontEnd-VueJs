import axios from 'axios';

   export const getAllProducts = ({commit})=>{
        let url = 'http://localhost:8080/productList';
        axios.get(url, {}, {
            headers: {"Access-Control-Allow-Origin": "*"}
          }
        ).then(
          response => {commit('SET_ALL_PRODUCTS',response.data)}
          );
      }
      
    export const addToCart =({commit},product)=>{
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
      }

      export const removeFromCart=({commit},product)=>{
        let url = "http://localhost:8080/delete/";
        let pid = product.id;
        commit('REMOVE_FROM_CART',product)
        axios.delete(url+pid)
  
      }
      
      export const selectByGender = ({commit},id)=>{
        let url = "http://localhost:8080/productList/";
        let pid = id;
        axios.get(url+pid, {}, {
        headers: {"Access-Control-Allow-Origin": "*"}
      }).then(response => {
        commit('SELECT_BY_GENDER',response.data)});
      }

      export const getAllCartProducts=({commit})=>{
        let url = 'http://localhost:8080/';
        axios.get(url+"cart").then(response=>{
            commit('GET_ALL_CART_PRODUCTS',response.data)
        })
      }
  
      export const addToFavorite=({commit},product)=>{
        let url = 'http://localhost:8080/';
        let pid = product.product_no;
        let userTrack ='track_id_23'
        let amnt = 24
        let quantity=1;
        commit('ADD_TO_FAVORITE',{pid,product,userTrack,amnt,quantity})
        axios.post(url+"addToFavorite",{
          product_id:pid,
          amount:amnt,
          userTrackId:userTrack,
          quantity:quantity
        })
      }

      export const getAllFavoriteProducts=({commit})=>{
        let url = 'http://localhost:8080/';
        axios.get(url+"favorite").then(response=>{
            commit('GET_ALL_FAVORITE_PRODUCTS',response.data)
        })
      }

      export const removeFromFavorite=({commit},product)=>{
        let url = "http://localhost:8080/delete/favorite/";
        let pid = product.id;       
        commit('REMOVE_FROM_FAVORITE',product)
        axios.delete(url+pid)
  
      }
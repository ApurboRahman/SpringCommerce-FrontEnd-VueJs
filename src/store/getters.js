import axios from 'axios';

    export const getAllProductFromCart=(state)=>{
        let url="http://localhost:8080/";
        axios.get(url+"cart").then(response=>state.cart=response.data)
      }
      
      export const getCartTotalPrice=(state)=>{
       let totalPrice =0;
       state.cart.forEach(item=>{
         totalPrice += item.quantity*item.product.product_price;
       })
       return totalPrice; 
      }

      export const getAllProductFromFavorite=(state)=>{
        let url="http://localhost:8080/";
        axios.get(url+"favorite").then(response=>state.favorite=response.data)
      }

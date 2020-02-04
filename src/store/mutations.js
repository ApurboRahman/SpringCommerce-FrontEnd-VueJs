
    export const ADD_TO_CART=(state,{pid,product,userTrack,amnt,quantity})=>{
        let cartProduct = state.cart.find(item=>{
          return item.product.product_no === pid;
        })
        if(cartProduct){
          cartProduct.quantity +=quantity;
          return
        }
  
        state.cart.push({pid,product,amnt,userTrack,quantity})
      }

      export const SET_ALL_PRODUCTS=(state, products)=>{
        state.productLists=products
      }

      export const SELECT_BY_GENDER= (state, products) =>{
        state.productLists=products
      }

      export const GET_ALL_CART_PRODUCTS=(state,cartProducts)=>{
        state.cart=cartProducts;
      }

      export const REMOVE_FROM_CART=(state, product)=>{
        state.cart = state.cart.filter(item=>{
          return item.product.id !== product.id
        })
      }

      export const ADD_TO_FAVORITE=(state,{pid,product,userTrack,amnt,quantity})=>{
        let cartProduct = state.favorite.find(item=>{
          return item.product.product_no === pid;
        })
        if(cartProduct){
          cartProduct.quantity +=quantity;
          return
        }
  
        state.favorite.push({pid,product,amnt,userTrack,quantity})
      }

      export const GET_ALL_FAVORITE_PRODUCTS=(state,cartProducts)=>{
        state.favorite=cartProducts;
      }

      export const REMOVE_FROM_FAVORITE=(state, product)=>{
        state.favorite = state.favorite.filter(item=>{
          return item.product.id !== product.id
        })
      }

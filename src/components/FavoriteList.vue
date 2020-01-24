<template>
  <div class="col-lg-3 text-right col-md-3">
    <ul class="nav-right">
      <WishList/>
      <CartHover/>
      <TotalCartPrice/>
      
    </ul>
  </div>
</template>

<script>
import CartHover from './Cart-Hover'
import WishList from './WishList-Heart'
import TotalCartPrice from './CartPriceTotal-Hover'

export default {
    name:'Favorite',
    components:{
        CartHover,
        WishList,
        TotalCartPrice
    }
}
</script>
<template>
<div>
    <table>
        <thead>
        </thead>
        <tr>
            <td></td>
        </tr>
 <div v-for="(item, i) in singleProduct" v-bind:key="i">
    {{singleProduct.product_name}} {{amount}}
     <input type="number" min="1" v-model="amount"/>
        <button v-on:click="addToCart()" class="btn btn-success add_to_cart_btn">Add to Cart</button>
 </div>
    </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'ProductDetails',
 data(){
 return{
     singleProduct:[],
     amount:1,
     noUse:{}
 }   
},
methods:{
    addToCart(){
        let url = 'http://localhost:8080/';
        let pid = this.$route.params.tempid;
        axios.post(url+"addToCart",{
            productId:pid,
            amount:this.amount,
            userTrackId:'track_id_123'
        }).then(response=>{
            this.noUse=response.data;
            this.$router.push({name:'cart'});
            // let status = JSON.parse(response.data.status);
          //redirect logic
          if (status == '200') {
            //this.$router.push('http://127.0.0.1:8081/cart');
           } else {
            // this.$router.push('http://127.0.0.1:8081/cart');
           }
        }).catch(e => {
      this.errors.push(e)
    })
    }

},
mounted(){
let url = "http://localhost:8080/singleProduct/"
let pid = this.$route.params.tempid;
axios.get(url+pid)
.then((
    this.singleProduct=[{product_name:'Product 1'},{product_name:'Product 2'},{product_name:'Product 3'}]))
}
}

</script>
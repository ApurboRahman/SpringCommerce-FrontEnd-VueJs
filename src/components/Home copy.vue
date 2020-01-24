<template>
    <div>Welcome to E Commerce

        <div>
            <ul v-for="(item, i) in productLists" v-bind:key="i">
                <router-link :to="{path:'/productDetials/'+item.product_no}">{{item.product_name}}</router-link>
                
            </ul>
        </div>
    </div>

</template>


<script>
import axios from 'axios'
export default {
  name: 'Home',
  components:{},
  data(){
      return{
          productLists:[]
      }
  },
  methods:{
     
      

  },mounted(){
 axios.get('http://localhost:8080/productList',{},{
   headers: {
          "Access-Control-Allow-Origin": "*"
        }}).then(response=>this.productLists=response.data)
  },
  computed:{

  }
}
</script>

<style scoped>

</style>
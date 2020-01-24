<template>
    <body>
         <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text">
                        <a href="#"><i class="fa fa-home"></i> Home</a>
                        <span>Register</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Form Section Begin -->

    <!-- Register Section Begin -->
    <div class="register-login-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="register-form">
                        <h2>Register</h2>
                        <form id="register-form" name="registerForm" role="form" v-on:submit.prevent="register()" no-validate>
                            <div class="group-input">
                                <label for="login">Username*</label>
                                <input type="text" id="login" v-model="registration.login">
                            </div>
                            <div class="group-input">
                                <label for="email">Email address*</label>
                                <input type="text" id="email" v-model="registration.email">
                            </div>
                            <div class="group-input">
                                <label for="password">Password *</label>
                                <input type="password" id="password" v-model="registration.password">
                            </div>
                            <div class="group-input">
                                <label for="confirmPass">Confirm Password *</label>
                                <input type="password" id="confirmPass" v-model="registration.confirmPass">
                            </div>
                            <button type="submit" class="site-btn register-btn">REGISTER</button>
                        </form>
                        <div class="switch-login">
                            <router-link to="/login" class="or-login">Or Login</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Register Form Section End -->
    </body>
</template>
<script>
import axios from 'axios';
export default {
    name:'registration',
    data(){
        return{
            registration:{
                login:'',
                email:'',
                password:"",
                confirmPass:''
            }

        }
    },
    methods:{
        register(){
            let url = 'http://localhost:8080/';
            //alert('hey do you want to register!!')
            axios.post(url+'api/register', this.registration).then(response=>{
            this.registration=response.data;
            if(response.status=='201'){
              this.$router.push({name:'login'});
            }else{
             // this.$router.push({name:'register'});
            }
            
            })
        }
    },
    mounted(){

    }
}
</script>
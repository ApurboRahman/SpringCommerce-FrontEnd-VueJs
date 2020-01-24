<template>
<body>
  <!-- Breadcrumb Section Begin -->
  <div class="breacrumb-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-text">
            <router-link to="/">
              <i class="fa fa-home"></i> Home
            </router-link>
            <span>Login</span>
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
          <div class="login-form">
            <h2>Login</h2>
            <form name="loginForm" role="form" v-on:submit.prevent="login()" no-validate>
              <div class="group-input">
                <label for="username">Username or email address *</label>
                <input type="text" id="username" v-model="loginVM.username" />
              </div>
              <div class="group-input">
                <label for="password">Password *</label>
                <input type="password" id="password" v-model="loginVM.password" />
              </div>
              <div class="group-input gi-check">
                <div class="gi-more">
                  <label for="save-pass">
                    Save Password
                    <input type="checkbox" id="save-pass" />
                    <span class="checkmark"></span>
                  </label>
                  <a href="#" class="forget-pass">Forget your Password</a>
                </div>
              </div>
              <button type="submit" class="site-btn login-btn">Sign In</button>
            </form>
            <div class="switch-login">
              <router-link to="/register" class="or-login">Or Create An Account</router-link>
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
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      datas: "",
      loginVM: {
        username: "",
        password: ""
      },
      authenticationError: null
    };
  },
  methods: {
    login() {
     // alert(this.loginVM.username);
      let url = "http://localhost:8080/";
      //alert('hey do you want to register!!')
      axios
        .post(url + "api/authenticate", this.loginVM, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":"HEAD, GET, POST, PUT, PATCH, DELETE",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, origin, authorization, accept, client-security-token"
            
          }
        })
        .then(response => {
          this.datas = response.data;
          // this.$router.push({ name: "home" });
          //alert(response.status);
          if (response.status == "200") {
           this.$router.push({ name: "home" });
          } else {
          this.$router.push({name:'register'});
          }
        }).catch(() => {
        this.authenticationError = true;
        alert('authenticationError');
      });
    }
  }
};
</script>
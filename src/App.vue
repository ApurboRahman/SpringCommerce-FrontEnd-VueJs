<template>
  <div id="app">
    <Header/>
    <router-view/>
    <PartnerLogSection/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import PartnerLogSection from './components/PartnerLogSection.vue'

export default {
  name:'app',
  components: {
   Header, PartnerLogSection,Footer
  }
}
</script>
<style>
#app {
  font-family: 'Muli','Avenir', Helvetica, Arial, sans-serif,;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

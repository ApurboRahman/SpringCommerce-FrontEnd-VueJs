import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetails from '../components/ProductDetails.vue'
import Cart from '../components/Cart.vue'
import Checkout from '../components/Checkout.vue'
import Shop from '../components/Shop.vue'
import ShoppingCart from '../components/Shopping-cart.vue'
import Blog from '../components/Blog.vue'
import BlogDetails from '../components/BlogDetails.vue'
import Contact from '../components/Contact.vue'
import Faq from '../components/Faq.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import WishList_Details from '../components/WishList_Details.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/productDetials/:tempid',
    name: 'productDetials',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProductDetails
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cart
  }
  ,
  {
    path: '/shop',
    name: 'shop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Shop
  },
  {
    path: '/checkout',
    name: 'checkout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Checkout
  },
  {
    path: '/blog',
    name: 'blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Blog
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Contact
  },
  {
    path: '/blog-details',
    name: 'blog-details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BlogDetails
  },
  {
    path: '/shopping-cart',
    name: 'shopping-cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ShoppingCart
  },
  {
    path:'/wishList_Details',
    name: 'wishList_Details',
    component:WishList_Details
  },
  {
    path: '/faq',
    name: 'faq',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Faq
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  }
  
]

const router = new VueRouter({
  hashbang: false,
  mode: 'history',
  routes
})

export default router

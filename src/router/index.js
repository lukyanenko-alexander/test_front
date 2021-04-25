import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import Category from "../views/Category/Category";
import Post from "../views/Post/Post";
import PostCreate from "../views/Post/PostCreate";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/categories/:id',
    name: 'Category',
    component: Category
  },
  {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreate
  },
  {
    path: '/posts/:id',
    name: 'Post',
    component: Post
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

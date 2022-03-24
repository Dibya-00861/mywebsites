import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import CreatePost from "../views/CreatePost.vue";
import Admin from "../views/Admin.vue";
import Profile from "../views/Profile.vue";
import BlogPreview from "../views/BlogPreview.vue";
import ViewBlog from "../views/ViewBlog.vue";
import EditBlog from "../views/EditBlog.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      title:'Home',
    }
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    meta:{
      title:'Blogs',
    }
    
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta:{
      title:'Login',
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta:{
      title:'register',
    }
  },
  {
    path: "/forgotPassword",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta:{
      title:'ForgotPassword',
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta:{
      title:'Profile',
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta:{
      title:'Admin',
    }
  },
  {
    path: "/createPost",
    name: "CreatePost",
    component: CreatePost,
    meta:{
      title:'CreatePost',
    }
  },
  {
    path: "/post-preview",
    name: "BlogPreview",
    component: BlogPreview,
    meta:{
      title:'BlogPreview',
    }
  },
  {
    path: "/view-blog/:blogid",
    name: "ViewBlog",
    component: ViewBlog,
    meta:{
      title:'ViewBlog',
    }
  },
  {
    path: "/editBlog/:blogid",
    name: "EditBlog",
    component: EditBlog,
    meta:{
      title:'EditBlog',
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to,from,next)=>{
  document.title=`${to.meta.title}| News World`;
  next();
});


export default router;

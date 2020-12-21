import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/custom/Header";
import Footer from "./layout/custom/Footer";
import Main from "@/layout/custom/Main";
import PostDetail from "@/layout/custom/PostDetail";
import Info from "@/layout/custom/Info";
import Contacts from "@/layout/custom/Contacts";
import Catalogue from "@/views/Catalogue";
import Login from "@/layout/custom/Login";
import Signup from "@/layout/custom/Signup";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "starter",
      components: {
        header: Header,
        default: Main,
        footer: Footer
      }
    },
    {
      path: "/post/:id",
      name: "postDetail",
      components: {
        header: Header,
        default: PostDetail,
        footer: Footer
      }
    },
    {
      path: "/info",
      name: "info",
      components: {
        header: Header,
        default: Info,
        footer: Footer
      }
    },
    {
      path: "/contacts",
      name: "contacts",
      components: {
        header: Header,
        default: Contacts,
        footer: Footer
      }
    },
    {
      path: "/catalogue",
      name: "catalogue",
      components: {
        header: Header,
        default: Catalogue,
        footer: Footer
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: Header,
        default: Login,
        footer: Footer
      }
    },
    {
      path: "/signup",
      name: "signup",
      components: {
        header: Header,
        default: Signup,
        footer: Footer
      }
    }
  ]
});

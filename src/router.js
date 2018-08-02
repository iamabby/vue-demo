import Vue from "vue";
import VueRouter from 'vue-router';

import Home from "./component/Home";
import Navs from "./component/Navs";
import About from "./component/About";
import Contact from "./component/Contact";
import Product from "./component/Product";
import Bluetooth from "./component/Bluetooth";
import Apps from "./component/Apps";
import Indexprodetail from "./component/Indexprodetail";
import Newsdetail from "./component/Newsdetail";
import Newslist from "./component/Newslist";

Vue.use(VueRouter);
const routes = [{
    path: "/",
    component: Home
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/navs",
    component: Navs
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    name: "Product",
    path: "/product",
    component: Product,
    children: [{
        name: "Bluetooth",
        path: "bluetooth",
        component: Bluetooth
      },
      {
        name: "Apps",
        path: "apps",
        component: Apps
      },
    ]
  },
  {
    path: "/indexprodetail/:id",
    component: Indexprodetail
  },
  {
    path: "/Newslist",
    component: Newslist
  },
  {
    path: "/newsdetail/:id",
    component: Newsdetail
  },
]

export const router = new VueRouter({
  mode: "history",
  routes
})
import Vue from "vue";
import Router from "vue-router";
import Splash from "./components/Splash.vue";
import DevLogs from "./components/devLogs.vue";
import About from "./components/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "splash",
      component: Splash
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>

        import(/* webpackChunkName: "about" */ "./components/About.vue")

    },

    { 
      path: "/devLogs",
      name: "DevLogs",
      component: () =>
      import("./components/devLogs.vue")
    },
  ],

  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }

    

  ]
});

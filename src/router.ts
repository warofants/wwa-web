import Vue from "vue";
import Router from "vue-router";
import Splash from "./components/Splash.vue";

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
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
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
  },
});

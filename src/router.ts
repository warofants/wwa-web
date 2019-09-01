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
      component: () =>
        import("./components/About.vue")
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
  }
});

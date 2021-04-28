import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
  },
  {
    path: '/step',
    name: 'Steps',
    props: true,
    component: () => import(/* webpackChunkName: "steps" */ '../views/Steps/Index.vue'),
    children: [
      {
        path: "dimensions",
        name: "Dimensions",
        component: () =>
          import(
            /* webpackChunkName: "dimensions" */ "../views/Steps/Dimensions.vue"
          ),
      },
      {
        path: "isolation",
        name: "Isolation",
        component: () =>
          import(
            /* webpackChunkName: "isolation" */ "../views/Steps/Isolation.vue"
          ),
      },
      {
        path: "orientation",
        name: "Orientation",
        component: () =>
          import(
            /* webpackChunkName: "orientation" */ "../views/Steps/Orientation.vue"
          ),
      },
      {
        path: "temperature",
        name: "Temperature",
        component: () =>
          import(
            /* webpackChunkName: "temperature" */ "../views/Steps/Temperature.vue"
          ),
      },
      {
        path: "final",
        name: "Final",
        component: () =>
          import(
            /* webpackChunkName: "final" */ "../views/Steps/Final.vue"
          ),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
})

export default router

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import(
      /* webpackChunkName: "layouts-default-index" */
      '@/layouts/default/Index'
      ),
    children: [
      {
        path: "/",
        name: "사용자관리",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/User.vue"),
      },
      {
        path: "/user",
        name: "사용자관리",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/User.vue"),
      },
      {
        path: "/userreg",
        name: "사용신청등록",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/UserReg.vue"),
      },
      {
        path: "/userinfo",
        name: "사용자정보",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/UserInfo.vue"),
      },
      {
        path: "/useredit",
        name: "수정",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/UserEdit.vue"),
      },
      {
        path: "/usermass",
        name: "사용신청등록 - 대량등록",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/UserMass.vue"),
      },
      {
        path: "/common",
        name: "공통코드관리",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Common.vue"),
      },
      {
        path: "/comnew",
        name: "신규등록",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ComNew.vue"),
      },
      {
        path: "/cominfo",
        name: "상세정보",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ComInfo.vue"),
      },
      {
        path: "/comedit",
        name: "수정",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ComEdit.vue"),
      },
      {
        path: "/institute",
        name: "기관코드관리",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Institute.vue"),
      },
      {
        path: "/instireg",
        name: "신규등록",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/InstiReg.vue"),
      },
      {
        path: "/instimass",
        name: "신규등록 - 대량등록",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/InstiMass.vue"),
      },
      {
        path: "/instiinfo",
        name: "상세정보",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/InstiInfo.vue"),
      },
      {
        path: "/multi",
        name: "다자간시스템관리",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Multi.vue"),
      },
      {
        path: "/ho",
        name: "서버상태",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Ho.vue"),
      },
      {
        path: "/hoinfo",
        name: "호출정보",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/HoInfo.vue"),
      },
      {
        path: "/hoinfonew",
        name: "신규등록",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/HoInfoNew.vue"),
      },
      {
        path: "/hoinfod",
        name: "상세정보",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/HoInfoD.vue"),
      },
      {
        path: "/reginfo",
        name: "Registered정보",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/RegInfo.vue"),
      },
    ]
  },
  {
    path: '/authentication',
    component: () => import(
      /* webpackChunkName: "layouts-authentication-index" */
      '@/layouts/authentication/Index'
      ),
    children: [
      {
        path: 'sign-in',
        name: 'SignIn',
        component: () => import(
          /* webpackChunkName: "views-sign-in" */
          '@/views/authentication/SignIn'
          )
      },
      {
        path: 'sign-up',
        name: 'SignUp',
        component: () => import(
          /* webpackChunkName: "views-sign-up" */
          '@/views/authentication/SignUp'
          )
      },
    ]
  },


]

const router = new VueRouter({
  mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

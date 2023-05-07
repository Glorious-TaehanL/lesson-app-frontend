import { createWebHistory, createRouter } from "vue-router";
import store from "@/store/store";

import Home from "@/components/Home/Home.vue"
import Notice from "@/components/Notice/Notice.vue"
import Course from "@/components/Course/Course.vue"
import About from "@/components/About/About.vue"
import CourseDetail from "@/components/Course/CourseDetail.vue"
import SubCourse from "@/components/Course/SubCourse/SubCourse.vue"

const routes = [
    {
        path: "/",
        redirect: '/home'
    },
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/notice",
        name: "Notice",
        component: Notice
    },
    {
        path: "/course",
        name: "Course",
        component: Course
    },
    {
        path:"/course/detail/:id",
        name: "CourseDetail",
        component: CourseDetail
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/unit/:category/:id",
        name: "SubCourse",
        component: SubCourse
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    store.commit('Nav/SET_NAV', to.name);
    next();
})

export default router;
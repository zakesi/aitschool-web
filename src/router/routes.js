import Home from "../views/Home.vue";
import PlanItem from "../views/PlanItem.vue";
import CourseSection from "../views/CourseSection.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/plan/:id",
    name: "PlanItem",
    component: PlanItem
  },
  {
    path: "/course/:chaptar_id/:section_id",
    name: "CourseSection",
    component: CourseSection
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

import webCourses from "../data/WebCourses.js";
import mobileCourse from "../data/MobileCoureses.js";
import dataCourse from "../data/DataCourses.js";
import courseCard from "../components/CourseCard.js";
let web = document.querySelector("#WebCourse");
let mobile = document.querySelector('#MobileCourse')
let data = document.querySelector('#DataCourse')
webCourses.map((course) => {
    web.innerHTML += courseCard(course);
});
mobileCourse.map((course) => {
    mobile.innerHTML += courseCard(course);
});
dataCourse.map((course) => {
    data.innerHTML += courseCard(course);
});


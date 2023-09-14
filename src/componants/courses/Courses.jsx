import { useEffect } from "react";
import { useState } from "react";
import SingleCourse from "../Single-Course/SingleCourse";
const Courses = () => {

    const [courses, setCourses] = useState([])

    useEffect( () => {
        fetch("../../../public/course-details.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div>
            <h2>Course Container: {courses.length}</h2>
            {
                courses.map(course => <SingleCourse key={course.id} course={course}></SingleCourse>)
            }
        </div>
    );
};

export default Courses;
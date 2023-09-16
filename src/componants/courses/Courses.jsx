import PropTypes from 'prop-types'
import SingleCourse from "../Single-Course/SingleCourse";
import { useEffect } from "react";
import { useState } from "react";

const Courses = (props) => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch("course-details.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    // eslint-disable-next-line react/prop-types
    const {addList} = props;

    return (
        <div className="flex flex-wrap gap-4 w-[77%]">
            {
                courses.map(course => <SingleCourse key={course.id} addList={addList} course={course}></SingleCourse>)
            }
        </div>
    );
};

Courses.prototype = {
    courses: PropTypes.array,
    addList: PropTypes.func
}

export default Courses;
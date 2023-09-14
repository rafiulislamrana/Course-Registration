const SingleCourse = (course) => {
    console.log(course.course.title)
    return (
        <div>
            Course Title: {course.course.title}
        </div>
    );
};

export default SingleCourse;
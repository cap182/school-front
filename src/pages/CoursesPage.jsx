import { useState } from "react";
import Course from "../components/Course";
import Percentages from "../components/Percentages";
import { useAuth } from "../context/AuthContext";

export const CoursesPage = () => {
  const { user } = useAuth();
  const [selecterdCourse, setSelectedCourse] = useState(null)
  const selectCourse = (course) => {
    setSelectedCourse(course)
  }
  const listCourses =
    user?.courses?.length > 0 ? (
      user.courses.map((course) => (
        <Course key={course.courseId} {...course} selectCourse={()=>selectCourse(course.courseId)}></Course>
      ))
    ) : (
      <div key={"0"}>Sin cursos asignados</div>
    );
  return (
    <>
    <div className="grid grid-cols-2 gap-4">

      <div className="items-center justify-center p-8 ">{listCourses}</div>
      <div className="items-center justify-center p-8 "><Percentages courseId={selecterdCourse}></Percentages></div>
    </div>
    </>
  );
};

export default CoursesPage;

import React from "react";
// import { useCourse } from "../context/CourseContext";

function Course({ courseId, courseName, hoursWeek, grade, selectCourse }) {
  // const { setSelectedCourse } = useCourse();
  // const selectCourse = () => {
  //   console.log("test1");
  //   setSelectedCourse(courseId);
  // };
  return (
    <div
      className="grid grid-cols-3 divide-x bg-zinc-900 my-6 max-w-l text-center min-h-fit 
    leading-6 rounded-lg shadow-lg overflow-hidden divide-zinc-950 input-span"
    >
      <div className="p-3">
        <span className="font-bold">Curso </span>
        <span>{courseName}</span>
      </div>
      <div className="p-3 text-xs grid grid-rows-2">
        <div>
          <span className="font-bold">Horas/Semana </span>
          <span>{hoursWeek}</span>
        </div>
        <div>
          <span className="font-bold">Grado </span>
          <span>{grade}</span>
        </div>
      </div>
      <div className="p-3 text-xs">
        <button className="bg-zinc-900 hover:bg-red-500 rounded-full p-3 courses-button">
          Lista
        </button>
        <button
          onClick={selectCourse}
          className="bg-zinc-900 hover:bg-lime-500 rounded-full p-3 courses-button"
        >
          Porcentajes
        </button>
      </div>
    </div>
  );
}

export default Course;
